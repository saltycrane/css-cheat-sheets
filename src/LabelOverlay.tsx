import React from "react";

import { colors } from "./constants";

export let labelOverlayPageCss = `
  .label-overlay {
    position: relative;
  }
  .label-cntr {
    background-color: ${colors.white};
    color: ${colors.gray600};
    left: 5px;
    padding: 0 2.5px;
    position: absolute;
    top: -11px;
  }
  .label-expl {
    background-color: ${colors.white};
    color: ${colors.blue};
    left: 26px;
    padding: 0 2.5px;
    position: absolute;
    top: 11px;
  }
  .label-cont {
    background-color: ${colors.white};
    color: ${colors.gray600};
    left: 47px;
    padding: 0 2.5px;
    position: absolute;
    top: 31px;
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
      <div className="label-cont">{`#content-${id}`}</div>
    </div>
  );
}
