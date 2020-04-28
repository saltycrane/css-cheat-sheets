import React from "react";

import { codeBlockCss } from "./CodeBlock";
import { codeRowCss } from "./CodeRow";
import { stackCss } from "./Stack";
import WidthExample, { widthExamplePageCss } from "./WidthExample";
import { labelOverlayPageCss } from "./LabelOverlay";

function CssWidthCheatSheet() {
  let miscCss = `
    #cwcs a {
      border-bottom: 1px dotted;
    }
    #cwcs ul {
      margin-left: 10px;
    }
  `;
  let pageCss =
    miscCss +
    codeBlockCss +
    codeRowCss +
    labelOverlayPageCss +
    stackCss +
    widthExamplePageCss;
  return (
    <div id="cwcs">
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      {/* Prose */}
      <p>
        In CSS, I'm often confused about when an element adjusts to the width of
        its container and when it adjusts to the width of its content. I made
        some experiments to test the CSS behavior in various conditions. The
        script to generate the experiments is{" "}
        <a href="https://github.com/saltycrane/css-cheat-sheets">on github</a>{" "}
        and the results are shown below. See also my companion page on{" "}
        <a href="/blog/2021/01/how-height-set-css/">CSS height</a>.
      </p>

      <div>
        By default, elements adjust to the <b>width of their container</b> when
        they are
      </div>
      <ul>
        <li>
          <a href="#1a">block elements in block containers</a>
        </li>
        <li>
          elements in <a href="#4a">flex column containers</a>
        </li>
        <li>
          elements in <a href="#5a">grid containers</a>
        </li>
      </ul>

      <div>
        By default, elements adjust to <b>width of their content</b> when they
        are
      </div>
      <ul>
        <li>
          <a href="#2a">inline elements in block containers</a>
        </li>
        <li>
          elements in <a href="#3a">flex row containers</a>
        </li>
        <li>
          elements that are <a href="#6a">absolutely positioned</a>
        </li>
        <li>
          elements that are <a href="#7a">floated</a>
        </li>
      </ul>

      <div>
        Some elements can be made to adjust to the{" "}
        <b>width of their container</b> by
      </div>
      <ul>
        <li>
          <a href="#2c">setting their width</a> <a href="#3c">to 100%</a> (tip:
          if there are intermediate elements, their width may need to be set to
          100% also)
        </li>
        <li>
          <a href="#3e">
            setting <code>flex-grow</code>
          </a>{" "}
          for flex row containers
        </li>
      </ul>

      <div>
        Some elements can be made to adjust to the <b>width of their content</b>{" "}
        by
      </div>
      <ul>
        <li>
          <a href="#1c">
            using <code>fit-content</code>
          </a>{" "}
          (not supported by IE)
        </li>
        <li>
          <a href="#4c">
            setting <code>align-items</code>
          </a>{" "}
          to something other than <code>stretch</code> for elements in flex
          column containers
        </li>
        <li>
          <a href="#5e">
            setting <code>justify-items</code>
          </a>{" "}
          to something other than <code>stretch</code> for elements in grid
          containers
        </li>
      </ul>

      <div>
        For some cases, setting <code>overflow</code> limits an element's width
        to the <b>width of its container</b> for wide content:
        <ul>
          <li>
            <a href="#3g">flew row container example</a>
          </li>
          <li>
            <a href="#5d">grid container example</a>
          </li>
        </ul>
      </div>

      <div>
        Some miscellaneous cases:
        <ul>
          <li>
            <a href="#3f">
              flex row containers with <code>flex-grow</code> set
            </a>{" "}
            expand to the width of their content for wide content
          </li>
          <li>
            <a href="#5c">elements in grid containers</a> setting{" "}
            <code>width</code> to <code>100%</code> are NOT limited by the width
            of their container
          </li>
          <li>
            setting <code>overflow</code> has no effect for{" "}
            <a href="#5g">elements in grid containers</a> when{" "}
            <code>justify-items</code> is set
          </li>
        </ul>
      </div>

      <h4 id="see-also">See also</h4>
      <div>
        <ul className="list-inline">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
              MDN documentation on display
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">
              MDN documentation on width
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/TR/css-display-3/#the-display-properties">
              CSS specification on display
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/TR/css-sizing-3/">
              CSS specification on sizing
            </a>
          </li>
        </ul>
      </div>

      {/* Block containers */}
      <h4 id="block">Block containers</h4>

      <WidthExample
        heading="Block containers"
        description={
          <>
            block elements in block containers adjust to the{" "}
            <b>width of their container</b> by default
          </>
        }
        id="1a"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="1b"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading={<>Block containers, fit-content</>}
        description={
          <>
            block elements in block containers adjust to the width of their
            container by default, but can use <code>fit-content</code> to adjust
            to the <b>width of their content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">
              MDN docs on <code>width</code>
            </a>
            . NOTE: <code>fit-content</code> is{" "}
            <a href="https://caniuse.com/#feat=mdn-css_properties_width_fit-content">
              not supported by IE
            </a>
            .
          </>
        }
        id="1c"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: fit-content;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="1d"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: fit-content;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Inline elements */}
      <h4 id="inline">Inline elements</h4>

      <WidthExample
        heading="Inline elements"
        description={
          <>
            inline elements adjust to the <b>width of their content</b> by
            default
          </>
        }
        id="2a"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: inline-block;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="2b"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: inline-block;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Inline elements, width 100%"
        description={
          <>
            inline elements adjust to the <b>width of their container</b> if
            width is set to 100%
          </>
        }
        id="2c"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: inline-block;
          width: 100%;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="2d"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: inline-block;
          width: 100%;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Flex row containers */}
      <h4 id="flex-row">Flex row containers</h4>

      <WidthExample
        heading={<>Flex row container</>}
        description={
          <>
            elements in flex row containers adjust to the{" "}
            <b>width of their content</b> by default
          </>
        }
        id="3a"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="3b"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Flex row container, width 100%"
        description={
          <>
            elements in flex row containers adjust to the width of their content
            by default. Setting <code>width</code> to <code>100%</code>
            causes them to adjust to the <b>width of their container</b>.
          </>
        }
        id="3c"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: 100%;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="3d"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: 100%;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Flex row container, flex-grow"
        description={
          <>
            elements in flex row containers adjust to the width of their content
            by default. Setting <code>flex-grow</code> to <code>1</code> causes
            them to expand to the <b>width of their container</b> if their
            content is narrower than their container.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow">
              MDN docs on <code>flex-grow</code>
            </a>
            .
          </>
        }
        id="3e"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          flex-grow: 1;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        description={
          <>
            If content is wider than the container, the element expands to the{" "}
            <b>width of their content</b>.
          </>
        }
        id="3f"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          flex-grow: 1;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Flex row container, flex-grow, overflow"
        description={
          <>
            setting <code>overflow</code> to something other than{" "}
            <code>visible</code> limits the width of the element to the{" "}
            <b>width of its container</b>.
          </>
        }
        id="3g"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          flex-grow: 1;
          overflow: auto;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Flex column containers */}
      <h4 id="flex-column">Flex column containers</h4>

      <WidthExample
        heading="Flex column container"
        description={
          <>
            elements in flex column containers adjust to the{" "}
            <b>width of their container</b> by default
          </>
        }
        id="4a"
        containerCss={`
          display: flex;
          align-items: normal;  /* default - behaves like stretch in this case */
          flex-direction: column;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="4b"
        containerCss={`
          display: flex;
          align-items: normal;  /* default - behaves like stretch in this case */
          flex-direction: column;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading={<>Flex column container, align-items</>}
        description={
          <>
            elements in a flex column container adjust to the width of the
            container by default, but setting <code>align-items</code> to
            something other than <code>stretch</code> (e.g.{" "}
            <code>flex-start</code>), causes the element to adjust to the{" "}
            <b>width of its content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">
              MDN docs on <code>align-items</code>
            </a>
            .
          </>
        }
        id="4c"
        containerCss={`
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="4d"
        containerCss={`
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Grid containers */}
      <h4 id="grid">Grid containers</h4>

      <WidthExample
        heading="Grid container"
        description={
          <>
            elements in a grid container expand to the{" "}
            <b>width of their container</b> if their content is narrower than
            their container.
          </>
        }
        id="5a"
        containerCss={`
          display: grid;
          justify-items: normal;  /* default - behaves like stretch in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        description={
          <>
            If the content is wider than the container, the element expands to
            the <b>width of their content</b> instead.
          </>
        }
        id="5b"
        containerCss={`
          display: grid;
          justify-items: normal;  /* default - behaves like stretch in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Grid container, width 100%"
        description={
          <>
            elements in a grid container expand to the{" "}
            <b>width of their content</b> for wide content even if width is set
            to 100%
          </>
        }
        id="5c"
        containerCss={`
          display: grid;
          justify-items: normal;  /* default - behaves like stretch in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: 100%;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading="Grid container, overflow"
        description={
          <>
            if content is wider than the continer, elements in a grid container
            adjust to the <b>width of the container</b> if <code>overflow</code>{" "}
            is set to something other than <code>visible</code>
          </>
        }
        id="5d"
        containerCss={`
          display: grid;
          justify-items: normal;  /* default - behaves like stretch in this case */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          overflow: auto;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading={<>Grid container, justify-items</>}
        description={
          <>
            elements in grid containers with <code>justify-items</code> set to
            something other than <code>stretch</code> adjust to the{" "}
            <b>width of their content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items">
              MDN docs on <code>justify-items</code>
            </a>
            .
          </>
        }
        id="5e"
        containerCss={`
          display: grid;
          justify-items: start;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="5f"
        containerCss={`
          display: grid;
          justify-items: start;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
        contentCss={`
          width: 420px;
        `}
      />

      <WidthExample
        heading={<>Grid container, justify-items, overflow</>}
        description={
          <>
            setting <code>overflow</code> has no effect when{" "}
            <code>justify-items</code> is set
          </>
        }
        id="5g"
        containerCss={`
          display: grid;
          justify-items: start;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          overflow: auto;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Absolute positioning */}
      <h4 id="absolute">Absolute positioning</h4>

      <WidthExample
        heading="Absolutely positioned"
        description={
          <>
            when <code>position: absolute</code> is used, the element adjusts to
            the <b>width of its content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning">
              MDN docs on <code>position: absolute</code>
            </a>
            .
          </>
        }
        id="6a"
        containerCss={`
          display: block;  /* default */
          position: relative;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          position: absolute;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="6b"
        containerCss={`
          display: block;  /* default */
          position: relative;
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          position: absolute;
        `}
        contentCss={`
          width: 420px;
        `}
      />

      {/* Floated elements */}
      <h4 id="float">Floated elements</h4>

      <WidthExample
        heading="Floated elements"
        description={
          <>
            elements that set <code>float</code> adjust to the{" "}
            <b>width of their content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
              MDN docs on <code>float</code>
            </a>
            .
          </>
        }
        id="7a"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          float: left;
        `}
        contentCss={`
          width: 120px;
        `}
      />

      <WidthExample
        id="7b"
        containerCss={`
          display: block;  /* default */
          width: 400px;
        `}
        exampleCss={`
          display: block;  /* default */
          float: left;
        `}
        contentCss={`
          width: 420px;
        `}
      />
    </div>
  );
}

export default CssWidthCheatSheet;
