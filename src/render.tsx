import * as fs from "fs";
import * as path from "path";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

import CssWidthCheatSheet from "./CssWidthCheatSheet";

render();

function render() {
  let outputFile = "./output.html";
  let html = ReactDOMServer.renderToStaticMarkup(<CssWidthCheatSheet />);
  let prettyHtml = prettier.format(html, { parser: "html" });
  makeRequiredDir(outputFile);
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

export function makeRequiredDir(filepath: string) {
  let dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
