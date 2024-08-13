function(instance, properties, context){
	(function (_0x2d2d08, _0x44c511) {
    const _0x18e8bf = _0x34a2, _0x269c7e = _0x2d2d08();
    while (!![]) {
        try {
            const _0x4fdf4e = parseInt(_0x18e8bf(0xe5)) / 0x1 * (-parseInt(_0x18e8bf(0xd8)) / 0x2) + -parseInt(_0x18e8bf(0xf5)) / 0x3 * (parseInt(_0x18e8bf(0xcf)) / 0x4) + parseInt(_0x18e8bf(0xee)) / 0x5 * (-parseInt(_0x18e8bf(0xe0)) / 0x6) + parseInt(_0x18e8bf(0xdf)) / 0x7 + -parseInt(_0x18e8bf(0xd6)) / 0x8 * (parseInt(_0x18e8bf(0xf2)) / 0x9) + -parseInt(_0x18e8bf(0xf1)) / 0xa * (parseInt(_0x18e8bf(0xdd)) / 0xb) + parseInt(_0x18e8bf(0xeb)) / 0xc * (parseInt(_0x18e8bf(0xfc)) / 0xd);
            if (_0x4fdf4e === _0x44c511)
                break;
            else
                _0x269c7e['push'](_0x269c7e['shift']());
        } catch (_0x8f2242) {
            _0x269c7e['push'](_0x269c7e['shift']());
        }
    }
}(_0x2d09, 0x77489));
function _0x34a2(_0x3d5023, _0x44804d) {
    const _0x2d096b = _0x2d09();
    return _0x34a2 = function (_0x34a2d6, _0x473237) {
        _0x34a2d6 = _0x34a2d6 - 0xcf;
        let _0x45d2a1 = _0x2d096b[_0x34a2d6];
        return _0x45d2a1;
    }, _0x34a2(_0x3d5023, _0x44804d);
}
function run(_0x2978d7, _0x598c49, _0xd8fad4) {
    const _0x3c0929 = _0x34a2, _0x370446 = _0x479e74 => {
            const _0x34f383 = _0x34a2;
            if (_0x479e74 === _0x34f383(0xf6))
                return _0x34f383(0xe1);
            else {
                if (_0x479e74 === 'Yellow')
                    return _0x34f383(0xef);
                else {
                    if (_0x479e74 === _0x34f383(0xfd))
                        return '//dd7tel2830j4w.cloudfront.net/f1567070997768x135506561932380300/green_marker.png';
                    else {
                        if (_0x479e74 === _0x34f383(0xe7))
                            return '//dd7tel2830j4w.cloudfront.net/f1567071016539x633328751974089360/red_marker.png';
                        else {
                            if (_0x479e74 === _0x34f383(0xd1))
                                return _0x34f383(0xd9);
                            else {
                                if (_0x479e74 === 'White')
                                    return _0x34f383(0xd2);
                                else {
                                    if (_0x479e74 === _0x34f383(0xf8))
                                        return _0x34f383(0xf4);
                                }
                            }
                        }
                    }
                }
            }
        };
    if (_0x598c49[_0x3c0929(0xf0)] && _0x598c49[_0x3c0929(0xe3)]) {
        let _0x3b4069 = L['icon']({
            'iconUrl': _0x3c0929(0xed) + _0x598c49[_0x3c0929(0xe4)],
            'iconSize': [
                0x40,
                0x40
            ],
            'shadowSize': [
                0x32,
                0x40
            ],
            'iconAnchor': [
                0x20,
                0x40
            ],
            'shadowAnchor': [
                0x4,
                0x3e
            ],
            'popupAnchor': [
                0x0,
                -0x40
            ]
        });
        _0x2978d7[_0x3c0929(0xe2)]['' + _0x598c49[_0x3c0929(0xe8)]] = L[_0x3c0929(0xf9)]([
            _0x598c49['latitude'],
            _0x598c49[_0x3c0929(0xe6)]
        ], { 'icon': _0x3b4069 })['on'](_0x3c0929(0xd7), _0x547a89)['on'](_0x3c0929(0xd4), _0x5adcf0)['on'](_0x3c0929(0xf3), _0x3b206b)[_0x3c0929(0xfb)](_0x2978d7[_0x3c0929(0xe2)]['mymap'])[_0x3c0929(0xdc)](_0x598c49['popup_text']);
    } else {
        if (_0x598c49[_0x3c0929(0xf0)] && !_0x598c49[_0x3c0929(0xe3)]) {
            let _0x8be92b = L[_0x3c0929(0xdb)]({
                'iconUrl': 'https:' + _0x370446(_0x598c49[_0x3c0929(0xd0)]),
                'shadowUrl': _0x3c0929(0xe9),
                'iconSize': [
                    0x19,
                    0x28
                ],
                'shadowSize': [
                    0x29,
                    0x29
                ],
                'iconAnchor': [
                    0xc,
                    0x27
                ],
                'shadowAnchor': [
                    0xd,
                    0x28
                ],
                'popupAnchor': [
                    0x0,
                    -0x1e
                ]
            });
            _0x2978d7[_0x3c0929(0xe2)]['' + _0x598c49['marker_name']] = L[_0x3c0929(0xf9)]([
                _0x598c49[_0x3c0929(0xec)],
                _0x598c49[_0x3c0929(0xe6)]
            ], { 'icon': _0x8be92b })['on'](_0x3c0929(0xd7), _0x547a89)['on']('mouseover', _0x5adcf0)['on'](_0x3c0929(0xf3), _0x3b206b)[_0x3c0929(0xfb)](_0x2978d7[_0x3c0929(0xe2)][_0x3c0929(0xfa)])[_0x3c0929(0xdc)](_0x598c49['popup_text']);
        } else {
            if (!_0x598c49[_0x3c0929(0xf0)] && _0x598c49['use_custom_icon']) {
                let _0x51ba71 = L[_0x3c0929(0xdb)]({
                    'iconUrl': 'https:' + _0x598c49[_0x3c0929(0xe4)],
                    'iconSize': [
                        0x40,
                        0x40
                    ],
                    'shadowSize': [
                        0x32,
                        0x40
                    ],
                    'iconAnchor': [
                        0x20,
                        0x40
                    ],
                    'shadowAnchor': [
                        0x4,
                        0x3e
                    ],
                    'popupAnchor': [
                        0x0,
                        -0x40
                    ]
                });
                _0x2978d7[_0x3c0929(0xe2)]['' + _0x598c49[_0x3c0929(0xe8)]] = L[_0x3c0929(0xf9)]([
                    _0x598c49['latitude'],
                    _0x598c49[_0x3c0929(0xe6)]
                ], { 'icon': _0x51ba71 })['on'](_0x3c0929(0xd7), _0x547a89)['on'](_0x3c0929(0xd4), _0x5adcf0)['on'](_0x3c0929(0xf3), _0x3b206b)[_0x3c0929(0xfb)](_0x2978d7[_0x3c0929(0xe2)][_0x3c0929(0xfa)]);
            } else {
                if (!_0x598c49[_0x3c0929(0xf0)] && !_0x598c49[_0x3c0929(0xe3)]) {
                    let _0x35dd37 = L[_0x3c0929(0xdb)]({
                        'iconUrl': _0x3c0929(0xed) + _0x370446(_0x598c49[_0x3c0929(0xd0)]),
                        'shadowUrl': '//dd7tel2830j4w.cloudfront.net/f1567070947779x803166556575223700/marker-shadow.png',
                        'iconSize': [
                            0x19,
                            0x28
                        ],
                        'shadowSize': [
                            0x29,
                            0x29
                        ],
                        'iconAnchor': [
                            0xc,
                            0x27
                        ],
                        'shadowAnchor': [
                            0xd,
                            0x28
                        ],
                        'popupAnchor': [
                            0x0,
                            -0x1e
                        ]
                    });
                    _0x2978d7['data']['' + _0x598c49['marker_name']] = L[_0x3c0929(0xf9)]([
                        _0x598c49['latitude'],
                        _0x598c49[_0x3c0929(0xe6)]
                    ], { 'icon': _0x35dd37 })['on'](_0x3c0929(0xd7), _0x547a89)['on']('mouseover', _0x5adcf0)['on'](_0x3c0929(0xf3), _0x3b206b)[_0x3c0929(0xfb)](_0x2978d7[_0x3c0929(0xe2)][_0x3c0929(0xfa)]);
                }
            }
        }
    }
    function _0x547a89() {
        const _0x1e89a5 = _0x3c0929;
        _0x598c49[_0x1e89a5(0xe8)] && (_0x2978d7[_0x1e89a5(0xda)](_0x1e89a5(0xd3), _0x598c49[_0x1e89a5(0xe8)]), _0x2978d7[_0x1e89a5(0xde)](_0x1e89a5(0xd5)));
    }
    function _0x5adcf0() {
        const _0x35feee = _0x3c0929;
        _0x2978d7[_0x35feee(0xda)]('marker_hovered_id', _0x598c49[_0x35feee(0xe8)]), _0x2978d7[_0x35feee(0xde)](_0x35feee(0xf7));
    }
    function _0x3b206b() {
        const _0x3664a9 = _0x3c0929;
        _0x2978d7[_0x3664a9(0xda)]('marker_unhovered_id', _0x598c49[_0x3664a9(0xe8)]), _0x2978d7['triggerEvent'](_0x3664a9(0xea));
    }
}
function _0x2d09() {
    const _0x3f24d9 = [
        'mouseover',
        'marker_clicked',
        '300256EKRvxe',
        'click',
        '582604rKQKmg',
        '//dd7tel2830j4w.cloudfront.net/f1567070967095x108965806592226770/brown_marker.png',
        'publishState',
        'icon',
        'bindPopup',
        '44YElmbQ',
        'triggerEvent',
        '4428466xqMLty',
        '138gggDYo',
        '//dd7tel2830j4w.cloudfront.net/f1567071044715x223496852841002400/blue_marker.png',
        'data',
        'use_custom_icon',
        'custom_icon_url',
        '2KXhKxL',
        'longitude',
        'Red',
        'marker_name',
        '//dd7tel2830j4w.cloudfront.net/f1567070947779x803166556575223700/marker-shadow.png',
        'marker_unhovered',
        '876KcEVyj',
        'latitude',
        'https:',
        '40930jwraPJ',
        '//dd7tel2830j4w.cloudfront.net/f1567070983762x973056674738514600/yellow_marker.png',
        'popup_on_click',
        '2221190rZLfGd',
        '162eZYhlf',
        'mouseout',
        '//dd7tel2830j4w.cloudfront.net/f1567071031375x378002786517539900/black_marker.png',
        '76413CSqoew',
        'Blue',
        'marker_hovered',
        'Black',
        'marker',
        'mymap',
        'addTo',
        '449124THgEWo',
        'Green',
        '52HYodzx',
        'marker_style',
        'Brown',
        '//dd7tel2830j4w.cloudfront.net/f1567071057099x762384812835195500/white_marker.png',
        'marker_clicked_id'
    ];
    _0x2d09 = function () {
        return _0x3f24d9;
    };
    return _0x2d09();
}
	 run(instance, properties, context);
}