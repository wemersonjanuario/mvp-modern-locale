/**
 * Español/Argentina Translation by Martín Panizzo <martin17@gmail.com>
 * 11 October 2017
 */
Ext.define('Ext.locale.es_AR.field.Number', {
    override: 'Ext.field.Number',

    config: {
        decimalsText: 'El número máximo de decimales es  {0}'
    },
    minValueText: 'El valor mínimo para este campo es {0}',
    maxValueText: 'El valor máximo para este campo es {0}',
    badFormatMessage: 'El valor no es un número válido'
});