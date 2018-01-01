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
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var url = 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&pageIndex=0&pageSize=4';
      this.$invoke('Articlelist', 'g-request', url);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkFydGljbGVsaXN0IiwiaW1hZ2V0eXBlc2V0dGluZyIsImltYWdlc2hvdyIsInBhbmUyIiwicGFuZWwiLCJkYXRhIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRpdGxlMSIsInN1YnRpdGxlMSIsInBhbmVsMSIsIm15bnVtIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwidXJsIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBSHVDOzs7SUFLbEJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsR0FBckMsRUFBVCxFQUFtRCxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFFBQXJDLEVBQTNELEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHdDQURRO0FBRVJDLGtEQUZRO0FBR1JDLG9DQUhRO0FBSVJDLDRCQUpRO0FBS1JDO0FBTFEsSyxRQU9WQyxJLEdBQU87QUFDTEMsYUFBTyxZQURGO0FBRUxDLGdCQUFVLG1EQUZMO0FBR0xDLGNBQVEsU0FISDtBQUlMQyxpQkFBVyxzQ0FKTjtBQUtMQyxjQUFRLENBTEg7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzhCQUVBLENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlDLE1BQU0saUZBQVY7QUFDQSxXQUFLQyxPQUFMLENBQWEsYUFBYixFQUE0QixXQUE1QixFQUF5Q0QsR0FBekM7QUFDRDs7OztFQWpDZ0MsZUFBS0UsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IEltYWdlc2hvdyBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlc2hvdydcbiAgaW1wb3J0IGltYWdldHlwZXNldHRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXR5cGVzZXR0aW5nJ1xuICBpbXBvcnQgQXJ0aWNsZWxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hcnRpY2xlbGlzdCdcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2O6YKm6aaW6aG1J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGFuZTJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCIxXCJ9LFwicGFuZWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJwYW5lbDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQXJ0aWNsZWxpc3Q6IEFydGljbGVsaXN0LFxuICAgICAgaW1hZ2V0eXBlc2V0dGluZzogaW1hZ2V0eXBlc2V0dGluZyxcbiAgICAgIGltYWdlc2hvdzogSW1hZ2VzaG93LFxuICAgICAgcGFuZTI6IFBhbmVsLFxuICAgICAgcGFuZWw6IFBhbmVsLFxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgdGl0bGU6ICflpoLkvZXop6PlhrPnvZHnu5zokKXplIDkuYvpgZMnLFxuICAgICAgc3VidGl0bGU6ICflsI/nqIvluo/lvIDlj5HmoYbmnrbnmoTnm67moIfmmK/pgJrov4flsL3lj6/og73nroDljZXjgIHpq5jmlYjnmoTmlrnlvI/orqnlvIDlj5HogIXlj6/ku6XlnKjlvq7kv6HkuK3lvIDlj5HlhbfmnInljp/nlJ9hcHDkvZPpqoznmoTmnI3liqHjgIInLFxuICAgICAgdGl0bGUxOiAn5oiR5Lus55qE57uP6aqM5LmL6YGTJyxcbiAgICAgIHN1YnRpdGxlMTogJzE05bm055qE5LuO5Lia57uP6aqM77yM5oiQ5bCx5LqG5oiR5Lus5aaC5LuK55qE5LiT5Lia77yM6K6p5pu05aSa55qE5a6i5oi36LWw5LiK5LqG572R57uc6JCl6ZSA55qE6YGT6LevJyxcbiAgICAgIHBhbmVsMTogMSxcbiAgICAgIG15bnVtOiAyMFxuICAgIH07XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgIH07XG4gICAgZXZlbnRzID0ge1xuICAgIH07XG4gICAgb25SZWFkeSgpe1xuICAgIH07XG4gICAgb25Mb2FkKCkge1xuICAgICAgdmFyIHVybCA9ICdodHRwczovL3VuaXRvb2xzLnNpdGUveXRjYy9hcHAvdmlldy9kYXRhP3ZpZXdpZD14Y3gtbGlzdCZwYWdlSW5kZXg9MCZwYWdlU2l6ZT00J1xuICAgICAgdGhpcy4kaW52b2tlKCdBcnRpY2xlbGlzdCcsICdnLXJlcXVlc3QnLCB1cmwpXG4gICAgfVxuICB9XG4iXX0=