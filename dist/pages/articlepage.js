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
      console.log(opition);
      var self = this;
      _wepy2.default.request({ url: 'https://unitools.site/ytcc/app/view/data?viewid=xcx-list&id=' + opition.id,
        success: function success(data) {
          self.article = data.data.data[0];
          self.$apply();
        }
      });
    }
  }]);

  return articlepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(articlepage , 'pages/articlepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVwYWdlLmpzIl0sIm5hbWVzIjpbImFydGljbGVwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBhbmVsIiwiZGF0YSIsInBhbmVsMSIsImFydGljbGUiLCJvcGl0aW9uIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwiaWQiLCJzdWNjZXNzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQXVDOztJQUVsQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixRQUFyQyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGVBQVM7QUFGSixLOzs7OzsyQkFJQUMsTyxFQUFTO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFVBQUlHLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxPQUFMLENBQWEsRUFBQ0MsS0FBSyxpRUFBaUVMLFFBQVFNLEVBQS9FO0FBQ1hDLGlCQUFTLGlCQUFDVixJQUFELEVBQVU7QUFDakJNLGVBQUtKLE9BQUwsR0FBZUYsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWUsQ0FBZixDQUFmO0FBQ0FNLGVBQUtLLE1BQUw7QUFDRDtBQUpVLE9BQWI7QUFNRDs7OztFQXZCc0MsZUFBS0MsSTs7a0JBQXpCcEIsVyIsImZpbGUiOiJhcnRpY2xlcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFydGljbGVwYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+abtOWkmuahiOS+iydcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQYW5lbFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInBhbmVsMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFBhbmVsOiBQYW5lbFxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcGFuZWwxOiAxMCxcclxuICAgICAgYXJ0aWNsZToge31cclxuICAgIH1cclxuICAgIG9uTG9hZChvcGl0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9waXRpb24pXHJcbiAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe3VybDogJ2h0dHBzOi8vdW5pdG9vbHMuc2l0ZS95dGNjL2FwcC92aWV3L2RhdGE/dmlld2lkPXhjeC1saXN0JmlkPScgKyBvcGl0aW9uLmlkLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZWxmLmFydGljbGUgPSBkYXRhLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==