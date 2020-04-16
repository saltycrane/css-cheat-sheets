"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
function Spacer(_a) {
    var y = _a.y;
    return react_1["default"].createElement("div", { style: { height: constants_1.spacing[y] } });
}
exports["default"] = Spacer;
