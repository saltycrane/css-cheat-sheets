import React from "react";

import CodeBlock, { codeBlockCss } from "./CodeBlock";
import ExampleTO from "./ExampleTO";
import { flexRowCss } from "./FlexRow";
import { labelOverlayPageCss } from "./LabelOverlay";
import Spacer from "./Spacer";
import Stack, { stackCss } from "./Stack";
import dedent from "./dedent";

export default function CssTextOrientationCheatSheet() {
  let miscCss = `
    #cwcs a {
      border-bottom: 1px dotted;
    }
    #cwcs ul {
      margin-left: 10px;
    }
  `;
  let sharedExampleCss = `  .ex {
      border: 1px solid #ccc;
      height: 120px;
      padding: 5px;
      width: 120px;
  }`;
  let pageCss =
    miscCss +
    `#cwcs ${sharedExampleCss}` +
    codeBlockCss +
    flexRowCss +
    labelOverlayPageCss +
    stackCss;

  let WRITING_MODES = ["horizontal-tb", "vertical-rl", "vertical-lr"];
  let TEXT_ORIENTATIONS = [
    "mixed",
    "upright",
    // "sideways-right",
    // "sideways",
    // "use-glyph-orientation",
  ];

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let results = WRITING_MODES.map((writingMode, i) => {
    return TEXT_ORIENTATIONS.map((textOrientation, j) => {
      return (
        <ExampleTO
          heading={`${writingMode}, ${textOrientation}`}
          id={`${i}${alphabet[j]}`}
          dedentSpaces={10}
          exampleCss={`
            writing-mode: ${writingMode};
            text-orientation: ${textOrientation};
          `}
        />
      );
    });
  });

  return (
    <div id="cwcs">
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      <h4>Shared CSS</h4>
      <Stack>
        <CodeBlock label="CSS">{`${dedent(sharedExampleCss, 2)}\n`}</CodeBlock>
      </Stack>
      <Spacer y={4} />

      <h4>
        Examples of permutations of <code>writing-mode</code> and{" "}
        <code>text-orientation</code>
      </h4>
      {results}
    </div>
  );
}
