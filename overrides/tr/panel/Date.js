Ext.define('Ext.locale.tr.panel.Date', {
    override: 'Ext.panel.Date',

    config: {
        nextText: 'Sonraki ay (Kontrol + Sağ)',
        prevText: 'Önceki ay (Kontrol + Sol)',
        buttons: {
            footerTodayButton: {
                text: 'Bugün'
            }
        }
    }
});
