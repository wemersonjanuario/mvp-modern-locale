Ext.define("Ext.locale.tr.grid.TreeGrouped", {
    override: "Ext.grid.TreeGrouped",

    config: {
        groupSummaryTpl: "Özet ({name})",
        summaryTpl: "Toplam ({store.data.length})"
    }
});
