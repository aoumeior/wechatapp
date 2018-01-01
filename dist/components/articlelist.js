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

                var time = (0, _moment2.default)(item.occur_time);
                item.day = time.dayOfYear();
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
        wx.navigateTo({ url: 'articlepage?item=' + JSON.stringify(item) });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return articlelist;
}(_wepy2.default.component);

exports.default = articlelist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVsaXN0LmpzIl0sIm5hbWVzIjpbImFydGljbGVsaXN0IiwicHJvcHMiLCJkYXRhIiwibW92ZXMiLCJldmVudHMiLCJtZXRob2RzIiwidXJsIiwiJGV2ZW50Iiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlcXVlc3QiLCJpdGVtIiwidGltZSIsIm9jY3VyX3RpbWUiLCJkYXkiLCJkYXlPZlllYXIiLCJvdGhlcmRhdGEiLCJ3ZWVrWWVhciIsIm1vbnRoIiwicHJvZmlsZSIsImNvbnRlbnQiLCJzdWJzdHIiLCIkYXBwbHkiLCJuYXZpZ2F0ZVRvIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU87QUFDSEMsYUFBTztBQURKLEssUUFHUEMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBQ1IsbUJBQWEsa0JBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM1QixZQUFJQyxZQUFKO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1QsaUJBQU9OLEdBREU7QUFFVCxxQkFBVyxpQkFBVUosSUFBVixFQUFnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN6QixtQ0FBZ0JBLEtBQUtBLElBQUwsQ0FBVUEsSUFBMUIsOEhBQStCO0FBQUEsb0JBQXZCVyxJQUF1Qjs7QUFDN0Isb0JBQUlDLE9BQU8sc0JBQU9ELEtBQUtFLFVBQVosQ0FBWDtBQUNBRixxQkFBS0csR0FBTCxHQUFXRixLQUFLRyxTQUFMLEVBQVg7QUFDQUoscUJBQUtLLFNBQUwsR0FBaUJKLEtBQUtLLFFBQUwsS0FBa0IsR0FBbEIsR0FBd0JMLEtBQUtNLEtBQUwsRUFBekM7QUFDQVAscUJBQUtRLE9BQUwsR0FBZVIsS0FBS1MsT0FBTCxDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCLEVBQXZCLElBQTZCLEtBQTVDO0FBQ0Q7QUFOd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPekJmLGlCQUFLTCxLQUFMLEdBQWFELEtBQUtBLElBQUwsQ0FBVUEsSUFBdkI7QUFDQU0saUJBQUtnQixNQUFMO0FBQ0Q7QUFYUSxTQUFYO0FBYUQsT0FqQk87QUFrQlIseUJBQW1CLHlCQUFDWCxJQUFELEVBQVU7QUFDekJGLFdBQUdjLFVBQUgsQ0FBYyxFQUFFbkIsS0FBSyxzQkFBc0JvQixLQUFLQyxTQUFMLENBQWVkLElBQWYsQ0FBN0IsRUFBZDtBQUNIO0FBcEJPLEs7Ozs7RUFSNkIsZUFBS2UsUzs7a0JBQXpCNUIsVyIsImZpbGUiOiJhcnRpY2xlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXJ0aWNsZWxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG1vdmVzOiBbXVxyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHtcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlbGlzdC5jb21wb25lbnQgbWV0aG9kcyByZXNwb25zZScpXHJcbiAgICAgICAgd3gucmVxdWVzdCh7ICAgIFxyXG4gICAgICAgICAgJ3VybCc6IHVybCxcclxuICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpdGVtIG9mIGRhdGEuZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICB2YXIgdGltZSA9IG1vbWVudChpdGVtLm9jY3VyX3RpbWUpXHJcbiAgICAgICAgICAgICAgaXRlbS5kYXkgPSB0aW1lLmRheU9mWWVhcigpXHJcbiAgICAgICAgICAgICAgaXRlbS5vdGhlcmRhdGEgPSB0aW1lLndlZWtZZWFyKCkgKyAnLScgKyB0aW1lLm1vbnRoKClcclxuICAgICAgICAgICAgICBpdGVtLnByb2ZpbGUgPSBpdGVtLmNvbnRlbnQuc3Vic3RyKDAsIDI1KSArICcuLi4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5tb3ZlcyA9IGRhdGEuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgJ3NraXBhcnRpY2xlcGFnZSc6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnYXJ0aWNsZXBhZ2U/aXRlbT0nICsgSlNPTi5zdHJpbmdpZnkoaXRlbSl9KVxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG4iXX0=