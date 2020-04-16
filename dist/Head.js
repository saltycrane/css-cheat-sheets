"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var pageCss = "\n  a.external {\n    background-position: center right;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23337ab7%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%23337ab7%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E\");\n    padding-right: 15px;\n  }\n  #ts-cs a {\n    color: #337ab7;\n  }\n  #ts-cs a:visited {\n    color: #002540;\n  }\n  #ts-cs li {\n    overflow-wrap: break-word;\n  }\n  #ts-cs ul ul li {\n   list-style-type: circle;\n  }\n  #ts-cs ul li {\n   list-style-type: disc;\n  }\n";
var Head = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        true && (react_1["default"].createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css", integrity: "sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7", crossOrigin: "anonymous" })),
        react_1["default"].createElement("style", { dangerouslySetInnerHTML: { __html: pageCss } })));
};
exports["default"] = Head;
