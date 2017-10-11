/**
 * Español/Argentina Translation by Martín Panizzo <martin17@gmail.com>
 * 11 October 2017
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Ouctubre", "Noviembre", "Diciembre"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Ene: 0,
            Feb: 1,
            Mar: 2,
            Abr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Ago: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dic: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '$',
            // Peso Argentino
            dateFormat: 'd/m/Y'
        });
        Ext.util.Format.arMoney = Ext.util.Format.currency;
    }
});

