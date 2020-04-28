import React from "react";

export let codeRowCss = `
  #cwcs .code-row {
    align-items: start;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto 1fr;
    justify-items: start;
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function CodeRow({ children }: TProps) {
  return <div className="code-row">{children}</div>;
}
