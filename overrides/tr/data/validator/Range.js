Ext.define('Ext.locale.tr.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    config: {
        nanMessage: 'Değer sayısal olmalı',
        minOnlyMessage: "Değer {0}'dan küçük olamaz",
        maxOnlyMessage: "Değer {0}'dan büyük olamaz",
        bothMessage: 'Değer {0} ile {1} arasında olmalıdır'
    }
});
