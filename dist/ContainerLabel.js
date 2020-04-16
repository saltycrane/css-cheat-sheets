"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function ContainerLabel(_a) {
    var label = _a.label;
    return (react_1["default"].createElement("div", { style: {
            backgroundColor: "white",
            color: "#999",
            margin: "0 0 -1rem 0.5rem",
            zIndex: 1
        } }, label));
}
exports["default"] = ContainerLabel;
