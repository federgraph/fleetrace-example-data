class GridCell {
    val: string = '';
    css: string = '';
    idx: number = 0;
    isGroupCol: boolean = false;
}

class GridCol {
    props: GridCell = new GridCell();
}

class GridRow {
    cols: Array<GridCol>;
    constructor(colCount: number) {
        this.cols = new Array<GridCol>(colCount);
        for (let c = 0; c < colCount; c++) {
            this.cols[c] = new GridCol();
            this.cols[c].props.idx = c;
        }
    }
}

class Grid {
    rows: Array<GridRow>;
    constructor(rowCount: number, colCount: number) {
        this.rows = new Array<GridRow>(rowCount);
        for (let r = 0; r < rowCount; r++) {
            this.rows[r] = new GridRow(colCount);
        }
    }
}

class GridSort {
    git: number[][]; // global_index_table;
    g_pattern = new RegExp("(^| )g(\\d)+( |$)");
    upchar = String.fromCharCode(160, 9650);
    downchar = String.fromCharCode(160, 9660);
    spacechar = '';
    firstPass = true;
    currentColumn: number = 0;
    tbody: HTMLElement;
    ths: HTMLCollectionOf<HTMLTableCellElement>;
    trs: HTMLCollectionOf<HTMLTableRowElement>;
    rowCount: number;
    colCount: number;
    grid: Grid;
    sortType: string[];

    init(tab: any) {
        this.tbody = tab.getElementsByTagName("tbody")[0];
        let thead = tab.getElementsByTagName("thead");
        if (thead.length == 0) {
            return;
        }
        this.ths = thead[0].getElementsByTagName("tr")[0].getElementsByTagName("th");
        this.trs = this.tbody.getElementsByTagName("tr");
        this.rowCount = this.trs.length;
        this.colCount = this.ths.length;
        this.grid = new Grid(this.rowCount, this.colCount);
        this.sortType = new Array(this.colCount);
        for (let s = 0; s < this.colCount; s++) {
            this.sortType[s] = "u";
        }

        for (let i = 0; i < this.ths.length; i++) {
            const th = this.ths[i];
            th.style.cursor = "pointer";
            th.onclick = () => this.sort(i);

            // create invisible phantom elements for holding the sort indicator char
            if (this.firstPass) {
                th.appendChild(document.createTextNode(this.spacechar));
            }

            const tn = th.lastChild as Text;
            tn.data = this.spacechar;            
            this.currentColumn = i;
        }
    }

    sort(col: number) {
        let cc = this.currentColumn | 0;
        let tds: HTMLCollectionOf<HTMLTableCellElement>; 
        let td: HTMLElement;
        let val: string;
        let css: string;
        let idx: number;
        let gcol: boolean;

        if (this.firstPass) {
            // on firstPass run through all rows,
            // buffer the whole content of the table in grid
            // and initialize the sortType for each column

            let idx: number;
            let p: GridCell;
            for (let r = 0; r < this.rowCount; r++) {
                tds = this.trs[r].getElementsByTagName("td");
                this.grid[r] = new Array(this.colCount);
                for (let c = 0; c < this.colCount; c++) {
                    td = tds[c];
                    val = td.firstChild.nodeValue;
                    css = td.className;
                    idx = this.git[r][c];
                    gcol = this.g_pattern.test(css);
                    p = this.grid.rows[r].cols[c].props;
                    p.val = val;
                    p.css = css;
                    p.idx = idx;
                    p.isGroupCol = gcol;
                }
            }
        }

        let sf = this.ths[cc].lastChild as Text;
        // sort the grid (backend data container)
        if (col == cc && ! this.firstPass) {
            // swap the sort indicator
            if (sf.data == this.downchar) {
                sf.data = this.upchar;
            } else {
                sf.data = this.downchar;
                
            }
        } else {
            // remove the sort indicator from the old sort column
            if (cc >= 0 && cc < this.colCount) {
                sf.data = this.spacechar;
            }
            // update current column index variables
            this.currentColumn = col;
            sf = this.ths[this.currentColumn].lastChild as Text;
            // and update the sort indicator of the now current column
            sf.data = this.upchar; // do not use sf, because this.cc has changed
        }

        // copy over data from the backend data store to the visible html table cells
        let desc = sf.data == this.downchar;
        let r: number;
        let c: number;
        let p: GridCell;
        for (let row = 0; row < this.rowCount; row++) {
            // swap direction if desc
            if (desc) {
                r = this.rowCount - 1 - row;
            } else {
                r = row;
            }
            tds = this.trs[r].getElementsByTagName("td");
            for (c = 0; c < this.colCount; c++) {
                td = tds[c];
                idx = this.grid.rows[row].cols[col].props.idx-1;
                p = this.grid.rows[idx].cols[c].props;
                css = p.css;
                val = p.val;
                gcol = p.isGroupCol;

                td.firstChild.nodeValue = val;
                if (gcol) {
                    td.className = css;
                }
            }
        }
        this.firstPass = false;
    }

    reset() {
        if (this.ths[0].click) {
            this.ths[0].click();
        }
    }

}