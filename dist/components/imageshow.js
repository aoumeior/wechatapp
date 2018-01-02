'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

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
        _wepy2.default.request({
          url: url,
          success: function success(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                var time = (0, _moment2.default)(item.occur_time);
                item.day = time.dayOfYear();
                item.otherdata = time.weekYear() + '-' + time.month();
                item.profile = item.content.substr(0, 40) + '...';
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return imageshow;
}(_wepy2.default.component);

exports.default = imageshow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2hvdy5qcyJdLCJuYW1lcyI6WyJpbWFnZXNob3ciLCJwcm9wcyIsImRhdGEiLCJtZXRob2RzIiwidXJsIiwic2VsZiIsInJlcXVlc3QiLCJzdWNjZXNzIiwiaXRlbSIsInRpbWUiLCJvY2N1cl90aW1lIiwiZGF5IiwiZGF5T2ZZZWFyIiwib3RoZXJkYXRhIiwid2Vla1llYXIiLCJtb250aCIsInByb2ZpbGUiLCJjb250ZW50Iiwic3Vic3RyIiwibW92ZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFNLEVBQUMsVUFBVSxDQUFFLCtEQUFGLEVBQ2YsK0RBRGUsRUFFZiwrREFGZSxFQUdmLDZEQUhlO0FBQVgsSyxRQUtOQyxPLEdBQVU7QUFDUixtQkFBYSxrQkFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFlBQUlDLFlBQUo7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hGLGVBQUtBLEdBRE07QUFFWEcsbUJBQVMsaUJBQVVMLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDdkIsbUNBQWlCQSxLQUFLQSxJQUFMLENBQVVBLElBQTNCLDhIQUFpQztBQUFBLG9CQUF4Qk0sSUFBd0I7O0FBQy9CLG9CQUFJQyxPQUFPLHNCQUFPRCxLQUFLRSxVQUFaLENBQVg7QUFDQUYscUJBQUtHLEdBQUwsR0FBV0YsS0FBS0csU0FBTCxFQUFYO0FBQ0FKLHFCQUFLSyxTQUFMLEdBQWlCSixLQUFLSyxRQUFMLEtBQWtCLEdBQWxCLEdBQXdCTCxLQUFLTSxLQUFMLEVBQXpDO0FBQ0FQLHFCQUFLUSxPQUFMLEdBQWVSLEtBQUtTLE9BQUwsQ0FBYUMsTUFBYixDQUFvQixDQUFwQixFQUF1QixFQUF2QixJQUE2QixLQUE1QztBQUNEO0FBTnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3ZCYixpQkFBS2MsS0FBTCxHQUFhakIsS0FBS0EsSUFBTCxDQUFVQSxJQUF2QjtBQUNBRyxpQkFBS2UsTUFBTDtBQUNEO0FBWFUsU0FBYjtBQWFEO0FBaEJPLEs7Ozs7RUFSMkIsZUFBS0MsUzs7a0JBQXZCckIsUyIsImZpbGUiOiJpbWFnZXNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1hZ2VzaG93IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICB9XHJcbiAgICBkYXRhID17J21vdmllcyc6IFsgJ2h0dHA6Ly9pbWcwNC50b29vcGVuLmNvbS9pbWFnZXMvMjAxMzA3MTIvdG9vb3Blbl8xNzI3MDcxMy5qcGcnLFxyXG4gICAgICAnaHR0cDovL2ltZzA0LnRvb29wZW4uY29tL2ltYWdlcy8yMDEzMDYxNy90b29vcGVuXzIxMjQxNDA0LmpwZycsXHJcbiAgICAgICdodHRwOi8vaW1nMDQudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTMwNzAxL3Rvb29wZW5fMjAwODM1NTUuanBnJyxcclxuICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNDEyMzEvc3lfNzgzMjcwNzQ1NzYuanBnJ11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICdnLXJlcXVlc3QnOiAodXJsKSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBkYXRhLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgIHZhciB0aW1lID0gbW9tZW50KGl0ZW0ub2NjdXJfdGltZSlcclxuICAgICAgICAgICAgICBpdGVtLmRheSA9IHRpbWUuZGF5T2ZZZWFyKClcclxuICAgICAgICAgICAgICBpdGVtLm90aGVyZGF0YSA9IHRpbWUud2Vla1llYXIoKSArICctJyArIHRpbWUubW9udGgoKVxyXG4gICAgICAgICAgICAgIGl0ZW0ucHJvZmlsZSA9IGl0ZW0uY29udGVudC5zdWJzdHIoMCwgNDApICsgJy4uLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLm1vdmVzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4iXX0=