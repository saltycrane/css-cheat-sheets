import React from "react";

import CodeBlock from "./CodeBlock";
import FlexRow from "./FlexRow";
import LabelOverlay, { TableCellLabelOverlay } from "./LabelOverlay";
import Spacer from "./Spacer";
import Stack from "./Stack";
import { colors } from "./constants";
import dedent from "./dedent";

export let heightExamplePageCss = `
  .cntr {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray400};
    padding: 20px;
    width: 200px;
  }
  .cont {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray400};
    display: block;
    height: 20px;
    width: 100px;
  }
  .expl {
    background-color: ${colors.white};
    border: 1px solid ${colors.blue};
    padding: 20px;
  }
  .sibling-tbl-cell {
    padding: 4px 8px;
    vertical-align: top;
    width: 200px;
  }
}
`;

type TProps = {
  containerCss: string;
  contentCss?: string;
  dedentSpaces?: number;
  description: React.ReactNode;
  exampleCss: string;
  heading: React.ReactNode;
  id: string;
  marginBottom?: number;
};

export default function HeightExample(props: TProps) {
  let { dedentSpaces = 8, id, marginBottom } = props;
  let containerCss = `#container-${id} {${dedent(
    props.containerCss,
    dedentSpaces,
  )}}\n`;
  let exampleCss = `#example-${id} {${dedent(
    props.exampleCss,
    dedentSpaces,
  )}}\n`;
  let contentCss =
    props.contentCss &&
    `#content-${id} {${dedent(props.contentCss, dedentSpaces)}}`;
  // NOTE: trailing whitespace is used for adding right padding
  let markup = `<div id="container-${id}">
  <div id="example-${id}">
    <div id="content-${id}" /> 
  </div>
</div>`;

  return (
    <div style={marginBottom && { marginBottom }}>
      <div>
        <b id={id}>{props.heading}</b> - {props.description}
      </div>
      <Spacer y={4} />
      <FlexRow>
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
        <Spacer x={3} />
        <Stack>
          <CodeBlock label="HTML">{markup}</CodeBlock>
          <CodeBlock label="CSS">
            {containerCss}
            {exampleCss}
            {contentCss}
          </CodeBlock>
        </Stack>
      </FlexRow>
      <Spacer y={5} />
    </div>
  );
}

export function TableCellHeightExample(props: TProps) {
  let { dedentSpaces = 8, id, marginBottom } = props;
  let containerCss = `#td-container-${id} {${dedent(
    props.containerCss,
    dedentSpaces,
  )}}\n`;
  let exampleCss = `#example-${id} {${dedent(
    props.exampleCss,
    dedentSpaces,
  )}}\n`;
  let contentCss =
    props.contentCss &&
    `#content-${id} {${dedent(props.contentCss, dedentSpaces)}}`;
  // NOTE: trailing whitespace is used for adding right padding
  let markup = `<div id="td-container-${id}">
  <div id="example-${id}">
    <div id="content-${id}" />
  </div>
</div>`;

  return (
    <div style={marginBottom && { marginBottom }}>
      <div>
        <b id={id}>{props.heading}</b> - {props.description}
      </div>
      <Spacer y={4} />
      <FlexRow>
        <TableCellLabelOverlay id={id}>
          <style
            dangerouslySetInnerHTML={{
              __html: `${containerCss}${exampleCss}${contentCss}`,
            }}
          />
          <table className="table-bordered">
            <tbody>
              <tr>
                <td className="cntr" id={`td-container-${id}`}>
                  <div className="expl" id={`example-${id}`}>
                    <div className="cont" id={`content-${id}`} />
                  </div>
                </td>
                <td className="sibling-tbl-cell">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </td>
              </tr>
            </tbody>
          </table>
        </TableCellLabelOverlay>
        <Spacer x={3} />
        <Stack>
          <CodeBlock label="HTML">{markup}</CodeBlock>
          <CodeBlock label="CSS">
            {containerCss}
            {exampleCss}
            {contentCss}
          </CodeBlock>
        </Stack>
      </FlexRow>
      <Spacer y={5} />
    </div>
  );
}
