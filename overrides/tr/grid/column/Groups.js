Ext.define("Ext.locale.tr.grid.column.Groups", {
    override: "Ext.grid.column.Groups",

    config: {
        groupSummaryTpl: "Özet ({name})",
        summaryTpl: "Toplam ({store.data.length})"
    },
    text: 'Gruplar'
});
