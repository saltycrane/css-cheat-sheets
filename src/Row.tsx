import React from "react";

export let rowCss = `
  #cwcs .code-row {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    width: 600px;
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function Row({ children }: TProps) {
  return <div className="code-row">{children}</div>;
}
