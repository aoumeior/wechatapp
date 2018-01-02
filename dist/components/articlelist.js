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
        _wepy2.default.request({
          'url': url,
          'success': function success(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                var time = (0, _moment2.default)(item.occur_time);
                item.day = time.dayOfYear();
                console.log(time.month());
                item.otherdata = time.weekYear() + '-' + time.month();
                item.profile = item.content.substr(0, 25) + '...';
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
            self.$apply();
          }
        });
      },
      'skiparticlepage': function skiparticlepage(item) {
        _wepy2.default.navigateTo({ url: 'articlepage?item=' + JSON.stringify(item) });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return articlelist;
}(_wepy2.default.component);

exports.default = articlelist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVsaXN0LmpzIl0sIm5hbWVzIjpbImFydGljbGVsaXN0IiwicHJvcHMiLCJkYXRhIiwibW92ZXMiLCJldmVudHMiLCJtZXRob2RzIiwidXJsIiwiJGV2ZW50Iiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwiaXRlbSIsInRpbWUiLCJvY2N1cl90aW1lIiwiZGF5IiwiZGF5T2ZZZWFyIiwibW9udGgiLCJvdGhlcmRhdGEiLCJ3ZWVrWWVhciIsInByb2ZpbGUiLCJjb250ZW50Iiwic3Vic3RyIiwiJGFwcGx5IiwibmF2aWdhdGVUbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBR1BDLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSLG1CQUFhLGtCQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDNUIsWUFBSUMsWUFBSjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLHdDQUFaO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYLGlCQUFPTCxHQURJO0FBRVgscUJBQVcsaUJBQVVKLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsbUNBQWlCQSxLQUFLQSxJQUFMLENBQVVBLElBQTNCLDhIQUFpQztBQUFBLG9CQUF4QlUsSUFBd0I7O0FBQy9CLG9CQUFJQyxPQUFPLHNCQUFPRCxLQUFLRSxVQUFaLENBQVg7QUFDQUYscUJBQUtHLEdBQUwsR0FBV0YsS0FBS0csU0FBTCxFQUFYO0FBQ0FQLHdCQUFRQyxHQUFSLENBQVlHLEtBQUtJLEtBQUwsRUFBWjtBQUNBTCxxQkFBS00sU0FBTCxHQUFpQkwsS0FBS00sUUFBTCxLQUFrQixHQUFsQixHQUF3Qk4sS0FBS0ksS0FBTCxFQUF6QztBQUNBTCxxQkFBS1EsT0FBTCxHQUFlUixLQUFLUyxPQUFMLENBQWFDLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsSUFBNkIsS0FBNUM7QUFDRDtBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVF6QmQsaUJBQUtMLEtBQUwsR0FBYUQsS0FBS0EsSUFBTCxDQUFVQSxJQUF2QjtBQUNBTSxpQkFBS2UsTUFBTDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BbEJPO0FBbUJSLHlCQUFtQix5QkFBQ1gsSUFBRCxFQUFVO0FBQzNCLHVCQUFLWSxVQUFMLENBQWdCLEVBQUVsQixLQUFLLHNCQUFzQm1CLEtBQUtDLFNBQUwsQ0FBZWQsSUFBZixDQUE3QixFQUFoQjtBQUNEO0FBckJPLEs7Ozs7RUFSNkIsZUFBS2UsUzs7a0JBQXpCM0IsVyIsImZpbGUiOiJhcnRpY2xlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXJ0aWNsZWxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBtb3ZlczogW11cclxuICAgIH07XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgJ2ctcmVxdWVzdCc6ICh1cmwsICRldmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlbGlzdC5jb21wb25lbnQgbWV0aG9kcyByZXNwb25zZScpXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICd1cmwnOiB1cmwsXHJcbiAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgZGF0YS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgdGltZSA9IG1vbWVudChpdGVtLm9jY3VyX3RpbWUpXHJcbiAgICAgICAgICAgICAgaXRlbS5kYXkgPSB0aW1lLmRheU9mWWVhcigpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGltZS5tb250aCgpKVxyXG4gICAgICAgICAgICAgIGl0ZW0ub3RoZXJkYXRhID0gdGltZS53ZWVrWWVhcigpICsgJy0nICsgdGltZS5tb250aCgpXHJcbiAgICAgICAgICAgICAgaXRlbS5wcm9maWxlID0gaXRlbS5jb250ZW50LnN1YnN0cigwLCAyNSkgKyAnLi4uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYubW92ZXMgPSBkYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgJ3NraXBhcnRpY2xlcGFnZSc6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiAnYXJ0aWNsZXBhZ2U/aXRlbT0nICsgSlNPTi5zdHJpbmdpZnkoaXRlbSkgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==