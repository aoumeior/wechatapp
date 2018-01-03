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
      navigationBarTitleText: '华邦首页1'
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
      var url = 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&pageIndex=0&pageSize=4';
      this.$invoke('Articlelist', 'g-request', url);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkFydGljbGVsaXN0IiwiaW1hZ2V0eXBlc2V0dGluZyIsImltYWdlc2hvdyIsInBhbmUyIiwicGFuZWwiLCJkYXRhIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRpdGxlMSIsInN1YnRpdGxlMSIsInBhbmVsMSIsIm15bnVtIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2tpcGNvbnN1bHQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFIdUM7OztJQUtsQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixHQUFyQyxFQUFULEVBQW1ELFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsUUFBckMsRUFBM0QsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsd0NBRFE7QUFFUkMsa0RBRlE7QUFHUkMsb0NBSFE7QUFJUkMsNEJBSlE7QUFLUkM7QUFMUSxLLFFBT1ZDLEksR0FBTztBQUNMQyxhQUFPLFlBREY7QUFFTEMsZ0JBQVUsbURBRkw7QUFHTEMsY0FBUSxTQUhIO0FBSUxDLGlCQUFXLHNDQUpOO0FBS0xDLGNBQVEsQ0FMSDtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBQWEsdUJBQU07QUFDakIsdUJBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFLLE1BQU4sRUFBZjtBQUNEO0FBSE8sSyxRQUtWQyxNLEdBQVMsRTs7Ozs7OEJBRUMsQ0FDVDs7OzZCQUNRO0FBQ1AsVUFBSUQsTUFBTSxpRkFBVjtBQUNBLFdBQUtFLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLFdBQTVCLEVBQXlDRixHQUF6QztBQUNEOzs7O0VBcENnQyxlQUFLRyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxyXG4gIGltcG9ydCBJbWFnZXNob3cgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXNob3cnXHJcbiAgaW1wb3J0IGltYWdldHlwZXNldHRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXR5cGVzZXR0aW5nJ1xyXG4gIGltcG9ydCBBcnRpY2xlbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FydGljbGVsaXN0J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljY7pgqbpppbpobUxJ1xyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBhbmUyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwiMVwifSxcInBhbmVsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwicGFuZWwxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgQXJ0aWNsZWxpc3Q6IEFydGljbGVsaXN0LFxyXG4gICAgICBpbWFnZXR5cGVzZXR0aW5nOiBpbWFnZXR5cGVzZXR0aW5nLFxyXG4gICAgICBpbWFnZXNob3c6IEltYWdlc2hvdyxcclxuICAgICAgcGFuZTI6IFBhbmVsLFxyXG4gICAgICBwYW5lbDogUGFuZWxcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiAn5aaC5L2V6Kej5Yaz572R57uc6JCl6ZSA5LmL6YGTJyxcclxuICAgICAgc3VidGl0bGU6ICflsI/nqIvluo/lvIDlj5HmoYbmnrbnmoTnm67moIfmmK/pgJrov4flsL3lj6/og73nroDljZXjgIHpq5jmlYjnmoTmlrnlvI/orqnlvIDlj5HogIXlj6/ku6XlnKjlvq7kv6HkuK3lvIDlj5HlhbfmnInljp/nlJ9hcHDkvZPpqoznmoTmnI3liqHjgIInLFxyXG4gICAgICB0aXRsZTE6ICfmiJHku6znmoTnu4/pqozkuYvpgZMnLFxyXG4gICAgICBzdWJ0aXRsZTE6ICcxNOW5tOeahOS7juS4mue7j+mqjO+8jOaIkOWwseS6huaIkeS7rOWmguS7iueahOS4k+S4mu+8jOiuqeabtOWkmueahOWuouaIt+i1sOS4iuS6hue9kee7nOiQpemUgOeahOmBk+i3rycsXHJcbiAgICAgIHBhbmVsMTogMSxcclxuICAgICAgbXludW06IDIwXHJcbiAgICB9O1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2tpcGNvbnN1bHQ6ICgpID0+IHtcclxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7dXJsOiAnY2FzZSd9KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfTtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdW5pdG9vbHMuc2l0ZS95dGNjL2FwcC92aWV3L2RhdGE/dmlld2lkPXhjeC1saXN0JnBhZ2VJbmRleD0wJnBhZ2VTaXplPTQnXHJcbiAgICAgIHRoaXMuJGludm9rZSgnQXJ0aWNsZWxpc3QnLCAnZy1yZXF1ZXN0JywgdXJsKVxyXG4gICAgfVxyXG4gIH1cclxuIl19