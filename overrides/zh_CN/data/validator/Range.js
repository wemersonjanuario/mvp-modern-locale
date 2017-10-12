/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.define('Ext.locale.zh_CN.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    minOnlyMessage: '该项的最小值是 {0}',
    maxOnlyMessage: '该项的最大值是 {0}',
    bothMessage: '该项的值必须介于 {0} 和 {1} 之间',
    config: {
        nanMessage: '该项的值必须是数字'
    }
});
