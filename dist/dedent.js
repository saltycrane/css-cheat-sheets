"use strict";
exports.__esModule = true;
function dedent(text, spaces) {
    var lines = text.split("\n");
    return lines.map(function (line) { return line.slice(spaces); }).join("\n");
}
exports["default"] = dedent;
