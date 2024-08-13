function(instance, properties, context){
	function _0x399f(_0x1f5c29, _0x5d5d89) {
    const _0x198d0a = _0x198d();
    return _0x399f = function (_0x399fd2, _0x5475e4) {
        _0x399fd2 = _0x399fd2 - 0x156;
        let _0x2a6c48 = _0x198d0a[_0x399fd2];
        return _0x2a6c48;
    }, _0x399f(_0x1f5c29, _0x5d5d89);
}
(function (_0x3d03fb, _0xe8c0cd) {
    const _0x281569 = _0x399f, _0x489600 = _0x3d03fb();
    while (!![]) {
        try {
            const _0x481ebb = parseInt(_0x281569(0x16b)) / 0x1 + parseInt(_0x281569(0x182)) / 0x2 + -parseInt(_0x281569(0x180)) / 0x3 * (parseInt(_0x281569(0x158)) / 0x4) + -parseInt(_0x281569(0x183)) / 0x5 * (-parseInt(_0x281569(0x169)) / 0x6) + -parseInt(_0x281569(0x172)) / 0x7 * (parseInt(_0x281569(0x163)) / 0x8) + -parseInt(_0x281569(0x173)) / 0x9 + parseInt(_0x281569(0x176)) / 0xa;
            if (_0x481ebb === _0xe8c0cd)
                break;
            else
                _0x489600['push'](_0x489600['shift']());
        } catch (_0x4ba540) {
            _0x489600['push'](_0x489600['shift']());
        }
    }
}(_0x198d, 0x9d50a));
function update(_0x46a37d, _0x1a557d, _0x273cdb) {
    const _0x4b7c3a = _0x399f, _0x3d771b = Date[_0x4b7c3a(0x165)](), {
            name_field: _0x2f7111,
            path_field: _0xa20923,
            location_field: _0x31ca1a,
            icon_field: _0x2e09eb
        } = _0x1a557d;
    if (_0x1a557d[_0x4b7c3a(0x17d)] && _0x2f7111 && _0xa20923 && _0x31ca1a && _0x2e09eb) {
        function _0x489eb3(_0x119188) {
            return _0x119188 * Math['PI'] / 0xb4;
        }
        function _0xb902f4(_0x202096, _0xea1e18) {
            const _0x5e0d71 = _0x4b7c3a;
            var _0x49600a = _0x489eb3(_0x202096[0x1]), _0x62a83a = _0x489eb3(_0x202096[0x0]), _0x311520 = _0x489eb3(_0xea1e18[0x1]), _0x53b2f2 = _0x489eb3(_0xea1e18[0x0]), _0x519a42 = _0x53b2f2 - _0x62a83a, _0x3fdc63 = _0x311520 - _0x49600a, _0x3b394f = Math[_0x5e0d71(0x16a)](Math[_0x5e0d71(0x168)](_0x519a42 / 0x2), 0x2) + Math[_0x5e0d71(0x157)](_0x62a83a) * Math[_0x5e0d71(0x157)](_0x53b2f2) * Math[_0x5e0d71(0x16a)](Math[_0x5e0d71(0x168)](_0x3fdc63 / 0x2), 0x2), _0x39a1a5 = 0x2 * Math[_0x5e0d71(0x181)](Math[_0x5e0d71(0x15d)](_0x3b394f)), _0x1cb6cd = 0x18e3;
            return _0x39a1a5 * _0x1cb6cd * 0x3e8;
        }
        if (_0x46a37d['data'][_0x4b7c3a(0x17b)])
            _0x46a37d['data']['updateCleanup']();
        if (_0x46a37d[_0x4b7c3a(0x167)][_0x4b7c3a(0x178)] === undefined)
            _0x46a37d[_0x4b7c3a(0x167)]['ambulancesToTrack'] = [];
        const _0x4a2836 = _0x1a557d[_0x4b7c3a(0x17c)], _0x13c6da = [], _0x4326f2 = [];
        _0x4a2836[_0x4b7c3a(0x156)](_0x4a2836[_0x4b7c3a(0x15a)]() - 0x2, _0x4a2836[_0x4b7c3a(0x15a)]())[_0x4b7c3a(0x17f)](_0x5d35d7 => {
            const _0x11af91 = _0x4b7c3a, _0x126164 = _0x5d35d7[_0x11af91(0x156)](_0x2f7111), _0x4e3b25 = JSON[_0x11af91(0x179)](_0x5d35d7[_0x11af91(0x156)](_0xa20923)), _0x388b17 = {
                    'lat': Number(_0x5d35d7[_0x11af91(0x156)](_0x31ca1a)['replace'](/(.*?)lat: (.*?),(.*)/gm, '$2')),
                    'lng': Number(_0x5d35d7[_0x11af91(0x156)](_0x31ca1a)[_0x11af91(0x161)](/(.*?)lng: (.*?)}/gm, '$2'))
                }, _0x1e29ef = _0x5d35d7[_0x11af91(0x156)](_0x2e09eb), _0x3e80a5 = _0x5d35d7[_0x11af91(0x156)](_0x11af91(0x170))[_0x11af91(0x17a)](), _0xc06533 = !![];
            if (_0x4326f2[_0x11af91(0x15e)](_0x126164) === -0x1) {
                if (_0xc06533)
                    _0x4326f2['push'](_0x126164);
                if (_0xc06533)
                    _0x13c6da[_0x11af91(0x15b)]({
                        'name': _0x126164,
                        'path': _0x4e3b25,
                        'location': _0x388b17,
                        'icon': _0x1e29ef,
                        'created': _0x3e80a5
                    });
            } else {
                const _0x353035 = _0x4326f2[_0x11af91(0x15e)](_0x126164);
                _0x13c6da[_0x353035][_0x11af91(0x16f)] < _0x3e80a5 && (_0x13c6da[_0x353035] = {
                    'name': _0x126164,
                    'path': _0x4e3b25['path'],
                    'location': _0x388b17,
                    'icon': _0x1e29ef,
                    'created': _0x3e80a5
                });
            }
        });
        const _0x54180d = _0x13c6da[_0x4b7c3a(0x175)](_0x58dff0 => {
            const _0x58c96a = _0x4b7c3a, _0xe7cda8 = L[_0x58c96a(0x166)]({
                    'iconUrl': _0x58dff0[_0x58c96a(0x166)],
                    'iconSize': [
                        0x20,
                        0x40
                    ],
                    'iconAnchor': [
                        0x10,
                        0x20
                    ]
                }), _0x4f9559 = new L[(_0x58c96a(0x17e))](_0x58dff0['location'], { 'icon': _0xe7cda8 });
            if (_0x46a37d['data']['USER_LOCATION']) {
                const _0x45c4cf = _0xb902f4([
                    _0x46a37d[_0x58c96a(0x167)][_0x58c96a(0x15f)]['lat'],
                    _0x46a37d[_0x58c96a(0x167)][_0x58c96a(0x15f)]['lng']
                ], [
                    _0x58dff0['location'][_0x58c96a(0x15c)],
                    _0x58dff0[_0x58c96a(0x16c)]['lng']
                ]);
                console[_0x58c96a(0x174)]('distance\x20of\x20' + _0x58dff0[_0x58c96a(0x160)] + _0x58c96a(0x177) + _0x45c4cf), _0x46a37d[_0x58c96a(0x16d)](_0x58c96a(0x164), _0x45c4cf < 0x1f4);
            }
            _0x4f9559[_0x58c96a(0x16e)](_0x46a37d[_0x58c96a(0x167)][_0x58c96a(0x159)]);
            const _0x5f2876 = L['polyline'](_0x58dff0[_0x58c96a(0x184)], { 'color': 'red' });
            return _0x5f2876[_0x58c96a(0x16e)](_0x46a37d[_0x58c96a(0x167)][_0x58c96a(0x159)]), {
                'marker': _0x4f9559,
                'polyline': _0x5f2876
            };
        });
        _0x46a37d['data']['updateCleanup'] = () => {
            const _0x2a6b35 = _0x4b7c3a;
            _0x54180d[_0x2a6b35(0x17f)](_0x2e5574 => {
                const _0x376196 = _0x2a6b35;
                _0x2e5574[_0x376196(0x17e)][_0x376196(0x171)](_0x46a37d[_0x376196(0x167)][_0x376196(0x159)]), _0x2e5574[_0x376196(0x162)][_0x376196(0x171)](_0x46a37d[_0x376196(0x167)][_0x376196(0x159)]);
            });
        };
    }
}
function _0x198d() {
    const _0x585174 = [
        'sin',
        '17184TdGHFq',
        'pow',
        '552583rRSqzq',
        'location',
        'publishState',
        'addTo',
        'created',
        'Created\x20Date',
        'removeFrom',
        '14gZLFvb',
        '11146869ebFYVx',
        'log',
        'map',
        '2790290JoBVtI',
        '\x20ambulance\x20is\x20',
        'ambulancesToTrack',
        'parse',
        'getTime',
        'updateCleanup',
        'emergency_table',
        'load_ambulance_routes',
        'marker',
        'forEach',
        '1947PPvhaA',
        'asin',
        '1903710VlcOwl',
        '1490QNQgqj',
        'path',
        'get',
        'cos',
        '4072qxVtAv',
        'mymap',
        'length',
        'push',
        'lat',
        'sqrt',
        'indexOf',
        'USER_LOCATION',
        'name',
        'replace',
        'polyline',
        '373416kyFTZC',
        'ambulance_is_close',
        'now',
        'icon',
        'data'
    ];
    _0x198d = function () {
        return _0x585174;
    };
    return _0x198d();
}
	 update(instance, properties, context);
}