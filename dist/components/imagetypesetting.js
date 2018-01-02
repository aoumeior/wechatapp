'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

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
            console.log(self.movies);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdldHlwZXNldHRpbmcuanMiXSwibmFtZXMiOlsiaW1hZ2V0eXBlc2V0dGluZyIsInByb3BzIiwiZGF0YSIsIm1ldGhvZHMiLCJ1cmwiLCIkZXZlbnQiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtb3ZpZXMiLCIkYXBwbHkiLCJpdGVtIiwibmF2aWdhdGVUbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPLEVBQUMsVUFBVTtBQUFYLEssUUFFUEMsTyxHQUFVO0FBQ1IsbUJBQWEsa0JBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM1QixZQUFJQyxZQUFKO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksNkNBQVo7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1gsaUJBQU9MLEdBREk7QUFFWCxxQkFBVyxpQkFBVUYsSUFBVixFQUFnQjtBQUN6QkksaUJBQUtJLE1BQUwsR0FBY1IsS0FBS0EsSUFBTCxDQUFVQSxJQUF4QjtBQUNBSSxpQkFBS0ssTUFBTDtBQUNBSixvQkFBUUMsR0FBUixDQUFZRixLQUFLSSxNQUFqQjtBQUNEO0FBTlUsU0FBYjtBQVFELE9BWk87QUFhUix5QkFBbUIseUJBQUNFLElBQUQsRUFBVTtBQUMzQix1QkFBS0MsVUFBTCxDQUFnQixFQUFFVCxLQUFLLG9CQUFvQlEsSUFBM0IsRUFBaEI7QUFDRDtBQWZPLEs7Ozs7RUFMa0MsZUFBS0UsUzs7a0JBQTlCZCxnQiIsImZpbGUiOiJpbWFnZXR5cGVzZXR0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1hZ2V0eXBlc2V0dGluZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHsnbW92aWVzJzogW11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICdnLXJlcXVlc3QnOiAodXJsLCAkZXZlbnQpID0+IHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2V0eXBlc2V0dGluZy5jb21wb25lbnQgbWV0aG9kcyByZXNwb25zZScpXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICd1cmwnOiB1cmwsXHJcbiAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW92aWVzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLm1vdmllcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAnc2tpcGFydGljbGVwYWdlJzogKGl0ZW0pID0+IHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICdhcnRpY2xlcGFnZT9pZD0nICsgaXRlbSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=