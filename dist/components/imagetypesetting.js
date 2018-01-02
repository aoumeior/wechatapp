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

var imagetypesetting = function (_wepy$component) {
  _inherits(imagetypesetting, _wepy$component);

  function imagetypesetting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, imagetypesetting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = imagetypesetting.__proto__ || Object.getPrototypeOf(imagetypesetting)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = { 'movies': [{ a: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg', b: '桂林山水' }, { a: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg', b: '黄山美景' }, { a: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg', b: '西湖岸边' }, { a: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg', b: '夕阳西下' }]
    }, _this.methods = {
      'g-request': function gRequest(url, $event) {
        var self = _this;
        console.log('imagetypesetting.component methods response');
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return imagetypesetting;
}(_wepy2.default.component);

exports.default = imagetypesetting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdldHlwZXNldHRpbmcuanMiXSwibmFtZXMiOlsiaW1hZ2V0eXBlc2V0dGluZyIsInByb3BzIiwiZGF0YSIsImEiLCJiIiwibWV0aG9kcyIsInVybCIsIiRldmVudCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIml0ZW0iLCJ0aW1lIiwib2NjdXJfdGltZSIsImRheSIsImRheU9mWWVhciIsIm1vbnRoIiwib3RoZXJkYXRhIiwid2Vla1llYXIiLCJwcm9maWxlIiwiY29udGVudCIsInN1YnN0ciIsIm1vdmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU8sRUFBQyxVQUFVLENBQUUsRUFBQ0MsR0FBRywrREFBSixFQUFxRUMsR0FBRyxNQUF4RSxFQUFGLEVBQ2hCLEVBQUNELEdBQUcsK0RBQUosRUFBcUVDLEdBQUcsTUFBeEUsRUFEZ0IsRUFFaEIsRUFBQ0QsR0FBRywrREFBSixFQUFxRUMsR0FBRyxNQUF4RSxFQUZnQixFQUdoQixFQUFDRCxHQUFHLDZEQUFKLEVBQW1FQyxHQUFHLE1BQXRFLEVBSGdCO0FBQVgsSyxRQUtQQyxPLEdBQVU7QUFDUixtQkFBYSxrQkFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQzVCLFlBQUlDLFlBQUo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSw2Q0FBWjtBQUNBLHVCQUFLQyxPQUFMLENBQWE7QUFDWCxpQkFBT0wsR0FESTtBQUVYLHFCQUFXLGlCQUFVSixJQUFWLEVBQWdCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pCLG1DQUFpQkEsS0FBS0EsSUFBTCxDQUFVQSxJQUEzQiw4SEFBaUM7QUFBQSxvQkFBeEJVLElBQXdCOztBQUMvQixvQkFBSUMsT0FBTyxzQkFBT0QsS0FBS0UsVUFBWixDQUFYO0FBQ0FGLHFCQUFLRyxHQUFMLEdBQVdGLEtBQUtHLFNBQUwsRUFBWDtBQUNBUCx3QkFBUUMsR0FBUixDQUFZRyxLQUFLSSxLQUFMLEVBQVo7QUFDQUwscUJBQUtNLFNBQUwsR0FBaUJMLEtBQUtNLFFBQUwsS0FBa0IsR0FBbEIsR0FBd0JOLEtBQUtJLEtBQUwsRUFBekM7QUFDQUwscUJBQUtRLE9BQUwsR0FBZVIsS0FBS1MsT0FBTCxDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCLEVBQXZCLElBQTZCLEtBQTVDO0FBQ0Q7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRekJkLGlCQUFLZSxLQUFMLEdBQWFyQixLQUFLQSxJQUFMLENBQVVBLElBQXZCO0FBQ0FNLGlCQUFLZ0IsTUFBTDtBQUNEO0FBWlUsU0FBYjtBQWNEO0FBbEJPLEs7Ozs7RUFSa0MsZUFBS0MsUzs7a0JBQTlCekIsZ0IiLCJmaWxlIjoiaW1hZ2V0eXBlc2V0dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdldHlwZXNldHRpbmcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7J21vdmllcyc6IFsge2E6ICdodHRwOi8vaW1nMDQudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTMwNzEyL3Rvb29wZW5fMTcyNzA3MTMuanBnJywgYjogJ+ahguael+WxseawtCd9LFxyXG4gICAgICB7YTogJ2h0dHA6Ly9pbWcwNC50b29vcGVuLmNvbS9pbWFnZXMvMjAxMzA2MTcvdG9vb3Blbl8yMTI0MTQwNC5qcGcnLCBiOiAn6buE5bGx576O5pmvJ30sXHJcbiAgICAgIHthOiAnaHR0cDovL2ltZzA0LnRvb29wZW4uY29tL2ltYWdlcy8yMDEzMDcwMS90b29vcGVuXzIwMDgzNTU1LmpwZycsIGI6ICfopb/muZblsrjovrknfSxcclxuICAgICAge2E6ICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTQxMjMxL3N5Xzc4MzI3MDc0NTc2LmpwZycsIGI6ICflpJXpmLPopb/kuIsnfV1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICdnLXJlcXVlc3QnOiAodXJsLCAkZXZlbnQpID0+IHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2V0eXBlc2V0dGluZy5jb21wb25lbnQgbWV0aG9kcyByZXNwb25zZScpXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICd1cmwnOiB1cmwsXHJcbiAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgZGF0YS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgdGltZSA9IG1vbWVudChpdGVtLm9jY3VyX3RpbWUpXHJcbiAgICAgICAgICAgICAgaXRlbS5kYXkgPSB0aW1lLmRheU9mWWVhcigpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGltZS5tb250aCgpKVxyXG4gICAgICAgICAgICAgIGl0ZW0ub3RoZXJkYXRhID0gdGltZS53ZWVrWWVhcigpICsgJy0nICsgdGltZS5tb250aCgpXHJcbiAgICAgICAgICAgICAgaXRlbS5wcm9maWxlID0gaXRlbS5jb250ZW50LnN1YnN0cigwLCAyNSkgKyAnLi4uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYubW92ZXMgPSBkYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19