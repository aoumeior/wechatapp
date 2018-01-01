'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// alias example

var articlepage = function (_wepy$page) {
  _inherits(articlepage, _wepy$page);

  function articlepage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, articlepage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = articlepage.__proto__ || Object.getPrototypeOf(articlepage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '更多案例'
    }, _this.$repeat = {}, _this.$props = { "Panel": { "xmlns:v-bind": "", "v-bind:num.sync": "panel1" } }, _this.$events = {}, _this.components = {
      Panel: _panel2.default
    }, _this.data = {
      panel1: 10,
      article: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(articlepage, [{
    key: 'onLoad',
    value: function onLoad(opition) {
      this.article = JSON.parse(opition.item);
      this.$apply();
    }
  }]);

  return articlepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(articlepage , 'pages/articlepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVwYWdlLmpzIl0sIm5hbWVzIjpbImFydGljbGVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBhbmVsIiwiZGF0YSIsInBhbmVsMSIsImFydGljbGUiLCJvcGl0aW9uIiwiSlNPTiIsInBhcnNlIiwiaXRlbSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUF1Qzs7SUFFbEJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsUUFBckMsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxlQUFTO0FBRkosSzs7Ozs7MkJBSUFDLE8sRUFBUztBQUNkLFdBQUtELE9BQUwsR0FBZUUsS0FBS0MsS0FBTCxDQUFXRixRQUFRRyxJQUFuQixDQUFmO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7O0VBakJzQyxlQUFLQyxJOztrQkFBekJoQixXIiwiZmlsZSI6ImFydGljbGVwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJyAvLyBhbGlhcyBleGFtcGxlXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFydGljbGVwYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+abtOWkmuahiOS+iydcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQYW5lbFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInBhbmVsMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFBhbmVsOiBQYW5lbCxcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBhbmVsMTogMTAsXHJcbiAgICAgIGFydGljbGU6IHt9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQob3BpdGlvbikge1xyXG4gICAgICB0aGlzLmFydGljbGUgPSBKU09OLnBhcnNlKG9waXRpb24uaXRlbSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19