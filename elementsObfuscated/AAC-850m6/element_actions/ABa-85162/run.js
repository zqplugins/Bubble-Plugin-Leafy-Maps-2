function(instance, properties, context){
	(function (_0x517de6, _0x26eee2) {
    const _0x1f87c3 = _0x11d3, _0x5a862d = _0x517de6();
    while (!![]) {
        try {
            const _0x5f5c5d = -parseInt(_0x1f87c3(0xae)) / 0x1 * (parseInt(_0x1f87c3(0xa1)) / 0x2) + -parseInt(_0x1f87c3(0xad)) / 0x3 + -parseInt(_0x1f87c3(0xa4)) / 0x4 * (-parseInt(_0x1f87c3(0xb1)) / 0x5) + -parseInt(_0x1f87c3(0xa8)) / 0x6 + parseInt(_0x1f87c3(0xb6)) / 0x7 * (-parseInt(_0x1f87c3(0xa2)) / 0x8) + -parseInt(_0x1f87c3(0xac)) / 0x9 + parseInt(_0x1f87c3(0xb4)) / 0xa * (parseInt(_0x1f87c3(0xb8)) / 0xb);
            if (_0x5f5c5d === _0x26eee2)
                break;
            else
                _0x5a862d['push'](_0x5a862d['shift']());
        } catch (_0x402c71) {
            _0x5a862d['push'](_0x5a862d['shift']());
        }
    }
}(_0x3a44, 0xe0a26));
function _0x3a44() {
    const _0x2f641c = [
        'list_of_latitudes',
        '9215604hyxsmf',
        '3992391sXiFVs',
        '1AVnFRC',
        'push',
        'mymap',
        '115510IkptIy',
        'getBounds',
        'polygon_fill',
        '22936890mbWOkh',
        'zoom_map_to_this_polygon',
        '3541783diZMiK',
        'line_cap',
        '22qbUAmb',
        'fitBounds',
        'polygon_name',
        'length',
        'data',
        'draw_stroke',
        '3039220GbFEak',
        '16IWYQDY',
        'stroke_color',
        '284vEPKUo',
        'fill_opacity',
        'stroke_weight',
        'geometry_clicked_name',
        '2527302lKOqZM',
        'stroke_opacity',
        'list_of_longitudes'
    ];
    _0x3a44 = function () {
        return _0x2f641c;
    };
    return _0x3a44();
}
function _0x11d3(_0x556fd7, _0x5993ba) {
    const _0x3a444c = _0x3a44();
    return _0x11d3 = function (_0x11d3ed, _0x273fbe) {
        _0x11d3ed = _0x11d3ed - 0xa1;
        let _0x283581 = _0x3a444c[_0x11d3ed];
        return _0x283581;
    }, _0x11d3(_0x556fd7, _0x5993ba);
}
function run(_0x532340, _0xfbb812, _0x6e6758) {
    const _0x52543c = _0x11d3;
    let _0x354c77 = [], _0xedd4f8 = (_0x11c94c, _0x43d0c5, _0x40252c) => {
            let _0x115b13 = _0x11c94c['get'](_0x43d0c5, _0x40252c);
            return _0x115b13;
        }, _0x15ccaa = (_0x1bd332, _0x58f6e9) => {
            let _0x4c5853 = _0xedd4f8(_0x1bd332, 0x0, _0x58f6e9);
            return _0x4c5853;
        }, _0x2db7c5 = _0x15ccaa(_0xfbb812[_0x52543c(0xab)], _0xfbb812[_0x52543c(0xab)]['length']()), _0x543a10 = _0x15ccaa(_0xfbb812[_0x52543c(0xaa)], _0xfbb812['list_of_longitudes'][_0x52543c(0xbb)]());
    const _0x5a0cb8 = (_0x3f686a, _0x40b7c7, _0x357f2e) => {
        const _0x21ead6 = _0x52543c;
        _0x354c77[_0x21ead6(0xaf)]([
            _0x2db7c5[_0x40b7c7],
            _0x543a10[_0x40b7c7]
        ]);
    };
    _0x2db7c5['forEach'](_0x5a0cb8);
    let _0x289037 = {
            'stroke': _0xfbb812[_0x52543c(0xbd)],
            'color': _0xfbb812[_0x52543c(0xa3)],
            'weight': _0xfbb812[_0x52543c(0xa6)],
            'opacity': _0xfbb812[_0x52543c(0xa9)],
            'lineCap': _0xfbb812[_0x52543c(0xb7)],
            'lineJoin': _0xfbb812['line_join'],
            'fill': _0xfbb812[_0x52543c(0xb3)],
            'fillColor': _0xfbb812['fill_color'],
            'fillOpacity': _0xfbb812[_0x52543c(0xa5)]
        }, _0x46e02d = L['polygon'](_0x354c77, _0x289037);
    _0x532340[_0x52543c(0xbc)]['' + _0xfbb812[_0x52543c(0xba)]] = _0x46e02d['addTo'](_0x532340[_0x52543c(0xbc)][_0x52543c(0xb0)]), _0x46e02d['on']('click', function () {
        const _0x236c14 = _0x52543c;
        _0x532340['publishState'](_0x236c14(0xa7), _0xfbb812['polygon_name']);
    }), _0xfbb812[_0x52543c(0xb5)] && _0x532340[_0x52543c(0xbc)][_0x52543c(0xb0)][_0x52543c(0xb9)](_0x532340[_0x52543c(0xbc)]['' + _0xfbb812[_0x52543c(0xba)]][_0x52543c(0xb2)]());
}
	 run(instance, properties, context);
}