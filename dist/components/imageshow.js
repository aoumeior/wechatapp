'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2hvdy5qcyJdLCJuYW1lcyI6WyJpbWFnZXNob3ciLCJwcm9wcyIsImRhdGEiLCJtZXRob2RzIiwidXJsIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsIm1vdmllcyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPLEVBQUMsVUFBVTtBQUFYLEssUUFFUEMsTyxHQUFVO0FBQ1IsbUJBQWEsa0JBQUNDLEdBQUQsRUFBUztBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNBLFlBQUlDLFlBQUo7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hKLGVBQUtBLEdBRE07QUFFWEssbUJBQVMsaUJBQVVQLElBQVYsRUFBZ0I7QUFDdkJLLGlCQUFLRyxNQUFMLEdBQWNSLEtBQUtBLElBQUwsQ0FBVUEsSUFBeEI7QUFDQUssaUJBQUtJLE1BQUw7QUFDRDtBQUxVLFNBQWI7QUFPRDtBQVhPLEs7Ozs7RUFMMkIsZUFBS0MsUzs7a0JBQXZCWixTIiwiZmlsZSI6ImltYWdlc2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbWFnZXNob3cgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7J21vdmllcyc6IFtdXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZXNob3cuY29tcG9uZW50IG1ldGhvZHMgcmVzcG9uc2UnKVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW92aWVzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4iXX0=