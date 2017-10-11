/**
 * Hungarian Translation by Zoltan Lippai <zoli@lippai.net>
 * 11 October 2017
 */
Ext.define('Ext.locale.hu_HU.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: 'Meg kell adni',
        minOnlyMessage: 'Minimális érték: {0}',
        maxOnlyMessage: 'Maximális érték: {0}',
        bothMessage: 'Az értéknek {0} és {1} közöttinek kell lennie'
    }
});
