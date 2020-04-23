import React from "react";

import CodeBlock from "./CodeBlock";
import CodeRow from "./CodeRow";
import LabelOverlay from "./LabelOverlay";
import Spacer from "./Spacer";
import { colors } from "./constants";
import dedent from "./dedent";

export let widthExamplePageCss = `
  .cntr {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray400};
    padding: 20px;
    height: 160px;
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
    padding: 20px;
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

export default function WidthExample(props: TProps) {
  let { dedentSpaces = 8, id } = props;
  let containerCss = `#container-${id} {${dedent(
    props.containerCss,
    dedentSpaces
  )}}`;
  let exampleCss = `#example-${id} {${dedent(props.exampleCss, dedentSpaces)}}`;
  let markup = `<div id="container-${id}">
  <div id="example-${id}">
    <div class="content" />
  </div>
</div>`;

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
      <CodeBlock label="HTML" width={600}>
        {markup}
      </CodeBlock>
      <Spacer y={3} />
      <CodeRow>
        <CodeBlock label="CSS">{containerCss}</CodeBlock>
        <CodeBlock label="CSS">{exampleCss}</CodeBlock>
      </CodeRow>
      <Spacer y={5} />
    </div>
  );
}
