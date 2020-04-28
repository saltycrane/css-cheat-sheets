import React from "react";

export let flexRowCss = `
  #cwcs .flex-row {
    align-items: flex-start;
    display: flex;
  }
`;

type TProps = {
  children?: React.ReactNode;
};

export default function FlexRow({ children }: TProps) {
  return <div className="flex-row">{children}</div>;
}
