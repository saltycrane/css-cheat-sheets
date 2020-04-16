"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
exports.codeBlockCss = "\n  #cwcs .code-block {\n    border-radius: 0;\n    margin: 0;\n    padding " + constants_1.spacing[3] + ";\n  }\n";
function CodeBlock(_a) {
    var children = _a.children;
    return react_1["default"].createElement("pre", { className: "code-block" }, children);
}
exports["default"] = CodeBlock;
