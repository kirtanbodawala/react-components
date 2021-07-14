"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Textarea = props => {
  // eslint-disable-next-line react/prop-types
  const {
    text
  } = props;
  return /*#__PURE__*/_react.default.createElement("textarea", null, text);
};

var _default = Textarea;
exports.default = _default;