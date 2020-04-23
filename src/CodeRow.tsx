import React from "react";

export let codeRowCss = `
  #cwcs .code-row {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    width: 600px;
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function CodeRow({ children }: TProps) {
  return <div className="code-row">{children}</div>;
}
