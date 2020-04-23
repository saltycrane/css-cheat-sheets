"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var constants_1 = require("./constants");
exports.labelOverlayPageCss = "\n  .label-overlay {\n    position: relative;\n  }\n  .label-cntr {\n    background-color: " + constants_1.colors.white + ";\n    color: " + constants_1.colors.gray600 + ";\n    left: 5px;\n    padding: 0 2.5px;\n    position: absolute;\n    top: -11px;\n  }\n  .label-expl {\n    background-color: " + constants_1.colors.white + ";\n    color: " + constants_1.colors.blue + ";\n    left: 26px;\n    padding: 0 2.5px;\n    position: absolute;\n    top: 11px;\n  }\n  .label-cont {\n    background-color: " + constants_1.colors.white + ";\n    color: " + constants_1.colors.gray600 + ";\n    left: 47px;\n    padding: 0 2.5px;\n    position: absolute;\n    top: 31px;\n  }\n";
function LabelOverlay(_a) {
    var children = _a.children, id = _a.id;
    return (react_1["default"].createElement("div", { className: "label-overlay" },
        children,
        react_1["default"].createElement("div", { className: "label-cntr" }, "#container-" + id),
        react_1["default"].createElement("div", { className: "label-expl" }, "#example-" + id),
        react_1["default"].createElement("div", { className: "label-cont" }, "content")));
}
exports["default"] = LabelOverlay;
