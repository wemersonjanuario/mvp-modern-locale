Ext.define('Ext.locale.tr.data.validator.Length', {
    override: 'Ext.data.validator.Length',

    config: {
        minOnlyMessage: 'Uzunluk {0} karakterden az olamaz',
        maxOnlyMessage: 'Uzunluk {0} karakterden çok olamaz',
        bothMessage: 'Uzunluk {0} ile {1} karakter arasında olmalıdır'
    }
});
