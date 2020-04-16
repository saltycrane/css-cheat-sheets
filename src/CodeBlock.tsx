import React from "react";

import { spacing } from "./constants";

export let codeBlockCss = `
  #cwcs .code-block {
    border-radius: 0;
    margin: 0;
    padding ${spacing[3]};
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function CodeBlock({ children }: TProps) {
  return <pre className="code-block">{children}</pre>;
}
