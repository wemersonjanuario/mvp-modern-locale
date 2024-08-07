Ext.define("Ext.locale.tr.grid.locked.Grid", {
    override: 'Ext.grid.locked.Grid',

    config: {
        columnMenu: {
            items: {
                region: {
                    text: 'Bölge'
                }
            }
        },
        regions: {
            left: {
                menuLabel: 'Kilitli (sol)'
            },
            center: {
                menuLabel: 'Kilitli'
            },
            right: {
                menuLabel: 'Kilitli (sağ)'
            }
        }
    }
});
