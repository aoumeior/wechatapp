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
    value: function onLoad() {
      this.$invoke('imageshow', 'g-request', 'https://unitools.site/ytcc/app/view/data?viewid=xcx-piclb');
      this.$invoke('imagetypesetting', 'g-request', 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&pageIndex=0&pageSize=4');
    }
  }]);

  return cfase;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cfase , 'pages/case'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2UuanMiXSwibmFtZXMiOlsiY2Zhc2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW1hZ2VzaG93IiwiUGFuZWwiLCJpbWFnZXR5cGVzZXR0aW5nIiwiZGF0YSIsInBhbmVsMSIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFGdUM7OztJQUdsQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixRQUFyQyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG9DQURRO0FBRVJDLDRCQUZRO0FBR1JDO0FBSFEsSyxRQUtWQyxJLEdBQU87QUFDTEMsY0FBUTtBQURILEs7Ozs7OzZCQUdFO0FBQ1AsV0FBS0MsT0FBTCxDQUFhLFdBQWIsRUFBMEIsV0FBMUIsRUFBdUMsMkRBQXZDO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLFdBQWpDLEVBQThDLGlGQUE5QztBQUNEOzs7O0VBbEJnQyxlQUFLQyxJOztrQkFBbkJiLEsiLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxyXG4gIGltcG9ydCBJbWFnZXNob3cgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXNob3cnXHJcbiAgaW1wb3J0IGltYWdldHlwZXNldHRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXR5cGVzZXR0aW5nJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNmYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+abtOWkmuahiOS+iydcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQYW5lbFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInBhbmVsMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGltYWdlc2hvdzogSW1hZ2VzaG93LFxyXG4gICAgICBQYW5lbDogUGFuZWwsXHJcbiAgICAgIGltYWdldHlwZXNldHRpbmc6IGltYWdldHlwZXNldHRpbmdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBhbmVsMTogMTBcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy4kaW52b2tlKCdpbWFnZXNob3cnLCAnZy1yZXF1ZXN0JywgJ2h0dHBzOi8vdW5pdG9vbHMuc2l0ZS95dGNjL2FwcC92aWV3L2RhdGE/dmlld2lkPXhjeC1waWNsYicpXHJcbiAgICAgIHRoaXMuJGludm9rZSgnaW1hZ2V0eXBlc2V0dGluZycsICdnLXJlcXVlc3QnLCAnaHR0cHM6Ly91bml0b29scy5zaXRlL3l0Y2MvYXBwL3ZpZXcvZGF0YT92aWV3aWQ9eGN4LWxpc3QmcGFnZUluZGV4PTAmcGFnZVNpemU9NCcpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=