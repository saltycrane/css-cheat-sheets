import React from "react";

import { codeBlockCss } from "./CodeBlock";
import { codeRowCss } from "./CodeRow";
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
    widthExamplePageCss;
  return (
    <div id="cwcs">
      {/* Prose */}
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <p>
        In CSS, I'm often confused about when an element expands to the width of
        its container and when it adjusts to the width of its content. I made
        some experiments to test the CSS behavior in various conditions. The
        script to generate the experiments is{" "}
        <a href="https://github.com/saltycrane/css-width-cheat-sheet">
          on github
        </a>{" "}
        and the results are shown below.
      </p>

      <div>
        By default, elements expand to the <b>width of their container</b> when
        they are
      </div>
      <ul>
        <li>
          <a href="#101">block elements in block containers</a>
        </li>
        <li>
          elements in <a href="#102">flex column containers</a>
        </li>
        <li>
          elements in <a href="#103">grid containers</a>
        </li>
      </ul>

      <div>
        By default, elements adjust to <b>width of their content</b> when they
        are
      </div>
      <ul>
        <li>
          <a href="#201">inline elements in block containers</a>
        </li>
        <li>
          elements in <a href="#202">flex row containers</a>
        </li>
        <li>
          elements that are <a href="#203">absolutely positioned</a>
        </li>
        <li>
          elements that are <a href="#204">floated</a>
        </li>
      </ul>

      <div>
        Some elements can be made to expand to the{" "}
        <b>width of their container</b> by
      </div>
      <ul>
        <li>
          <a href="#104">setting their width</a> <a href="#105">to 100%</a>{" "}
          (tip: if there are intermediate elements, their width may need to be
          set to 100% also)
        </li>
        <li>
          <a href="#106">
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
          <a href="#205">
            using <code>fit-content</code>
          </a>{" "}
          (not supported by IE)
        </li>
        <li>
          <a href="#206">
            setting <code>align-items</code>
          </a>{" "}
          to something other than <code>stretch</code> for elements in flex
          column containers
        </li>
        <li>
          <a href="#207">
            setting <code>justify-items</code>
          </a>{" "}
          <a href="#208">
            or <code>justify-self</code>
          </a>{" "}
          to something other than <code>stretch</code> for elements in grid
          containers
        </li>
      </ul>

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

      {/* By container examples */}
      <h4 id="by-container">Examples - width determined by container</h4>

      <WidthExample
        heading="Block elements"
        description="block elements expand to the width of their container by default"
        id="101"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading="Flex column container"
        description={
          <>
            if the container is a flex column, then elements will expand to the
            width of the container by default
          </>
        }
        id="102"
        containerCss={`
          display: flex;
          align-items: normal;  /* default - behaves like stretch in this case */
          flex-direction: column;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading="Grid container"
        description="elements will expand to the width of a grid container by default"
        id="103"
        containerCss={`
          display: grid;
          justify-items: normal;  /* default - behaves like stretch in this case */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading="Inline elements, width 100%"
        description="inline elements will expand to the width of their container if width is set to 100%"
        id="104"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: inline-block;
          width: 100%;
        `}
      />

      <WidthExample
        heading="Flex row container, width: 100%"
        description={
          <>
            by default, block elements in a flex container will not expand to
            the width of the container. Setting <code>width: 100%</code> will
            cause it to expand.
          </>
        }
        id="105"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: 100%;
        `}
      />

      <WidthExample
        heading="Flex row container, flex-grow: 1"
        description={
          <>
            by default, block elements in a flex container will not expand to
            the width of the container. But setting <code>flex-grow: 1</code>{" "}
            will cause it to expand.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow">
              MDN docs on <code>flex-grow</code>
            </a>
            .
          </>
        }
        id="106"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          flex-grow: 1;
        `}
      />

      {/* By content examples */}
      <h4 id="by-content">Examples - width determined by content</h4>

      <WidthExample
        heading="Inline elements"
        description="inline elements adjust to the width of their content by default"
        id="201"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: inline-block;
        `}
      />

      <WidthExample
        heading={<>Flex row container</>}
        description={
          <>
            if the container uses <code>display: flex</code>, the element will
            set its width to match its content even for block elements.
          </>
        }
        id="202"
        containerCss={`
          display: flex;
          flex-direction: row;  /* default */
          justify-content: normal;  /* default - behaves as flex-start in this case */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading="Absolutely positioned"
        description={
          <>
            when <code>position: absolute</code> is used, the element will
            adjust to the width of its content.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning">
              MDN docs on <code>position: absolute</code>
            </a>
            .
          </>
        }
        id="203"
        containerCss={`
          display: block;  /* default */
          position: relative;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          position: absolute;
        `}
      />

      <WidthExample
        heading="Floated elements"
        description={
          <>
            elements that set <code>float</code> adjust to the width of their
            content.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
              MDN docs on <code>float</code>
            </a>
            .
          </>
        }
        id="204"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          float: left;
        `}
      />

      <WidthExample
        heading={
          <>
            Block elements, using <code>fit-content</code>
          </>
        }
        description={
          <>
            block elements adjust to the width of their container by default but
            can use <code>fit-content</code> to set their width to match that of
            their content.{" "}
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
        id="205"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: fit-content;
        `}
      />

      <WidthExample
        heading={
          <>
            Flex column container with <code>align-items</code> set
          </>
        }
        description={
          <>
            elements in a flex column container expand to the width of the
            container by default, but setting <code>align-items</code> to
            something other than <code>stretch</code> (e.g.{" "}
            <code>flex-start</code>), causes the element to adjust to the width
            of its content.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">
              MDN docs on <code>align-items</code>
            </a>
            .
          </>
        }
        id="206"
        containerCss={`
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading={
          <>
            Grid container, with <code>justify-items</code> set
          </>
        }
        description={
          <>
            if a grid container sets <code>justify-items</code> to something
            other than <code>stretch</code> (the default), then the element will
            set its width to match its content by default.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items">
              MDN docs on <code>justify-items</code>
            </a>
            .
          </>
        }
        id="207"
        containerCss={`
          display: grid;
          justify-items: start;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />

      <WidthExample
        heading={
          <>
            Grid container, with <code>justify-self</code> set
          </>
        }
        description={
          <>
            if an element sets <code>justify-self</code> to something other than{" "}
            <code>stretch</code> (the default), inside a grid container, it will
            set its width to match its content by default.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self">
              MDN docs on <code>justify-self</code>
            </a>
            .
          </>
        }
        id="208"
        containerCss={`
          display: grid;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          justify-self: start;
        `}
      />
    </div>
  );
}

export default CssWidthCheatSheet;
