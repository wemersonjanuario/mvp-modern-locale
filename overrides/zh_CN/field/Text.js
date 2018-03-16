/**
 * 简体中文 by lovelyelfpop <479858761@qq.com>
 * 2017年10月12日
 */
Ext.define('Ext.locale.zh_CN.field.Text', {
    override: 'Ext.field.Text',

    config: {
        requiredMessage: '必填项',
        validationMessage: '格式错误'
    },
    badFormatMessage: '值与所需的格式不符'
});