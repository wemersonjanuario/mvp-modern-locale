/**
 * Portuguese/Brazil Translation by Wemerson Januario <wemerson.januario@gmail.com>
 * 10 October 2017
 */
Ext.define('Ext.locale.pt_BR.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: 'Deve estar presente',
        minOnlyMessage: 'O valor deve ser maior do que {0}',
        maxOnlyMessage: 'O valor deve ser inferior a {0}',
        bothMessage: 'O valor deve estar entre {0} e {1}'
    }
});
