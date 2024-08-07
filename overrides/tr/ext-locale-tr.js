/**
 * Turkish translation
 * By Sercan Arğa
 * 01.08.2024
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

        Ext.Date.defaultFormat = 'd/m/Y';
        Ext.Date.defaultTimeFormat = 'H:i';

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            'Oca': 0,
            'Şub': 1,
            'Маr': 2,
            'Nis': 3,
            'May': 4,
            'Haz': 5,
            'Tem': 6,
            'Ağu': 7,
            'Eyl': 8,
            'Eki': 9,
            'Kas': 10,
            'Ara': 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

        Date.getShortDayName = function(day) {
            switch(day) {
                case 1:
                    return 'Pzt';
                case 6:
                    return 'Cmt';
                default:
                    return Ext.Date.dayNames[day].substring(0, 3);
            }
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '₺',
            // Turkish Lira
            dateFormat: 'd/m/Y'
        });
    }
});

