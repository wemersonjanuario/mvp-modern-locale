/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        Ext.Date.monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

        Ext.Date.getShortMonthName = function (month) {
            var n = Ext.Date.monthNames[month];
            return n.substr(0, n.length - 1);
        };
        Ext.Date.getShortDayName = function (day) {
            return Ext.Date.dayNames[day].substr(1, 1);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            currencySign: '\u00a5', // Chinese Yuan
            defaultDateFormat: 'Y-m-d'
        });
    }
    if (Ext.Date) {
        Ext.apply(Ext.Date, {
            defaultFormat: 'Y-m-d'
        });
    }
});

