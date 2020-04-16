import React from "react";

import CodeBlock from "./CodeBlock";
import LabelOverlay from "./LabelOverlay";
import Row from "./Row";
import Spacer from "./Spacer";
import { colors } from "./constants";
import dedent from "./dedent";

export let examplePageCss = `
  .cntr {
    border: 1px solid ${colors.gray400};
    padding: 2rem;
  }
  .cont {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray400};
    display: block;
    height: 60px;
    width: 120px;
  }
  .expl {
    border: 1px solid ${colors.blue};
    padding: 2rem;
  }
`;

type TProps = {
  containerCss: string;
  dedentSpaces?: number;
  description: React.ReactNode;
  exampleCss: string;
  heading: React.ReactNode;
  id: string;
};

export default function Example(props: TProps) {
  let { dedentSpaces = 8, id } = props;
  let containerCss = `#container-${id} {${dedent(
    props.containerCss,
    dedentSpaces,
  )}}`;
  let exampleCss = `#example-${id} {${dedent(props.exampleCss, dedentSpaces)}}`;

  return (
    <div>
      <div>
        <b id={id}>{props.heading}</b> - {props.description}
      </div>
      <Spacer y={4} />
      <LabelOverlay id={id}>
        <style
          dangerouslySetInnerHTML={{
            __html: `${containerCss}\n${exampleCss}`,
          }}
        />
        <div className="cntr" id={`container-${id}`}>
          <div className="expl" id={`example-${id}`}>
            <div className="cont" />
          </div>
        </div>
      </LabelOverlay>
      <Spacer y={3} />
      <Row>
        <CodeBlock>{containerCss}</CodeBlock>
        <CodeBlock>{exampleCss}</CodeBlock>
      </Row>
      <Spacer y={5} />
    </div>
  );
}
