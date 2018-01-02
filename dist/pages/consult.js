'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _imageshow = require('./../components/imageshow.js');

var _imageshow2 = _interopRequireDefault(_imageshow);

var _articlelist = require('./../components/articlelist.js');

var _articlelist2 = _interopRequireDefault(_articlelist);

var _imagetypesetting = require('./../components/imagetypesetting.js');

var _imagetypesetting2 = _interopRequireDefault(_imagetypesetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example


var consult = function (_wepy$page) {
  _inherits(consult, _wepy$page);

  function consult() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, consult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = consult.__proto__ || Object.getPrototypeOf(consult)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '华邦咨询'
    }, _this.$repeat = {}, _this.$props = { "Panel": { "xmlns:v-bind": "", "v-bind:num.sync": "panel1" } }, _this.$events = {}, _this.components = {
      imageshow: _imageshow2.default,
      Panel: _panel2.default,
      imagetypesetting: _imagetypesetting2.default,
      Articlelist: _articlelist2.default
    }, _this.data = {
      panel1: 10
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(consult, [{
    key: 'onLoad',
    value: function onLoad() {
      var Articlelisturl = 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list';
      this.$invoke('Articlelist', 'g-request', Articlelisturl);
    }
  }]);

  return consult;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(consult , 'pages/consult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHQuanMiXSwibmFtZXMiOlsiY29uc3VsdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbWFnZXNob3ciLCJQYW5lbCIsImltYWdldHlwZXNldHRpbmciLCJBcnRpY2xlbGlzdCIsImRhdGEiLCJwYW5lbDEiLCJBcnRpY2xlbGlzdHVybCIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUh1Qzs7O0lBS2xCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFFBQXJDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0NBRFE7QUFFUkMsNEJBRlE7QUFHUkMsa0RBSFE7QUFJUkM7QUFKUSxLLFFBTVZDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSzs7Ozs7NkJBR0U7QUFDUCxVQUFJQyxpQkFBaUIsMERBQXJCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhLGFBQWIsRUFBNEIsV0FBNUIsRUFBeUNELGNBQXpDO0FBQ0Q7Ozs7RUFuQmtDLGVBQUtFLEk7O2tCQUFyQmYsTyIsImZpbGUiOiJjb25zdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJyAvLyBhbGlhcyBleGFtcGxlXHJcbiAgaW1wb3J0IEltYWdlc2hvdyBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlc2hvdydcclxuICBpbXBvcnQgQXJ0aWNsZWxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hcnRpY2xlbGlzdCdcclxuICBpbXBvcnQgaW1hZ2V0eXBlc2V0dGluZyBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdldHlwZXNldHRpbmcnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnN1bHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2O6YKm5ZKo6K+iJ1xyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBhbmVsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwicGFuZWwxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgaW1hZ2VzaG93OiBJbWFnZXNob3csXHJcbiAgICAgIFBhbmVsOiBQYW5lbCxcclxuICAgICAgaW1hZ2V0eXBlc2V0dGluZzogaW1hZ2V0eXBlc2V0dGluZyxcclxuICAgICAgQXJ0aWNsZWxpc3Q6IEFydGljbGVsaXN0XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwYW5lbDE6IDEwXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHZhciBBcnRpY2xlbGlzdHVybCA9ICdodHRwczovL3VuaXRvb2xzLnNpdGUveXRjYy9hcHAvdmlldy9kYXRhP3ZpZXdpZD14Y3gtbGlzdCdcclxuICAgICAgdGhpcy4kaW52b2tlKCdBcnRpY2xlbGlzdCcsICdnLXJlcXVlc3QnLCBBcnRpY2xlbGlzdHVybClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==