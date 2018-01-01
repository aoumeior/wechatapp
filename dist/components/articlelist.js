'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var articlelist = function (_wepy$component) {
  _inherits(articlelist, _wepy$component);

  function articlelist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, articlelist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = articlelist.__proto__ || Object.getPrototypeOf(articlelist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      moves: []
    }, _this.events = {}, _this.methods = {
      'g-request': function gRequest(url, $event) {
        var self = _this;
        console.log('articlelist.component methods response');
        wx.request({
          'url': url,
          'success': function success(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                console.log(item);
                var time = (0, _moment2.default)(item.occur_time);
                item.day = time.dayOfYear();
                item.otherdata = time.weekYear() + '-' + time.month();
                item.profile = item.content.substr(0, 10) + '...';
                console.log(item);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            self.moves = data.data.data;
            console.log(self.moves);
            self.$apply();
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return articlelist;
}(_wepy2.default.component);

exports.default = articlelist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVsaXN0LmpzIl0sIm5hbWVzIjpbImFydGljbGVsaXN0IiwicHJvcHMiLCJkYXRhIiwibW92ZXMiLCJldmVudHMiLCJtZXRob2RzIiwidXJsIiwiJGV2ZW50Iiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlcXVlc3QiLCJpdGVtIiwidGltZSIsIm9jY3VyX3RpbWUiLCJkYXkiLCJkYXlPZlllYXIiLCJvdGhlcmRhdGEiLCJ3ZWVrWWVhciIsIm1vbnRoIiwicHJvZmlsZSIsImNvbnRlbnQiLCJzdWJzdHIiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0hDLGFBQU87QUFESixLLFFBR1BDLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSLG1CQUFhLGtCQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDNUIsWUFBSUMsWUFBSjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLHdDQUFaO0FBQ0FDLFdBQUdDLE9BQUgsQ0FBVztBQUNULGlCQUFPTixHQURFO0FBRVQscUJBQVcsaUJBQVVKLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsbUNBQWdCQSxLQUFLQSxJQUFMLENBQVVBLElBQTFCLDhIQUErQjtBQUFBLG9CQUF2QlcsSUFBdUI7O0FBQzdCSix3QkFBUUMsR0FBUixDQUFZRyxJQUFaO0FBQ0Esb0JBQUlDLE9BQU8sc0JBQU9ELEtBQUtFLFVBQVosQ0FBWDtBQUNBRixxQkFBS0csR0FBTCxHQUFXRixLQUFLRyxTQUFMLEVBQVg7QUFDQUoscUJBQUtLLFNBQUwsR0FBaUJKLEtBQUtLLFFBQUwsS0FBa0IsR0FBbEIsR0FBd0JMLEtBQUtNLEtBQUwsRUFBekM7QUFDQVAscUJBQUtRLE9BQUwsR0FBYVIsS0FBS1MsT0FBTCxDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXNCLEVBQXRCLElBQTRCLEtBQXpDO0FBQ0FkLHdCQUFRQyxHQUFSLENBQVlHLElBQVo7QUFDRDtBQVJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVN6QkwsaUJBQUtMLEtBQUwsR0FBYUQsS0FBS0EsSUFBTCxDQUFVQSxJQUF2QjtBQUNBTyxvQkFBUUMsR0FBUixDQUFZRixLQUFLTCxLQUFqQjtBQUNBSyxpQkFBS2dCLE1BQUw7QUFDRDtBQWRRLFNBQVg7QUFnQkQ7QUFwQk8sSzs7OztFQVI2QixlQUFLQyxTOztrQkFBekJ6QixXIiwiZmlsZSI6ImFydGljbGVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcnRpY2xlbGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbW92ZXM6IFtdXHJcbiAgICB9O1xyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICdnLXJlcXVlc3QnOiAodXJsLCAkZXZlbnQpID0+IHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FydGljbGVsaXN0LmNvbXBvbmVudCBtZXRob2RzIHJlc3BvbnNlJylcclxuICAgICAgICB3eC5yZXF1ZXN0KHsgICAgXHJcbiAgICAgICAgICAndXJsJzogdXJsLFxyXG4gICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGl0ZW0gb2YgZGF0YS5kYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIHZhciB0aW1lID0gbW9tZW50KGl0ZW0ub2NjdXJfdGltZSlcclxuICAgICAgICAgICAgICBpdGVtLmRheSA9IHRpbWUuZGF5T2ZZZWFyKClcclxuICAgICAgICAgICAgICBpdGVtLm90aGVyZGF0YSA9IHRpbWUud2Vla1llYXIoKSArICctJyArIHRpbWUubW9udGgoKVxyXG4gICAgICAgICAgICAgIGl0ZW0ucHJvZmlsZT1pdGVtLmNvbnRlbnQuc3Vic3RyKDAsMTApICsgJy4uLidcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLm1vdmVzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5tb3ZlcylcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9XHJcbiJdfQ==