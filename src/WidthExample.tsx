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
  }
  .expl {
    background-color: ${colors.white};
    border: 1px solid ${colors.blue};
    padding: 20px;
  }
`;

type TProps = {
  containerCss: string;
  contentCss: string;
  dedentSpaces?: number;
  description?: React.ReactNode;
  exampleCss: string;
  heading?: React.ReactNode;
  id: string;
};

export default function WidthExample(props: TProps) {
  let { dedentSpaces = 8, id } = props;
  let containerCss = `#container-${id} {${dedent(
    props.containerCss,
    dedentSpaces
  )}}\n`;
  let exampleCss = `#example-${id} {${dedent(
    props.exampleCss,
    dedentSpaces
  )}}\n`;
  let contentCss = `#content-${id} {${dedent(props.contentCss, dedentSpaces)}}`;
  // NOTE: trailing whitespace is used for adding right padding
  let markup = `<div id="container-${id}">
  <div id="example-${id}">
    <div id="content-${id}" />  
  </div>
</div>`;

  return (
    <div>
      {props.description && (
        <>
          <div id={id}>
            {props.heading && (
              <>
                <b>{props.heading}</b> -
              </>
            )}{" "}
            {props.description}
          </div>
          <Spacer y={4} />
        </>
      )}
      <LabelOverlay id={id}>
        <style
          dangerouslySetInnerHTML={{
            __html: `${containerCss}${exampleCss}${contentCss}`,
          }}
        />
        <div className="cntr" id={`container-${id}`}>
          <div className="expl" id={`example-${id}`}>
            <div className="cont" id={`content-${id}`} />
          </div>
        </div>
      </LabelOverlay>
      <Spacer y={3} />
      <CodeRow>
        <CodeBlock label="HTML">{markup}</CodeBlock>
        <CodeBlock label="CSS">
          {containerCss}
          {exampleCss}
          {contentCss}
        </CodeBlock>
      </CodeRow>
      <Spacer y={5} />
    </div>
  );
}
