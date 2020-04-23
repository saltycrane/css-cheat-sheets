"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var prettier_1 = __importDefault(require("prettier"));
var server_1 = __importDefault(require("react-dom/server"));
function render(RootElement, outputFile) {
    var html = server_1["default"].renderToStaticMarkup(RootElement);
    var prettyHtml = prettier_1["default"].format(html, { parser: "html" });
    makeRequiredDir(outputFile);
    fs.writeFileSync(outputFile, prettyHtml);
    console.log("Wrote " + outputFile);
}
exports["default"] = render;
function makeRequiredDir(filepath) {
    var dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
