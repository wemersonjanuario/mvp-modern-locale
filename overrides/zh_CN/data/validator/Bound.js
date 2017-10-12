/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.define('Ext.locale.zh_CN.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: '值不能为空',
        minOnlyMessage: '值必须大于 {0}',
        maxOnlyMessage: '值必须小于 {0}',
        bothMessage: '值必须介于 {0} 和 {1} 之间'
    }
});
