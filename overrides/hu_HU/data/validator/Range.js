/**
 * Hungarian Translation by Zoltan Lippai <zoli@lippai.net>
 * 11 October 2017
 */
Ext.define('Ext.locale.hu_HU.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    minOnlyMessage: 'Minimum érték: {0}',
    maxOnlyMessage: 'Maximum érték {0}',
    bothMessage: 'Az értéknek {0} és {1} között kell lennie',
    config: {
        nanMessage: 'Számot kell megadni'
    }
});
