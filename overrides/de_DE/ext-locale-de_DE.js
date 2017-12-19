/**
 * German/Germany Translation by Jens Pliester <jens.pliester@eyeworkers.de>
 * 19 December 2017
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            "Jan": 0,
            "Feb": 1,
            "Mär": 2,
            "Apr": 3,
            "Mai": 4,
            "Jun": 5,
            "Jul": 6,
            "Aug": 7,
            "Sep": 8,
            "Okt": 9,
            "Nov": 10,
            "Dez": 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '€', // euro
            currencySpacer: ' ',
            currentcyAtEnd: true,
            dateFormat: 'd. m. Y'
        });
        Ext.util.Format.deMoney = Ext.util.Format.currency;
    }
});
