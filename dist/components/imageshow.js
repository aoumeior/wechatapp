'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageshow = function (_wepy$component) {
  _inherits(imageshow, _wepy$component);

  function imageshow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, imageshow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = imageshow.__proto__ || Object.getPrototypeOf(imageshow)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = { 'movies': ['http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg', 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg', 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg', 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg']
    }, _this.methods = {
      'g-request': function gRequest(url) {
        var self = _this;
        console.log('articlelist.component methods response');
        wx.request({
          url: url,
          success: function success(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                console.log(item);
                var time = moment(item.occur_time);
                item.day = time.dayOfYear();
                item.otherdata = time.weekYear() + '-' + time.month();
                item.profile = item.content.substr(0, 40) + '...';
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

  return imageshow;
}(_wepy2.default.component);

exports.default = imageshow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2hvdy5qcyJdLCJuYW1lcyI6WyJpbWFnZXNob3ciLCJwcm9wcyIsImRhdGEiLCJtZXRob2RzIiwidXJsIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlcXVlc3QiLCJzdWNjZXNzIiwiaXRlbSIsInRpbWUiLCJtb21lbnQiLCJvY2N1cl90aW1lIiwiZGF5IiwiZGF5T2ZZZWFyIiwib3RoZXJkYXRhIiwid2Vla1llYXIiLCJtb250aCIsInByb2ZpbGUiLCJjb250ZW50Iiwic3Vic3RyIiwibW92ZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTSxFQUFDLFVBQVUsQ0FBRSwrREFBRixFQUNmLCtEQURlLEVBRWYsK0RBRmUsRUFHZiw2REFIZTtBQUFYLEssUUFLTkMsTyxHQUFVO0FBQ1IsbUJBQWEsa0JBQUNDLEdBQUQsRUFBUztBQUNwQixZQUFJQyxZQUFKO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQUMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RMLGVBQUtBLEdBREk7QUFFVE0sbUJBQVMsaUJBQVVSLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDdkIsbUNBQWdCQSxLQUFLQSxJQUFMLENBQVVBLElBQTFCLDhIQUErQjtBQUFBLG9CQUF2QlMsSUFBdUI7O0FBQzdCTCx3QkFBUUMsR0FBUixDQUFZSSxJQUFaO0FBQ0Esb0JBQUlDLE9BQU9DLE9BQU9GLEtBQUtHLFVBQVosQ0FBWDtBQUNBSCxxQkFBS0ksR0FBTCxHQUFXSCxLQUFLSSxTQUFMLEVBQVg7QUFDQUwscUJBQUtNLFNBQUwsR0FBaUJMLEtBQUtNLFFBQUwsS0FBa0IsR0FBbEIsR0FBd0JOLEtBQUtPLEtBQUwsRUFBekM7QUFDQVIscUJBQUtTLE9BQUwsR0FBZVQsS0FBS1UsT0FBTCxDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCLEVBQXZCLElBQTZCLEtBQTVDO0FBQ0FoQix3QkFBUUMsR0FBUixDQUFZSSxJQUFaO0FBQ0Q7QUFSc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTdkJOLGlCQUFLa0IsS0FBTCxHQUFhckIsS0FBS0EsSUFBTCxDQUFVQSxJQUF2QjtBQUNBSSxvQkFBUUMsR0FBUixDQUFZRixLQUFLa0IsS0FBakI7QUFDQWxCLGlCQUFLbUIsTUFBTDtBQUNEO0FBZFEsU0FBWDtBQWdCRDtBQXBCTyxLOzs7O0VBUjJCLGVBQUtDLFM7O2tCQUF2QnpCLFMiLCJmaWxlIjoiaW1hZ2VzaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdlc2hvdyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfVxyXG4gICAgZGF0YSA9eydtb3ZpZXMnOiBbICdodHRwOi8vaW1nMDQudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTMwNzEyL3Rvb29wZW5fMTcyNzA3MTMuanBnJyxcclxuICAgICAgJ2h0dHA6Ly9pbWcwNC50b29vcGVuLmNvbS9pbWFnZXMvMjAxMzA2MTcvdG9vb3Blbl8yMTI0MTQwNC5qcGcnLFxyXG4gICAgICAnaHR0cDovL2ltZzA0LnRvb29wZW4uY29tL2ltYWdlcy8yMDEzMDcwMS90b29vcGVuXzIwMDgzNTU1LmpwZycsXHJcbiAgICAgICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTQxMjMxL3N5Xzc4MzI3MDc0NTc2LmpwZyddXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCkgPT4ge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZWxpc3QuY29tcG9uZW50IG1ldGhvZHMgcmVzcG9uc2UnKVxyXG4gICAgICAgIHd4LnJlcXVlc3QoeyAgICBcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpdGVtIG9mIGRhdGEuZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICB2YXIgdGltZSA9IG1vbWVudChpdGVtLm9jY3VyX3RpbWUpXHJcbiAgICAgICAgICAgICAgaXRlbS5kYXkgPSB0aW1lLmRheU9mWWVhcigpXHJcbiAgICAgICAgICAgICAgaXRlbS5vdGhlcmRhdGEgPSB0aW1lLndlZWtZZWFyKCkgKyAnLScgKyB0aW1lLm1vbnRoKClcclxuICAgICAgICAgICAgICBpdGVtLnByb2ZpbGUgPSBpdGVtLmNvbnRlbnQuc3Vic3RyKDAsIDQwKSArICcuLi4nXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5tb3ZlcyA9IGRhdGEuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYubW92ZXMpXHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==