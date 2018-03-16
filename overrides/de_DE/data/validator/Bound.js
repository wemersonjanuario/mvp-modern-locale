/**
 * German/Germany Translation by Jens Pliester <jens.pliester@eyeworkers.de>
 * 19 December 2017
 */
Ext.define('Ext.locale.de_DE.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: 'Muss vorhanden sein',
        minOnlyMessage: 'Wert muss größer sein als {0}',
        maxOnlyMessage: 'Wert muss kleiner sein als {0}',
        bothMessage: 'Wert muss zwischen {0} und {1} sein'
    }
});
