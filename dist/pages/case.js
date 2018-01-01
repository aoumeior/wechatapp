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

var _imagetypesetting = require('./../components/imagetypesetting.js');

var _imagetypesetting2 = _interopRequireDefault(_imagetypesetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example


var cfase = function (_wepy$page) {
  _inherits(cfase, _wepy$page);

  function cfase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cfase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cfase.__proto__ || Object.getPrototypeOf(cfase)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '更多案例'
    }, _this.$repeat = {}, _this.$props = { "Panel": { "xmlns:v-bind": "", "v-bind:num.sync": "panel1" } }, _this.$events = {}, _this.components = {
      imageshow: _imageshow2.default,
      Panel: _panel2.default,
      imagetypesetting: _imagetypesetting2.default
    }, _this.data = {
      panel1: 10
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cfase, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return cfase;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cfase , 'pages/case'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2UuanMiXSwibmFtZXMiOlsiY2Zhc2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW1hZ2VzaG93IiwiUGFuZWwiLCJpbWFnZXR5cGVzZXR0aW5nIiwiZGF0YSIsInBhbmVsMSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUZ1Qzs7O0lBR2xCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFFBQXJDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0NBRFE7QUFFUkMsNEJBRlE7QUFHUkM7QUFIUSxLLFFBS1ZDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSzs7Ozs7NkJBR0UsQ0FDUjs7OztFQWhCZ0MsZUFBS0MsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImNhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcclxuICBpbXBvcnQgSW1hZ2VzaG93IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VzaG93J1xyXG4gIGltcG9ydCBpbWFnZXR5cGVzZXR0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2V0eXBlc2V0dGluZydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjZmFzZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmm7TlpJrmoYjkvosnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGFuZWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJwYW5lbDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBpbWFnZXNob3c6IEltYWdlc2hvdyxcclxuICAgICAgUGFuZWw6IFBhbmVsLFxyXG4gICAgICBpbWFnZXR5cGVzZXR0aW5nOiBpbWFnZXR5cGVzZXR0aW5nXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwYW5lbDE6IDEwXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=