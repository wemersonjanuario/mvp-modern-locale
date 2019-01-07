/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.define('Ext.locale.zh_CN.picker.Date', {
    override: 'Ext.picker.Date',

    config: {
        doneButton: '完成',
        monthText: '月',
        dayText: '日',
        yearText: '年',
        slotOrder: ['year', 'month', 'day']
    }
});