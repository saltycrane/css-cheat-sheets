"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
exports.htmlCodeBlockCss = "\n  #cwcs .html-code-row {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 1fr;\n    width: 600px;\n  }\n  #cwcs .html-code-block {\n    border-radius: 0;\n    margin: 0;\n    padding " + constants_1.spacing[3] + ";\n  }\n";
function HtmlCodeBlock(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "html-code-row" },
        react_1["default"].createElement("pre", { className: "html-code-block" }, children)));
}
exports["default"] = HtmlCodeBlock;
