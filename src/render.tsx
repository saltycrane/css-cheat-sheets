import * as fs from "fs";
import * as path from "path";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

export default async function render(
  RootElement: React.ReactElement,
  outputFile: string,
) {
  let html = ReactDOMServer.renderToStaticMarkup(RootElement);
  let prettyHtml = await prettier.format(html, { parser: "html" });
  makeRequiredDir(outputFile);
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

function makeRequiredDir(filepath: string) {
  let dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
