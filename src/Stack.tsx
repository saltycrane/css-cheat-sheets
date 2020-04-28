import React from "react";

export let stackCss = `
  #cwcs .stack {
    display: grid;
    grid-gap: 10px;
    justify-items: start;
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function Stack({ children }: TProps) {
  return <div className="stack">{children}</div>;
}
