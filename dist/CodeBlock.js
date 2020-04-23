"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
exports.codeBlockCss = "\n  #cwcs .code-block {\n    border-radius: 0;\n    margin: 0;\n    padding: " + constants_1.spacing[2] + " " + constants_1.spacing[3] + ";\n    position: relative;\n  }\n  #cwcs .code-label {\n    background-color: " + constants_1.colors.white + ";\n    border-radius: 4px;\n    color: " + constants_1.colors.gray600 + ";\n    padding: 2px " + constants_1.spacing[2] + " 0 " + constants_1.spacing[2] + ";\n    position: absolute;\n    right: 4px;\n    top: 2px;\n  }\n";
function CodeBlock(_a) {
    var children = _a.children, label = _a.label, width = _a.width;
    var style = width && { width: width };
    return (react_1["default"].createElement("pre", { className: "code-block", style: style },
        react_1["default"].createElement("div", { className: "code-label" }, label),
        children));
}
exports["default"] = CodeBlock;
