/*!
* file: result-menu-v1.js
* version: 1.0.2
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

        $(".btn-bar").buttonset();

        $("#sidebar ul li a").each(function () {
            oref = this["href"];
            if (oref) {
                $(this).attr("href", "javascript:MenuCall.downloadHtml('" + oref + "');");
            }

        });
        $("#content ul li ul li a").each(function () {

            oref = this["href"];
            if (oref) {
                $(this).attr("href", "javascript:MenuCall.downloadHtml('" + oref + "');");
            }
        });

        MenuCall.changeLayout(3);
    },

    downloadHtml: function (data) {
        $.ajax(
            {
                url: data,
                success: function (data) {
                    MenuCall.showHtml(data);
                }
            });
    },

    showHtml: function (data) {
        $("#results").html(data);
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

    changeLayout: function (l) {
        var dw;
        var nw;
        if (l == 0)
            dw = 0;
        else if (l == 1)
            dw = 100;
        else if (l == 2)
            dw = 200;
        else if (l == 3)
            dw = 300;
        else if (l == 96) {
            $("#container").css('width', '96%');
            nw = $('#page').innerWidth();
            dw = nw - 950;
        }
        else if (l == 100) {
            $("#container").css('width', '100%');
            nw = $('#page').innerWidth();
            dw = nw - 950;
        }
        $("#container").css('width', 950 + dw);
        $("#content").css('width', 800 + dw);
        $("#slcHost").css('width', 800 + dw);
        $("#footer").css('width', 930 + dw);
    },

    hideTable: function () {
        $("#results").empty();
    }

};

$(document).ready(function () {
    MenuCall.init();
});

