function(instance, properties, context){
	function _0x1f25(_0x47652a, _0x38750f) {
    const _0x59ff3e = _0x59ff();
    return _0x1f25 = function (_0x1f255b, _0x58d301) {
        _0x1f255b = _0x1f255b - 0x197;
        let _0x44eb82 = _0x59ff3e[_0x1f255b];
        return _0x44eb82;
    }, _0x1f25(_0x47652a, _0x38750f);
}
(function (_0x5c8104, _0x972257) {
    const _0xa13562 = _0x1f25, _0x589f2e = _0x5c8104();
    while (!![]) {
        try {
            const _0x212939 = -parseInt(_0xa13562(0x19d)) / 0x1 + -parseInt(_0xa13562(0x1a4)) / 0x2 * (-parseInt(_0xa13562(0x1ad)) / 0x3) + parseInt(_0xa13562(0x199)) / 0x4 * (-parseInt(_0xa13562(0x1aa)) / 0x5) + parseInt(_0xa13562(0x1a1)) / 0x6 + parseInt(_0xa13562(0x1a9)) / 0x7 * (parseInt(_0xa13562(0x197)) / 0x8) + -parseInt(_0xa13562(0x1a8)) / 0x9 * (-parseInt(_0xa13562(0x19f)) / 0xa) + -parseInt(_0xa13562(0x1af)) / 0xb;
            if (_0x212939 === _0x972257)
                break;
            else
                _0x589f2e['push'](_0x589f2e['shift']());
        } catch (_0x2afd27) {
            _0x589f2e['push'](_0x589f2e['shift']());
        }
    }
}(_0x59ff, 0x88536));
function _0x59ff() {
    const _0x5bda86 = [
        '55592qgUqLh',
        'Green',
        '1400716dOPccW',
        '//dd7tel2830j4w.cloudfront.net/f1567071016539x633328751974089360/red_marker.png',
        'custom_icon_url',
        'data',
        '126619wTFmot',
        'icon',
        '10wAoKAz',
        'Red',
        '5908968DNZPyf',
        'marker_style',
        'Brown',
        '8znCJBt',
        '//dd7tel2830j4w.cloudfront.net/f1567070997768x135506561932380300/green_marker.png',
        'White',
        '//dd7tel2830j4w.cloudfront.net/f1567070967095x108965806592226770/brown_marker.png',
        '6992487jcdooT',
        '917KryeME',
        '5odlGEV',
        'https:',
        'setIcon',
        '521958owfSiJ',
        'marker_name',
        '25661306lfCsAZ',
        '//dd7tel2830j4w.cloudfront.net/f1567070947779x803166556575223700/marker-shadow.png',
        '//dd7tel2830j4w.cloudfront.net/f1567071057099x762384812835195500/white_marker.png',
        'use_custom_icon'
    ];
    _0x59ff = function () {
        return _0x5bda86;
    };
    return _0x59ff();
}
function run(_0x32d440, _0x38aff7, _0xd9c80d) {
    const _0x2462ea = _0x1f25, _0x1c358d = _0x8ba092 => {
            const _0x131976 = _0x1f25;
            if (_0x8ba092 === 'Blue')
                return '//dd7tel2830j4w.cloudfront.net/f1567071044715x223496852841002400/blue_marker.png';
            else {
                if (_0x8ba092 === 'Yellow')
                    return '//dd7tel2830j4w.cloudfront.net/f1567070983762x973056674738514600/yellow_marker.png';
                else {
                    if (_0x8ba092 === _0x131976(0x198))
                        return _0x131976(0x1a5);
                    else {
                        if (_0x8ba092 === _0x131976(0x1a0))
                            return _0x131976(0x19a);
                        else {
                            if (_0x8ba092 === _0x131976(0x1a3))
                                return _0x131976(0x1a7);
                            else {
                                if (_0x8ba092 === _0x131976(0x1a6))
                                    return _0x131976(0x1b1);
                                else {
                                    if (_0x8ba092 === 'Black')
                                        return '//dd7tel2830j4w.cloudfront.net/f1567071031375x378002786517539900/black_marker.png';
                                }
                            }
                        }
                    }
                }
            }
        };
    if (_0x38aff7['use_custom_icon']) {
        let _0x2b2e53 = L[_0x2462ea(0x19e)]({
            'iconUrl': 'https:' + _0x38aff7[_0x2462ea(0x19b)],
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
        _0x32d440[_0x2462ea(0x19c)]['' + _0x38aff7[_0x2462ea(0x1ae)]]['setIcon'](_0x2b2e53);
    } else {
        if (!_0x38aff7[_0x2462ea(0x1b2)]) {
            let _0x1b9dfb = L[_0x2462ea(0x19e)]({
                'iconUrl': _0x2462ea(0x1ab) + _0x1c358d(_0x38aff7[_0x2462ea(0x1a2)]),
                'shadowUrl': _0x2462ea(0x1b0),
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
            _0x32d440[_0x2462ea(0x19c)]['' + _0x38aff7[_0x2462ea(0x1ae)]][_0x2462ea(0x1ac)](_0x1b9dfb);
        }
    }
}
	 run(instance, properties, context);
}