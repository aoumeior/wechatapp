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
                item.day = time.format('D');
                console.log(item.day);
                item.otherdata = time.weekYear() + '-' + time.format('M');
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
      'skiparticlepage': function skiparticlepage(id) {
        console.log(id);
        _wepy2.default.navigateTo({ url: 'articlepage?id=' + id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return articlelist;
}(_wepy2.default.component);

exports.default = articlelist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVsaXN0LmpzIl0sIm5hbWVzIjpbImFydGljbGVsaXN0IiwicHJvcHMiLCJkYXRhIiwibW92ZXMiLCJldmVudHMiLCJtZXRob2RzIiwidXJsIiwiJGV2ZW50Iiwic2VsZiIsInJlcXVlc3QiLCJpdGVtIiwidGltZSIsIm9jY3VyX3RpbWUiLCJkYXkiLCJmb3JtYXQiLCJjb25zb2xlIiwibG9nIiwib3RoZXJkYXRhIiwid2Vla1llYXIiLCJwcm9maWxlIiwiY29udGVudCIsInN1YnN0ciIsIiRhcHBseSIsImlkIiwibmF2aWdhdGVUbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFHUEMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBQ1IsbUJBQWEsa0JBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM1QixZQUFJQyxZQUFKO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYLGlCQUFPSCxHQURJO0FBRVgscUJBQVcsaUJBQVVKLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsbUNBQWlCQSxLQUFLQSxJQUFMLENBQVVBLElBQTNCLDhIQUFpQztBQUFBLG9CQUF4QlEsSUFBd0I7O0FBQy9CLG9CQUFJQyxPQUFPLHNCQUFPRCxLQUFLRSxVQUFaLENBQVg7QUFDQUYscUJBQUtHLEdBQUwsR0FBV0YsS0FBS0csTUFBTCxDQUFZLEdBQVosQ0FBWDtBQUNBQyx3QkFBUUMsR0FBUixDQUFZTixLQUFLRyxHQUFqQjtBQUNBSCxxQkFBS08sU0FBTCxHQUFpQk4sS0FBS08sUUFBTCxLQUFrQixHQUFsQixHQUF3QlAsS0FBS0csTUFBTCxDQUFZLEdBQVosQ0FBekM7QUFDQUoscUJBQUtTLE9BQUwsR0FBZVQsS0FBS1UsT0FBTCxDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCLEVBQXZCLElBQTZCLEtBQTVDO0FBQ0Q7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRekJiLGlCQUFLTCxLQUFMLEdBQWFELEtBQUtBLElBQUwsQ0FBVUEsSUFBdkI7QUFDQU0saUJBQUtjLE1BQUw7QUFDRDtBQVpVLFNBQWI7QUFjRCxPQWpCTztBQWtCUix5QkFBbUIseUJBQUNDLEVBQUQsRUFBUTtBQUN6QlIsZ0JBQVFDLEdBQVIsQ0FBWU8sRUFBWjtBQUNBLHVCQUFLQyxVQUFMLENBQWdCLEVBQUVsQixLQUFLLG9CQUFvQmlCLEVBQTNCLEVBQWhCO0FBQ0Q7QUFyQk8sSzs7OztFQVI2QixlQUFLRSxTOztrQkFBekJ6QixXIiwiZmlsZSI6ImFydGljbGVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcnRpY2xlbGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG1vdmVzOiBbXVxyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHtcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICd1cmwnOiB1cmwsXHJcbiAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgZGF0YS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgdGltZSA9IG1vbWVudChpdGVtLm9jY3VyX3RpbWUpXHJcbiAgICAgICAgICAgICAgaXRlbS5kYXkgPSB0aW1lLmZvcm1hdCgnRCcpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5kYXkpXHJcbiAgICAgICAgICAgICAgaXRlbS5vdGhlcmRhdGEgPSB0aW1lLndlZWtZZWFyKCkgKyAnLScgKyB0aW1lLmZvcm1hdCgnTScpXHJcbiAgICAgICAgICAgICAgaXRlbS5wcm9maWxlID0gaXRlbS5jb250ZW50LnN1YnN0cigwLCAyNSkgKyAnLi4uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYubW92ZXMgPSBkYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgJ3NraXBhcnRpY2xlcGFnZSc6IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ2FydGljbGVwYWdlP2lkPScgKyBpZCB9KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuIl19