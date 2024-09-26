function(instance, properties, context){
	(function (_0x17675f, _0x50ae35) {
    const _0x52df90 = _0x2a3f, _0x2976d8 = _0x17675f();
    while (!![]) {
        try {
            const _0x4990ed = -parseInt(_0x52df90(0x187)) / 0x1 + parseInt(_0x52df90(0x18c)) / 0x2 * (parseInt(_0x52df90(0x18f)) / 0x3) + parseInt(_0x52df90(0x1a4)) / 0x4 * (-parseInt(_0x52df90(0x191)) / 0x5) + -parseInt(_0x52df90(0x190)) / 0x6 + parseInt(_0x52df90(0x19e)) / 0x7 + -parseInt(_0x52df90(0x180)) / 0x8 * (parseInt(_0x52df90(0x18e)) / 0x9) + parseInt(_0x52df90(0x18d)) / 0xa;
            if (_0x4990ed === _0x50ae35)
                break;
            else
                _0x2976d8['push'](_0x2976d8['shift']());
        } catch (_0x54f50d) {
            _0x2976d8['push'](_0x2976d8['shift']());
        }
    }
}(_0x53f1, 0x65ae1));
function update(_0x285aec, _0x572ad1, _0x568ccb) {
    const _0x20b07d = _0x2a3f, _0x45a0d5 = Date[_0x20b07d(0x181)](), {
            name_field: _0x1ce5a4,
            path_field: _0x54fe50,
            location_field: _0x261188,
            icon_field: _0x351c95
        } = _0x572ad1;
    if (_0x572ad1['load_ambulance_routes'] && _0x1ce5a4 && _0x54fe50 && _0x261188 && _0x351c95) {
        function _0x41260a(_0x6b2514) {
            return _0x6b2514 * Math['PI'] / 0xb4;
        }
        function _0x5f31a5(_0x6bcb20, _0x31bcb5) {
            const _0x593b6c = _0x20b07d;
            var _0x5b70f2 = _0x41260a(_0x6bcb20[0x1]), _0x41f7cf = _0x41260a(_0x6bcb20[0x0]), _0x2e82a3 = _0x41260a(_0x31bcb5[0x1]), _0x4bed83 = _0x41260a(_0x31bcb5[0x0]), _0x4b0089 = _0x4bed83 - _0x41f7cf, _0x38176a = _0x2e82a3 - _0x5b70f2, _0x33d41 = Math[_0x593b6c(0x1a2)](Math['sin'](_0x4b0089 / 0x2), 0x2) + Math[_0x593b6c(0x1a3)](_0x41f7cf) * Math[_0x593b6c(0x1a3)](_0x4bed83) * Math[_0x593b6c(0x1a2)](Math[_0x593b6c(0x1a6)](_0x38176a / 0x2), 0x2), _0x5d4791 = 0x2 * Math[_0x593b6c(0x1a8)](Math[_0x593b6c(0x19f)](_0x33d41)), _0x440a74 = 0x18e3;
            return _0x5d4791 * _0x440a74 * 0x3e8;
        }
        if (_0x285aec['data'][_0x20b07d(0x196)])
            _0x285aec['data']['updateCleanup']();
        if (_0x285aec['data'][_0x20b07d(0x1a7)] === undefined)
            _0x285aec[_0x20b07d(0x183)][_0x20b07d(0x1a7)] = [];
        const _0x1cc4ca = _0x572ad1[_0x20b07d(0x193)], _0x28cfe3 = [], _0x50b30d = [];
        _0x1cc4ca[_0x20b07d(0x17f)](_0x1cc4ca[_0x20b07d(0x182)]() - 0x2, _0x1cc4ca['length']())[_0x20b07d(0x19c)](_0xafc5e5 => {
            const _0x1f1f57 = _0x20b07d, _0x500a18 = _0xafc5e5['get'](_0x1ce5a4), _0x2316af = JSON[_0x1f1f57(0x17c)](_0xafc5e5[_0x1f1f57(0x17f)](_0x54fe50)), _0x4cd33a = {
                    'lat': Number(_0xafc5e5[_0x1f1f57(0x17f)](_0x261188)[_0x1f1f57(0x179)](/(.*?)lat: (.*?),(.*)/gm, '$2')),
                    'lng': Number(_0xafc5e5['get'](_0x261188)[_0x1f1f57(0x179)](/(.*?)lng: (.*?)}/gm, '$2'))
                }, _0x41addb = _0xafc5e5[_0x1f1f57(0x17f)](_0x351c95), _0x12e829 = _0xafc5e5['get'](_0x1f1f57(0x198))[_0x1f1f57(0x186)](), _0x1702b5 = !![];
            if (_0x50b30d['indexOf'](_0x500a18) === -0x1) {
                if (_0x1702b5)
                    _0x50b30d[_0x1f1f57(0x1a1)](_0x500a18);
                if (_0x1702b5)
                    _0x28cfe3[_0x1f1f57(0x1a1)]({
                        'name': _0x500a18,
                        'path': _0x2316af,
                        'location': _0x4cd33a,
                        'icon': _0x41addb,
                        'created': _0x12e829
                    });
            } else {
                const _0x4270bd = _0x50b30d[_0x1f1f57(0x197)](_0x500a18);
                _0x28cfe3[_0x4270bd][_0x1f1f57(0x1a5)] < _0x12e829 && (_0x28cfe3[_0x4270bd] = {
                    'name': _0x500a18,
                    'path': _0x2316af[_0x1f1f57(0x17b)],
                    'location': _0x4cd33a,
                    'icon': _0x41addb,
                    'created': _0x12e829
                });
            }
        });
        const _0x5435e3 = _0x28cfe3[_0x20b07d(0x192)](_0x5420bd => {
            const _0x27a7fb = _0x20b07d, _0x587041 = L[_0x27a7fb(0x188)]({
                    'iconUrl': _0x5420bd[_0x27a7fb(0x188)],
                    'iconSize': [
                        0x20,
                        0x40
                    ],
                    'iconAnchor': [
                        0x10,
                        0x20
                    ]
                }), _0x339d0c = new L['marker'](_0x5420bd[_0x27a7fb(0x199)], { 'icon': _0x587041 });
            if (_0x285aec[_0x27a7fb(0x183)][_0x27a7fb(0x184)]) {
                const _0x5b7d69 = _0x5f31a5([
                    _0x285aec[_0x27a7fb(0x183)][_0x27a7fb(0x184)][_0x27a7fb(0x195)],
                    _0x285aec['data'][_0x27a7fb(0x184)][_0x27a7fb(0x1a0)]
                ], [
                    _0x5420bd[_0x27a7fb(0x199)][_0x27a7fb(0x195)],
                    _0x5420bd[_0x27a7fb(0x199)][_0x27a7fb(0x1a0)]
                ]);
                console[_0x27a7fb(0x19b)](_0x27a7fb(0x17e) + _0x5420bd['name'] + _0x27a7fb(0x17d) + _0x5b7d69), _0x285aec[_0x27a7fb(0x185)](_0x27a7fb(0x19a), _0x5b7d69 < 0x1f4);
            }
            _0x339d0c[_0x27a7fb(0x189)](_0x285aec['data']['mymap']);
            const _0x403b99 = L['polyline'](_0x5420bd[_0x27a7fb(0x17b)], { 'color': _0x27a7fb(0x17a) });
            return _0x403b99[_0x27a7fb(0x189)](_0x285aec['data'][_0x27a7fb(0x19d)]), {
                'marker': _0x339d0c,
                'polyline': _0x403b99
            };
        });
        _0x285aec[_0x20b07d(0x183)][_0x20b07d(0x196)] = () => {
            const _0x5f31c6 = _0x20b07d;
            _0x5435e3[_0x5f31c6(0x19c)](_0x11aebd => {
                const _0x487f64 = _0x5f31c6;
                _0x11aebd[_0x487f64(0x18b)]['removeFrom'](_0x285aec[_0x487f64(0x183)][_0x487f64(0x19d)]), _0x11aebd[_0x487f64(0x18a)][_0x487f64(0x194)](_0x285aec[_0x487f64(0x183)][_0x487f64(0x19d)]);
            });
        };
    }
}
function _0x2a3f(_0x3f3a6a, _0x23216f) {
    const _0x53f1f2 = _0x53f1();
    return _0x2a3f = function (_0x2a3fd0, _0x4796f3) {
        _0x2a3fd0 = _0x2a3fd0 - 0x179;
        let _0x5032c3 = _0x53f1f2[_0x2a3fd0];
        return _0x5032c3;
    }, _0x2a3f(_0x3f3a6a, _0x23216f);
}
function _0x53f1() {
    const _0x30bf80 = [
        'addTo',
        'polyline',
        'marker',
        '9760jTIzxA',
        '9885510BxldmZ',
        '5258151sSmMgz',
        '420ritTey',
        '3664338xfuIrs',
        '201790XZgzmC',
        'map',
        'emergency_table',
        'removeFrom',
        'lat',
        'updateCleanup',
        'indexOf',
        'Created\x20Date',
        'location',
        'ambulance_is_close',
        'log',
        'forEach',
        'mymap',
        '2783921QQKIqQ',
        'sqrt',
        'lng',
        'push',
        'pow',
        'cos',
        '8CHncWk',
        'created',
        'sin',
        'ambulancesToTrack',
        'asin',
        'replace',
        'red',
        'path',
        'parse',
        '\x20ambulance\x20is\x20',
        'distance\x20of\x20',
        'get',
        '8UuWTtl',
        'now',
        'length',
        'data',
        'USER_LOCATION',
        'publishState',
        'getTime',
        '377295dzznzI',
        'icon'
    ];
    _0x53f1 = function () {
        return _0x30bf80;
    };
    return _0x53f1();
}
	 update(instance, properties, context);
}