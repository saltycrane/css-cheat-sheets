"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
function Spacer(_a) {
    var x = _a.x, y = _a.y;
    var style = {};
    if (x) {
        style.minWidth = constants_1.spacing[x];
        style.width = constants_1.spacing[x];
    }
    if (y) {
        style.height = constants_1.spacing[y];
        style.minHeight = constants_1.spacing[y];
    }
    return react_1["default"].createElement("div", { style: style });
}
exports["default"] = Spacer;
