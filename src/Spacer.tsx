import React from "react";

import { spacing } from "./constants";
import { TSize } from "./types";

type TProps = {
  x?: TSize;
  y?: TSize;
};

export default function Spacer({ x, y }: TProps) {
  let style: React.CSSProperties = {};
  if (x) {
    style.minWidth = spacing[x];
    style.width = spacing[x];
  }
  if (y) {
    style.height = spacing[y];
    style.minHeight = spacing[y];
  }
  return <div style={style} />;
}
