'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageshow = function (_wepy$component) {
  _inherits(imageshow, _wepy$component);

  function imageshow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, imageshow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = imageshow.__proto__ || Object.getPrototypeOf(imageshow)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = { 'movies': []
    }, _this.methods = {
      'g-request': function gRequest(url) {
        console.log('imageshow.component methods response');
        var self = _this;
        _wepy2.default.request({
          url: url,
          success: function success(data) {
            self.movies = data.data.data;
            self.$apply();
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return imageshow;
}(_wepy2.default.component);

exports.default = imageshow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2hvdy5qcyJdLCJuYW1lcyI6WyJpbWFnZXNob3ciLCJwcm9wcyIsImRhdGEiLCJtZXRob2RzIiwidXJsIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsIm1vdmllcyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU8sRUFBQyxVQUFVO0FBQVgsSyxRQUVQQyxPLEdBQVU7QUFDUixtQkFBYSxrQkFBQ0MsR0FBRCxFQUFTO0FBQ3BCQyxnQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0EsWUFBSUMsWUFBSjtBQUNBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEosZUFBS0EsR0FETTtBQUVYSyxtQkFBUyxpQkFBVVAsSUFBVixFQUFnQjtBQUN2QkssaUJBQUtHLE1BQUwsR0FBY1IsS0FBS0EsSUFBTCxDQUFVQSxJQUF4QjtBQUNBSyxpQkFBS0ksTUFBTDtBQUNEO0FBTFUsU0FBYjtBQU9EO0FBWE8sSzs7OztFQUwyQixlQUFLQyxTOztrQkFBdkJaLFMiLCJmaWxlIjoiaW1hZ2VzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdlc2hvdyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHsnbW92aWVzJzogW11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICdnLXJlcXVlc3QnOiAodXJsKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlc2hvdy5jb21wb25lbnQgbWV0aG9kcyByZXNwb25zZScpXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgc2VsZi5tb3ZpZXMgPSBkYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==