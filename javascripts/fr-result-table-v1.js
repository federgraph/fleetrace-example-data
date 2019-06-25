/*!
* file: result-table-v1.js
* version: 1.0.0
* purpose: suport for FR Html
* license: GPL 3.0
*
*     F
*    * * *
*   *   *   G
*  *     * *   *
* E - - - H - - - I
*  *     * *         *
*   *   *   *           *
*    * *     *             *
*     D-------A---------------B
*              *
*              (C) Federgraph.de
*
*/

var git; // global_index_table;
var sot; // TableSort instance for the first table with class="sortable"

var tableSorter =
{
    init: function () {
        if (!tableSorter.browserTest()) {
            return;
        }
        var tabs = tableSorter.getTables();
        for (var i = 0; i < tabs.length; i++) {
            sot = new GridSort();
            sot.init(tabs[i]);
            break;
        }
        git = tableSorter.getIndexTable();
        sot.git = git;
    },

    browserTest: function () {
        var domEnabled = document.getElementsByTagName;
        if (domEnabled) {
            domEnabled = document.getElementsByTagName('body')[0].appendChild;
        }
        if (!domEnabled) {
            return false;
        }
        return true;
    },

    getTables: function () {
        var allTables = $("table");
        var sortableTables = new Array();
        for (var i = 0; i < allTables.length; i++) {
            if ($(allTables[i]).hasClass("sortable")) {
                sortableTables[sortableTables.length] = allTables[i];
            }
        }
        return sortableTables;
    },

    getIndexTable: function () {
        var jsonText = $("#index_table").children().first().html();
        var jsonObject = eval('(' + jsonText + ')');
        return jsonObject;
    }
};

var MenuCall =
{
    init: function () {
        this.showHtml();
    },

    showHtml: function () {
        MenuCall.initTableSort(true);
        MenuCall.initRowHighlight();
    },

    initTableSort: function (all) {
        if (all) {
            sot = null;
        }
        if (tableSorter != 'undefined') {
            tableSorter.init();
        }
    },

    initRowHighlight: function () {
        $("table.fr tr").hover(
            function () { $(this).addClass("highlight"); },
            function () { $(this).removeClass("highlight"); }
        );
    },

};

$(document).ready(function () {
    MenuCall.init();
});

