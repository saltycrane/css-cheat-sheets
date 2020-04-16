import React from "react";

import { spacing } from "./constants";
import { TSize } from "./types";

type TProps = {
  y: TSize;
};

export default function Spacer({ y }: TProps) {
  return <div style={{ height: spacing[y] }} />;
}
