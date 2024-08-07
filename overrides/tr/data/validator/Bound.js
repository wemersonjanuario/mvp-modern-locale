Ext.define('Ext.locale.tr.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: 'Bu alan zorunludur',
        minOnlyMessage: "Değer {0}'dan büyük olmalıdır",
        maxOnlyMessage: "Değer {0}'dan küçük olmalıdır",
        bothMessage: 'Değer {0} ile {1} arasında olmalıdır'
    }
});
