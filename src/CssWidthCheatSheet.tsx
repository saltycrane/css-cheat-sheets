import React from "react";

import { codeBlockCss } from "./CodeBlock";
import Example, { examplePageCss } from "./Example";
import { labelOverlayPageCss } from "./LabelOverlay";
import { rowCss } from "./Row";

function CssWidthCheatSheet() {
  let proseCss = `
    #cwcs ul {
      margin-left: 1rem;
    }
  `;
  let pageCss = `${proseCss}${codeBlockCss}${examplePageCss}${labelOverlayPageCss}${rowCss}`;
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
        and the results are shown below. See also the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
          MDN documentation on display
        </a>{" "}
        and the{" "}
        <a href="https://www.w3.org/TR/css-display-3/#the-display-properties">
          CSS specification on display
        </a>
        .
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
          <a href="#203">
            using <code>fit-content</code>
          </a>{" "}
          (not supported by IE)
        </li>
        <li>
          <a href="#204">
            setting <code>justify-items</code>
          </a>{" "}
          <a href="#205">
            or <code>justify-self</code>
          </a>{" "}
          to something other than <code>stretch</code> for elements in grid
          containers
        </li>
      </ul>

      {/* By container examples */}
      <h4 id="by-container">Examples - width determined by container</h4>
      <Example
        heading="Block elements, auto width"
        description="block elements expand to the width of their container by default"
        id="101"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: auto;     /* default */
        `}
      />
      <Example
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
          flex-direction: column;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />
      <Example
        heading="Grid container"
        description="elements will expand to the width of a grid container by default"
        id="103"
        containerCss={`
          display: grid;
          justify-items: stretch;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />
      <Example
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
      <Example
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
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: 100%;
        `}
      />
      <Example
        heading="Flex row container, flex-grow: 1"
        description={
          <>
            by default, block elements in a flex container will not expand to
            the width of the container. But setting <code>flex-grow: 1</code>{" "}
            will cause it to expand.
          </>
        }
        id="106"
        containerCss={`
          display: flex;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          flex-grow: 1;
        `}
      />

      {/* By content examples */}
      <h4 id="by-content">Examples - width determined by content</h4>
      <Example
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
      <Example
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
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />
      <Example
        heading={
          <>
            Block elements, using <code>fit-content</code>
          </>
        }
        description={
          <>
            block elements adjust to the width of their container by default but
            can use <code>fit-content</code> to set their width to match that of
            their content. NOTE: <code>fit-content</code> is{" "}
            <a href="https://caniuse.com/#feat=mdn-css_properties_width_fit-content">
              not supported by IE
            </a>
            .
          </>
        }
        id="203"
        containerCss={`
          display: block;  /* default */
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
          width: fit-content;
        `}
      />
      <Example
        heading={
          <>
            Grid container, w/ <code>justify-items</code> set
          </>
        }
        description={
          <>
            if a grid container sets <code>justify-items</code> to something
            other than <code>stretch</code> (the default), then the element will
            set its width to match its content by default
          </>
        }
        id="204"
        containerCss={`
          display: grid;
          justify-items: start;
          width: 600px;
        `}
        exampleCss={`
          display: block;  /* default */
        `}
      />
      <Example
        heading={
          <>
            Grid container, w/ <code>justify-self</code> set
          </>
        }
        description={
          <>
            if an element sets <code>justify-self</code> to something other than{" "}
            <code>stretch</code> (the default), inside a grid container, it will
            set its width to match its content by default
          </>
        }
        id="205"
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
