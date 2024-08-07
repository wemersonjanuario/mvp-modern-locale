Ext.define("Ext.locale.tr.grid.plugin.filterbar.Operator", {
    override: "Ext.grid.plugin.filterbar.Operator",
    operatorsTextMap: {
        eq: 'Eşittir',
        ne: 'Eşit değil',
        gt: 'Daha büyük',
        ge: 'Eşit veya daha büyük',
        lt: 'Daha az',
        le: 'Daha az veya eşit',
        like: 'Beğen',
        nlike: 'Gibi değil',
        empty: 'Boş',
        nempty: 'Boş değil',
        identical: 'Birebir aynı',
        nidentical: 'Aynı değil',
        regex: 'Düzenli ifade',
        in: 'İçinde',
        notin: 'İçinde değil'
    }
}, function() {
    var prototype = this.prototype,
        texts = prototype.operatorsTextMap;

    texts['='] = texts.eq;
    texts['=='] = texts.eq;
    texts['!='] = texts.ne;
    texts['==='] = texts.identical;
    texts['!=='] = texts.nidentical;
    texts['>'] = texts.gt;
    texts['>='] = texts.ge;
    texts['<'] = texts.lt;
    texts['<='] = texts.le;
    texts['/='] = texts.regex;
});
