import React from "react";

import { spacing } from "./constants";

export let htmlCodeBlockCss = `
  #cwcs .html-code-row {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    width: 600px;
  }
  #cwcs .html-code-block {
    border-radius: 0;
    margin: 0;
    padding ${spacing[3]};
  }
`;

type TProps = {
  children: React.ReactNode;
};

export default function HtmlCodeBlock({ children }: TProps) {
  return (
    <div className="html-code-row">
      <pre className="html-code-block">{children}</pre>
    </div>
  );
}
