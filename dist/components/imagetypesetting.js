'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imagetypesetting = function (_wepy$component) {
  _inherits(imagetypesetting, _wepy$component);

  function imagetypesetting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, imagetypesetting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = imagetypesetting.__proto__ || Object.getPrototypeOf(imagetypesetting)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = { 'movies': []
    }, _this.methods = {
      'g-request': function gRequest(url, $event) {
        var self = _this;
        console.log('imagetypesetting.component methods response');
        _wepy2.default.request({
          'url': url,
          'success': function success(data) {
            self.movies = data.data.data;
            self.$apply();
          }
        });
      },
      'skiparticlepage': function skiparticlepage(item) {
        _wepy2.default.navigateTo({ url: 'articlepage?id=' + item });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return imagetypesetting;
}(_wepy2.default.component);

exports.default = imagetypesetting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdldHlwZXNldHRpbmcuanMiXSwibmFtZXMiOlsiaW1hZ2V0eXBlc2V0dGluZyIsInByb3BzIiwiZGF0YSIsIm1ldGhvZHMiLCJ1cmwiLCIkZXZlbnQiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtb3ZpZXMiLCIkYXBwbHkiLCJpdGVtIiwibmF2aWdhdGVUbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTyxFQUFDLFVBQVU7QUFBWCxLLFFBRVBDLE8sR0FBVTtBQUNSLG1CQUFhLGtCQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDNUIsWUFBSUMsWUFBSjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLDZDQUFaO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYLGlCQUFPTCxHQURJO0FBRVgscUJBQVcsaUJBQVVGLElBQVYsRUFBZ0I7QUFDekJJLGlCQUFLSSxNQUFMLEdBQWNSLEtBQUtBLElBQUwsQ0FBVUEsSUFBeEI7QUFDQUksaUJBQUtLLE1BQUw7QUFDRDtBQUxVLFNBQWI7QUFPRCxPQVhPO0FBWVIseUJBQW1CLHlCQUFDQyxJQUFELEVBQVU7QUFDM0IsdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBRVQsS0FBSyxvQkFBb0JRLElBQTNCLEVBQWhCO0FBQ0Q7QUFkTyxLOzs7O0VBTGtDLGVBQUtFLFM7O2tCQUE5QmQsZ0IiLCJmaWxlIjoiaW1hZ2V0eXBlc2V0dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdldHlwZXNldHRpbmcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7J21vdmllcyc6IFtdXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdldHlwZXNldHRpbmcuY29tcG9uZW50IG1ldGhvZHMgcmVzcG9uc2UnKVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAndXJsJzogdXJsLFxyXG4gICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBzZWxmLm1vdmllcyA9IGRhdGEuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAnc2tpcGFydGljbGVwYWdlJzogKGl0ZW0pID0+IHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICdhcnRpY2xlcGFnZT9pZD0nICsgaXRlbSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=