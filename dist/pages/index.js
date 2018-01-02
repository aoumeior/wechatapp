'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _imageshow = require('./../components/imageshow.js');

var _imageshow2 = _interopRequireDefault(_imageshow);

var _imagetypesetting = require('./../components/imagetypesetting.js');

var _imagetypesetting2 = _interopRequireDefault(_imagetypesetting);

var _articlelist = require('./../components/articlelist.js');

var _articlelist2 = _interopRequireDefault(_articlelist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '华邦首页'
    }, _this.$repeat = {}, _this.$props = { "pane2": { "xmlns:v-bind": "", "v-bind:num.sync": "1" }, "panel": { "xmlns:v-bind": "", "v-bind:num.sync": "panel1" } }, _this.$events = {}, _this.components = {
      Articlelist: _articlelist2.default,
      imagetypesetting: _imagetypesetting2.default,
      imageshow: _imageshow2.default,
      pane2: _panel2.default,
      panel: _panel2.default
    }, _this.data = {
      title: '如何解决网络营销之道',
      subtitle: '小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生app体验的服务。',
      title1: '我们的经验之道',
      subtitle1: '14年的从业经验，成就了我们如今的专业，让更多的客户走上了网络营销的道路',
      panel1: 1,
      mynum: 20
    }, _this.computed = {}, _this.methods = {
      skipconsult: function skipconsult() {
        _wepy2.default.switchTab({ url: 'case' });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var Articlelisturl = 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&pageIndex=0&pageSize=4';
      this.$invoke('Articlelist', 'g-request', Articlelisturl);
      this.$invoke('imageshow', 'g-request', 'https://unitools.site/ytcc/app/view/data?viewid=xcx-piclb');
      this.$invoke('imagetypesetting', 'g-request', 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&pageIndex=0&pageSize=4');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkFydGljbGVsaXN0IiwiaW1hZ2V0eXBlc2V0dGluZyIsImltYWdlc2hvdyIsInBhbmUyIiwicGFuZWwiLCJkYXRhIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRpdGxlMSIsInN1YnRpdGxlMSIsInBhbmVsMSIsIm15bnVtIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2tpcGNvbnN1bHQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCJBcnRpY2xlbGlzdHVybCIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUh1Qzs7O0lBS2xCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEdBQXJDLEVBQVQsRUFBbUQsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixRQUFyQyxFQUEzRCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyx3Q0FEUTtBQUVSQyxrREFGUTtBQUdSQyxvQ0FIUTtBQUlSQyw0QkFKUTtBQUtSQztBQUxRLEssUUFPVkMsSSxHQUFPO0FBQ0xDLGFBQU8sWUFERjtBQUVMQyxnQkFBVSxtREFGTDtBQUdMQyxjQUFRLFNBSEg7QUFJTEMsaUJBQVcsc0NBSk47QUFLTEMsY0FBUSxDQUxIO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxtQkFBYSx1QkFBTTtBQUNqQix1QkFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUssTUFBTixFQUFmO0FBQ0Q7QUFITyxLLFFBS1ZDLE0sR0FBUyxFOzs7Ozs4QkFFQyxDQUNUOzs7NkJBQ1E7QUFDUCxVQUFJQyxpQkFBaUIsaUZBQXJCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhLGFBQWIsRUFBNEIsV0FBNUIsRUFBeUNELGNBQXpDO0FBQ0EsV0FBS0MsT0FBTCxDQUFhLFdBQWIsRUFBMEIsV0FBMUIsRUFBdUMsMkRBQXZDO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLFdBQWpDLEVBQThDLGlGQUE5QztBQUNEOzs7O0VBdENnQyxlQUFLQyxJOztrQkFBbkIzQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgSW1hZ2VzaG93IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VzaG93J1xuICBpbXBvcnQgaW1hZ2V0eXBlc2V0dGluZyBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdldHlwZXNldHRpbmcnXG4gIGltcG9ydCBBcnRpY2xlbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FydGljbGVsaXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2O6YKm6aaW6aG1J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGFuZTJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCIxXCJ9LFwicGFuZWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJwYW5lbDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQXJ0aWNsZWxpc3Q6IEFydGljbGVsaXN0LFxuICAgICAgaW1hZ2V0eXBlc2V0dGluZzogaW1hZ2V0eXBlc2V0dGluZyxcbiAgICAgIGltYWdlc2hvdzogSW1hZ2VzaG93LFxuICAgICAgcGFuZTI6IFBhbmVsLFxuICAgICAgcGFuZWw6IFBhbmVsXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB0aXRsZTogJ+WmguS9leino+WGs+e9kee7nOiQpemUgOS5i+mBkycsXG4gICAgICBzdWJ0aXRsZTogJ+Wwj+eoi+W6j+W8gOWPkeahhuaetueahOebruagh+aYr+mAmui/h+WwveWPr+iDveeugOWNleOAgemrmOaViOeahOaWueW8j+iuqeW8gOWPkeiAheWPr+S7peWcqOW+ruS/oeS4reW8gOWPkeWFt+acieWOn+eUn2FwcOS9k+mqjOeahOacjeWKoeOAgicsXG4gICAgICB0aXRsZTE6ICfmiJHku6znmoTnu4/pqozkuYvpgZMnLFxuICAgICAgc3VidGl0bGUxOiAnMTTlubTnmoTku47kuJrnu4/pqozvvIzmiJDlsLHkuobmiJHku6zlpoLku4rnmoTkuJPkuJrvvIzorqnmm7TlpJrnmoTlrqLmiLfotbDkuIrkuobnvZHnu5zokKXplIDnmoTpgZPot68nLFxuICAgICAgcGFuZWwxOiAxLFxuICAgICAgbXludW06IDIwXG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHtcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBza2lwY29uc3VsdDogKCkgPT4ge1xuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7dXJsOiAnY2FzZSd9KVxuICAgICAgfVxuICAgIH07XG4gICAgZXZlbnRzID0ge1xuICAgIH07XG4gICAgb25SZWFkeSgpIHtcbiAgICB9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgIHZhciBBcnRpY2xlbGlzdHVybCA9ICdodHRwczovL3VuaXRvb2xzLnNpdGUveXRjYy9hcHAvdmlldy9kYXRhP3ZpZXdpZD14Y3gtbGlzdCZwYWdlSW5kZXg9MCZwYWdlU2l6ZT00J1xuICAgICAgdGhpcy4kaW52b2tlKCdBcnRpY2xlbGlzdCcsICdnLXJlcXVlc3QnLCBBcnRpY2xlbGlzdHVybClcbiAgICAgIHRoaXMuJGludm9rZSgnaW1hZ2VzaG93JywgJ2ctcmVxdWVzdCcsICdodHRwczovL3VuaXRvb2xzLnNpdGUveXRjYy9hcHAvdmlldy9kYXRhP3ZpZXdpZD14Y3gtcGljbGInKVxuICAgICAgdGhpcy4kaW52b2tlKCdpbWFnZXR5cGVzZXR0aW5nJywgJ2ctcmVxdWVzdCcsICdodHRwczovL3VuaXRvb2xzLnNpdGUveXRjYy9hcHAvdmlldy9kYXRhP3ZpZXdpZD14Y3gtbGlzdCZwYWdlSW5kZXg9MCZwYWdlU2l6ZT00JylcbiAgICB9XG4gIH1cbiJdfQ==