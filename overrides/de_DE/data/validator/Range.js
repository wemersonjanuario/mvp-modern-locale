/**
 * German/Germany Translation by Jens Pliester <jens.pliester@eyeworkers.de>
 * 19 December 2017
 */
Ext.define('Ext.locale.de_DE.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    minOnlyMessage: 'Muss mindestens {0} sein',
    maxOnlyMessage: 'Darf nicht größer als {0} sein',
    bothMessage: 'Muss zwischen {0} und {1} sein',
    config: {
        nanMessage: 'Muss numerisch sein'
    }
});
