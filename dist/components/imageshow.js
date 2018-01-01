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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return imageshow;
}(_wepy2.default.component);

exports.default = imageshow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2hvdy5qcyJdLCJuYW1lcyI6WyJpbWFnZXNob3ciLCJwcm9wcyIsImRhdGEiLCJtZXRob2RzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU0sRUFBQyxVQUFVLENBQUUsK0RBQUYsRUFDZiwrREFEZSxFQUVmLCtEQUZlLEVBR2YsNkRBSGU7QUFBWCxLLFFBS05DLE8sR0FBVSxFOzs7O0VBUjJCLGVBQUtDLFM7O2tCQUF2QkosUyIsImZpbGUiOiJpbWFnZXNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdlc2hvdyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfVxyXG4gICAgZGF0YSA9eydtb3ZpZXMnOiBbICdodHRwOi8vaW1nMDQudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTMwNzEyL3Rvb29wZW5fMTcyNzA3MTMuanBnJyxcclxuICAgICAgJ2h0dHA6Ly9pbWcwNC50b29vcGVuLmNvbS9pbWFnZXMvMjAxMzA2MTcvdG9vb3Blbl8yMTI0MTQwNC5qcGcnLFxyXG4gICAgICAnaHR0cDovL2ltZzA0LnRvb29wZW4uY29tL2ltYWdlcy8yMDEzMDcwMS90b29vcGVuXzIwMDgzNTU1LmpwZycsXHJcbiAgICAgICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTQxMjMxL3N5Xzc4MzI3MDc0NTc2LmpwZyddXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG4gIH1cclxuIl19