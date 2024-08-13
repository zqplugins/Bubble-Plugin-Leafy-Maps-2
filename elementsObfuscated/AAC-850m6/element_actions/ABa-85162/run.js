function(instance, properties, context){
	function _0x4e5c(_0x2ada12, _0x14241f) {
    const _0x5475a2 = _0x5475();
    return _0x4e5c = function (_0x4e5c45, _0x2848d5) {
        _0x4e5c45 = _0x4e5c45 - 0xde;
        let _0x563a30 = _0x5475a2[_0x4e5c45];
        return _0x563a30;
    }, _0x4e5c(_0x2ada12, _0x14241f);
}
function _0x5475() {
    const _0x7cdf25 = [
        'publishState',
        '494772SIdorU',
        'list_of_longitudes',
        '510300DpNWOT',
        '997812BZYDBr',
        '10818210flMQRf',
        'forEach',
        'fitBounds',
        'click',
        'fill_opacity',
        'polygon_fill',
        '2tFfaNI',
        '28EmRHrv',
        'length',
        'line_cap',
        'fill_color',
        'push',
        'get',
        'addTo',
        'line_join',
        'stroke_opacity',
        'mymap',
        'polygon',
        'list_of_latitudes',
        '766608AaYRKs',
        '16iTGAiR',
        'zoom_map_to_this_polygon',
        'data',
        '75519PfKdPK',
        '6947KZOsxs'
    ];
    _0x5475 = function () {
        return _0x7cdf25;
    };
    return _0x5475();
}
(function (_0x313afb, _0x176875) {
    const _0xa17ce = _0x4e5c, _0x571dbb = _0x313afb();
    while (!![]) {
        try {
            const _0x23a6ac = -parseInt(_0xa17ce(0xec)) / 0x1 * (parseInt(_0xa17ce(0xf8)) / 0x2) + -parseInt(_0xa17ce(0xeb)) / 0x3 * (parseInt(_0xa17ce(0xe8)) / 0x4) + -parseInt(_0xa17ce(0xf0)) / 0x5 + parseInt(_0xa17ce(0xee)) / 0x6 * (-parseInt(_0xa17ce(0xf9)) / 0x7) + -parseInt(_0xa17ce(0xe7)) / 0x8 + -parseInt(_0xa17ce(0xf1)) / 0x9 + parseInt(_0xa17ce(0xf2)) / 0xa;
            if (_0x23a6ac === _0x176875)
                break;
            else
                _0x571dbb['push'](_0x571dbb['shift']());
        } catch (_0x371ae4) {
            _0x571dbb['push'](_0x571dbb['shift']());
        }
    }
}(_0x5475, 0x51edc));
function run(_0x538bde, _0x4f1145, _0x2ab46d) {
    const _0x5aa66e = _0x4e5c;
    let _0x424b07 = [], _0x1c4df4 = (_0x2ee480, _0x24970e, _0xa84562) => {
            const _0x3fa3e5 = _0x4e5c;
            let _0x8e75e6 = _0x2ee480[_0x3fa3e5(0xe0)](_0x24970e, _0xa84562);
            return _0x8e75e6;
        }, _0x38b8ef = (_0x260dea, _0x415a90) => {
            let _0x488533 = _0x1c4df4(_0x260dea, 0x0, _0x415a90);
            return _0x488533;
        }, _0x26fd5b = _0x38b8ef(_0x4f1145[_0x5aa66e(0xe6)], _0x4f1145[_0x5aa66e(0xe6)][_0x5aa66e(0xfa)]()), _0x2aa1ee = _0x38b8ef(_0x4f1145['list_of_longitudes'], _0x4f1145[_0x5aa66e(0xef)]['length']());
    const _0x572cc7 = (_0x492cc5, _0x26444a, _0x724cb3) => {
        const _0x727f39 = _0x5aa66e;
        _0x424b07[_0x727f39(0xdf)]([
            _0x26fd5b[_0x26444a],
            _0x2aa1ee[_0x26444a]
        ]);
    };
    _0x26fd5b[_0x5aa66e(0xf3)](_0x572cc7);
    let _0x4c5cd5 = {
            'stroke': _0x4f1145['draw_stroke'],
            'color': _0x4f1145['stroke_color'],
            'weight': _0x4f1145['stroke_weight'],
            'opacity': _0x4f1145[_0x5aa66e(0xe3)],
            'lineCap': _0x4f1145[_0x5aa66e(0xfb)],
            'lineJoin': _0x4f1145[_0x5aa66e(0xe2)],
            'fill': _0x4f1145[_0x5aa66e(0xf7)],
            'fillColor': _0x4f1145[_0x5aa66e(0xde)],
            'fillOpacity': _0x4f1145[_0x5aa66e(0xf6)]
        }, _0x36e89e = L[_0x5aa66e(0xe5)](_0x424b07, _0x4c5cd5);
    _0x538bde[_0x5aa66e(0xea)]['' + _0x4f1145['polygon_name']] = _0x36e89e[_0x5aa66e(0xe1)](_0x538bde[_0x5aa66e(0xea)][_0x5aa66e(0xe4)]), _0x36e89e['on'](_0x5aa66e(0xf5), function () {
        const _0x1927a5 = _0x5aa66e;
        _0x538bde[_0x1927a5(0xed)]('geometry_clicked_name', _0x4f1145['polygon_name']);
    }), _0x4f1145[_0x5aa66e(0xe9)] && _0x538bde['data'][_0x5aa66e(0xe4)][_0x5aa66e(0xf4)](_0x538bde[_0x5aa66e(0xea)]['' + _0x4f1145['polygon_name']]['getBounds']());
}
	 run(instance, properties, context);
}