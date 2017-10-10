/**
 * Portuguese/Brazil Translation by Wemerson Januario <wemerson.januario@gmail.com>
 * 10 October 2017
 */
Ext.define('Ext.locale.pt_BR.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    minOnlyMessage: 'O valor deve ser maior do que {0}',
    maxOnlyMessage: 'O valor deve ser inferior a {0}',
    bothMessage: 'O valor deve estar entre {0} e {1}',
    config: {
        nanMessage: 'Deve ser numérico'
    }
});
