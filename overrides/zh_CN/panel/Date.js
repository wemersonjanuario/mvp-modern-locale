/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.define('Ext.locale.zh_CN.panel.Date', {
    override: 'Ext.panel.Date',

    config: {
        nextText: '下个月 (Ctrl + ->)',
        prevText: '上个月 (Ctrl + <-)',

        headerFormat: {
            $value: 'Y-m-d l',
            cached: true
        }
    }
});