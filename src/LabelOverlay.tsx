import React from "react";

import { colors } from "./constants";

export let labelOverlayPageCss = `
  .label-overlay {
    position: relative;
  }
  .label-cntr {
    background-color: ${colors.white};
    color: ${colors.gray600};
    left: 0.5rem;
    padding: 0 0.25rem;
    position: absolute;
    top: calc(-1rem + 1px);
  }
  .label-expl {
    background-color: ${colors.white};
    color: ${colors.blue};
    left: calc(2.5rem + 1px);
    padding: 0 0.25rem;
    position: absolute;
    top: calc(1rem + 2px);
  }
  .label-cont {
    background-color: ${colors.white};
    color: ${colors.gray600};
    left: calc(4.5rem + 2px);
    padding: 0 0.25rem;
    position: absolute;
    top: calc(3rem + 3px);
  }
`;

type TProps = {
  children: React.ReactNode;
  id: string;
};

export default function LabelOverlay({ children, id }: TProps) {
  return (
    <div className="label-overlay">
      {children}
      <div className="label-cntr">{`#container-${id}`}</div>
      <div className="label-expl">{`#example-${id}`}</div>
      <div className="label-cont">content</div>
    </div>
  );
}
