"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  // eslint-disable-next-line react/prop-types
  const {
    onClick,
    name
  } = props;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    onClick: onClick
  }, ' ', name);
};

var _default = Button;
exports.default = _default;