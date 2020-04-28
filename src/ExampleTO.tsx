import React from "react";

import CodeBlock from "./CodeBlock";
import FlexRow from "./FlexRow";
import Spacer from "./Spacer";
import Stack from "./Stack";
import dedent from "./dedent";

type TProps = {
  dedentSpaces?: number;
  description?: React.ReactNode;
  exampleCss: string;
  heading?: React.ReactNode;
  id: string;
};

export default function ExampleTO(props: TProps) {
  let { dedentSpaces = 8, id } = props;
  let exampleCss = `#example-${id} {${dedent(
    props.exampleCss,
    dedentSpaces
  )}}\n`;
  let markup = `<div class="ex" id="example-${id}">      
  Some example text
</div>`;

  return (
    <div>
      {(props.heading || props.description) && (
        <>
          <div id={id}>
            {props.heading && <b>{props.heading}</b>}
            {props.heading && props.description && " - "}
            {props.description}
          </div>
          <Spacer y={4} />
        </>
      )}
      <style dangerouslySetInnerHTML={{ __html: `${exampleCss}` }} />
      <FlexRow>
        <div className="ex" id={`example-${id}`}>
          Some example text
        </div>
        <Spacer x={3} />
        <Stack>
          <CodeBlock label="HTML">{markup}</CodeBlock>
          <CodeBlock label="CSS">{exampleCss}</CodeBlock>
        </Stack>
      </FlexRow>
      <Spacer y={5} />
    </div>
  );
}
