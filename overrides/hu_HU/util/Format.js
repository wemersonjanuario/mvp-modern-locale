/**
 * Hungarian Translation by Zoltan Lippai <zoli@lippai.net>
 * 11 October 2017
 */
Ext.define('Ext.locale.hu_HU.util.Format', {
    override: 'Ext.util.Format',

    config: {
        requiredMessage: 'Ezt a mezőt kötelező kitölteni',
        validationMessage: 'Érvénytelen formátumú a megadott érték'
    },

    defaultDateFormat: 'Y. m. d.',
    thousandSeparator: ' ',
    decimalSeparator: ',',
    currencySign: 'Ft',
    currencySpacer: ' ',
    currencyAtEnd: true
});