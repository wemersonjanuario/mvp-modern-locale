/**
 * Hungarian Translation by Zoltan Lippai <zoli@lippai.net>
 * 11 October 2017
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            "Jan": 0,
            "Feb": 1,
            "Már": 2,
            "Ápr": 3,
            "Máj": 4,
            "Jún": 5,
            "Júl": 6,
            "Aug": 7,
            "Szep": 8,
            "Okt": 9,
            "Nov": 10,
            "Dec": 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ' ',
            decimalSeparator: ',',
            currencySign: 'Ft',
            currencySpacer: ' ',
            currentcyAtEnd: true,
            // Hungarian Forint
            dateFormat: 'Y. m. d.'
        });
        Ext.util.Format.huMoney = Ext.util.Format.currency;
    }
});

