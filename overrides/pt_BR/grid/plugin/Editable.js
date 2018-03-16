/**
 * Portuguese/Brazil Translation by Wemerson Januario <wemerson.januario@gmail.com>
 * 07 December 2017
 */
Ext.define('Ext.locale.pt_BR.grid.plugin.Editable', {
    override: 'Ext.grid.plugin.Editable',

    config: {
        /**
         * @cfg {Object} toolbarConfig
         * Configures the toolbar appended to the editable panel.
         */
        toolbarConfig: {
            xtype: 'titlebar',
            docked: 'top',
            items: [{
                xtype: 'button',
                ui: 'alt',
                text: 'Cancelar',
                align: 'left',
                action: 'cancel'
            }, {
                xtype: 'button',
                ui: 'alt',
                text: 'Concluído',
                align: 'right',
                action: 'submit'
            }]
        }
    }
});