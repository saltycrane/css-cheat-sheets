import React from "react";

import { colors, spacing } from "./constants";

export let codeBlockCss = `
  #cwcs .code-block {
    border-radius: 0;
    margin: 0;
    padding: ${spacing[2]} ${spacing[3]};
    position: relative;
  }
  #cwcs .code-label {
    background-color: ${colors.white};
    border-radius: 4px;
    color: ${colors.gray600};
    padding: 2px ${spacing[2]} 0 ${spacing[2]};
    position: absolute;
    right: 4px;
    top: 2px;
  }
`;

type TProps = {
  children: React.ReactNode;
  label?: string;
  width?: number;
};

export default function CodeBlock({ children, label, width }: TProps) {
  const style = width && { width };
  return (
    <pre className="code-block" style={style}>
      <div className="code-label">{label}</div>
      {children}
    </pre>
  );
}
