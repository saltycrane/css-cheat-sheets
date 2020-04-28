import React from "react";

import { codeBlockCss } from "./CodeBlock";
import { flexRowCss } from "./FlexRow";
import HeightExample, { heightExamplePageCss } from "./HeightExample";
import { labelOverlayPageCss } from "./LabelOverlay";
import { stackCss } from "./Stack";

function CssHeightCheatSheet() {
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
    flexRowCss +
    labelOverlayPageCss +
    heightExamplePageCss +
    stackCss;
  return (
    <div id="cwcs">
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      {/* Prose */}
      <p>
        Here are some CSS experiments to test when elements adjust to the height
        of their container and when they adjust to the height of their content.
        The script to generate the experiments is{" "}
        <a href="https://github.com/saltycrane/css-cheat-sheets">on github</a>{" "}
        and the results are shown below. See also my companion page on{" "}
        <a href="/blog/2020/04/how-width-set-css/">CSS width</a>.
      </p>

      <div>
        By default, elements adjust to <b>height of their container</b> when
        they are
      </div>
      <ul>
        <li>
          elements in <a href="#3a">flex row containers</a>
        </li>
        <li>
          elements in <a href="#5a">grid containers with short content</a>
        </li>
      </ul>

      <div>
        By default, elements adjust to the <b>height of their content</b> when
        they are
      </div>
      <ul>
        <li>
          elements in <a href="#1a">block containers</a>
        </li>
        <li>
          elements in <a href="#4a">flex column containers</a>
        </li>
        <li>
          elements in <a href="#5b">grid containers with tall content</a>
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
        <b>height of their container</b> by
      </div>
      <ul>
        <li>
          setting <code>height</code> to <code>100%</code> for elements in{" "}
          <a href="#1c">block containers</a>, elements in{" "}
          <a href="#4c">flex column containers</a>,{" "}
          <a href="#6c">absolutely positioned elements</a>, and{" "}
          <a href="#7c">floated elements</a>. (Note: it does not have an effect
          for elements in <a href="#5c">grid containers</a>.)
        </li>
        <li>
          setting <code>flex-grow</code> for elements in{" "}
          <a href="#4e">flex column containers</a> where content is shorter than
          the container. (Note: it adjusts to the height of the content if the{" "}
          <a href="#4f">content is tailler than the container</a>.)
        </li>
        <li>
          setting <code>overflow</code> for elements in{" "}
          <a href="#5d">grid containers with tall content</a>
        </li>
      </ul>

      <div>
        Some elements can be made to adjust to the{" "}
        <b>height of their content</b> by
      </div>
      <ul>
        <li>
          setting <code>align-items</code> to something other than{" "}
          <code>stretch</code> for elements in{" "}
          <a href="#3c">flex row containers</a> and elements in{" "}
          <a href="#5e">grid containers</a>
        </li>
      </ul>

      <div>
        Some miscellaneous cases:
        <ul>
          <li>
            for elements in <a href="#5d">grid containers</a>, setting{" "}
            <code>overflow</code> limits an element's height to the height of
            its container for tall content
          </li>
          <li>
            <a href="#4f">
              flex column containers with <code>flex-grow</code> set
            </a>{" "}
            expand to the height of their content for tall content
          </li>
          <li>
            <a href="#5c">elements in grid containers</a> setting{" "}
            <code>height</code> to <code>100%</code> are NOT limited by the
            height of their container
          </li>
          <li>
            setting <code>overflow</code> has no effect for{" "}
            <a href="#5g">elements in grid containers</a> when{" "}
            <code>align-items</code> is set
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">
              MDN documentation on height
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

      <HeightExample
        heading="Block containers"
        description={
          <>
            elements in block containers adjust to the{" "}
            <b>height of their content</b> by default
          </>
        }
        id="1a"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Block containers, tall content"
        description={
          <>
            elements in block containers adjust to the{" "}
            <b>height of their content</b> even when the content is taller than
            the container
          </>
        }
        id="1b"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading="Block elements, height 100%"
        description={
          <>
            block elements expand to the <b>height of their container</b> if
            height is set to 100%
          </>
        }
        id="1c"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Block elements, tall content, height 100%"
        description={
          <>
            block elements contract to the <b>height of their container</b> if
            height is set to 100%
          </>
        }
        id="1d"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={60}
      />

      {/* Flex row containers */}
      <h4 id="flex-row">Flex row containers</h4>

      <HeightExample
        heading={<>Flex row container</>}
        description={
          <>
            elements in flex row containers expand to the{" "}
            <b>height of their container</b> by default
          </>
        }
        id="3a"
        containerCss={`
          align-items: normal;  /* default - behaves as stretch in this case */
          display: flex;
          flex-direction: row;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading={<>Flex row container, tall content</>}
        description={
          <>
            elements in flex row containers contract to the{" "}
            <b>height of their container</b> by default
          </>
        }
        id="3b"
        containerCss={`
          align-items: normal;  /* default - behaves as stretch in this case */
          display: flex;
          flex-direction: row;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={60}
      />

      <HeightExample
        heading={<>Flex row container, align-items set</>}
        description={
          <>
            elements in flex row containers adjust to the{" "}
            <b>height of their content</b> if <code>align-items</code> is set to
            something other than <code>stretch</code>
          </>
        }
        id="3c"
        containerCss={`
          align-items: flex-start;
          display: flex;
          flex-direction: row;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading={<>Flex row container, align-items set, tall content</>}
        description={
          <>
            elements in flex row containers adjust to the{" "}
            <b>height of their content</b> if <code>align-items</code> is set to
            something other than <code>stretch</code>
          </>
        }
        id="3d"
        containerCss={`
          align-items: flex-start;
          display: flex;
          flex-direction: row;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      {/* Flex column containers */}
      <h4 id="flex-column">Flex column containers</h4>

      <HeightExample
        heading="Flex column container"
        description={
          <>
            elements in flex columns containers <b>adjust to the height</b> of
            the content by default
          </>
        }
        id="4a"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Flex column container, tall content"
        description={
          <>
            elements in flex columns containers <b>adjust to the height</b> of
            their content even for tall content
          </>
        }
        id="4b"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading="Flex column container, height: 100%"
        description={
          <>
            elements in flex column containers expand to the{" "}
            <b>height of their container</b> if <code>height</code> is set to{" "}
            <code>100%</code>
          </>
        }
        id="4c"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Flex column container, height: 100%, tall content"
        description={
          <>
            elements in flex column containers contract to the{" "}
            <b>height of their container</b> if <code>height</code> is set to{" "}
            <code>100%</code>
          </>
        }
        id="4d"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={60}
      />

      <HeightExample
        heading="Flex column container, flex-grow"
        description={
          <>
            elements in flex column containers expand to the{" "}
            <b>height of their container</b> when <code>flex-grow</code> is set
            to <code>1</code>
          </>
        }
        id="4e"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={`
          flex-grow: 1;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Flex column container, flex-grow, tall content"
        description={
          <>
            elements in flex column containers expand to the{" "}
            <b>height of their content</b> when <code>flex-grow</code> is set to{" "}
            <code>1</code>
          </>
        }
        id="4f"
        containerCss={`
          display: flex;
          flex-direction: column;
          justify-content: normal;  /* default */
          height: 400px;
        `}
        exampleCss={`
          flex-grow: 1;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      {/* Grid containers */}
      <h4 id="grid">Grid containers</h4>

      <HeightExample
        heading="Grid container"
        description={
          <>
            elements in grid containers expand to the{" "}
            <b>height of the container</b> by default
          </>
        }
        id="5a"
        containerCss={`
          align-items: normal;  /* default - behaves like stretch in this case */
          display: grid;
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Grid container, tall content"
        description={
          <>
            elements with tall content in grid containers expand to the{" "}
            <b>height of the content</b>
          </>
        }
        id="5b"
        containerCss={`
          align-items: normal;  /* default - behaves like stretch in this case */
          display: grid;
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading="Grid container, tall content, height 100%"
        description={
          <>
            surprisingly, setting <code>height</code> to <code>100%</code> does
            not contract an element's height to the height of its container. The
            element adjusts to the <b>height of the content</b>.
          </>
        }
        id="5c"
        containerCss={`
          align-items: normal;  /* default - behaves like stretch in this case */
          display: grid;
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading="Grid container, tall content, overflow"
        description={
          <>
            elements with tall content in grid containers adjust to the{" "}
            <b>height of the container</b> if <code>overflow</code> is set to
            something other than <code>visible</code>
          </>
        }
        id="5d"
        containerCss={`
          align-items: normal;  /* default - behaves like stretch in this case */
          display: grid;
          height: 400px;
        `}
        exampleCss={`
          overflow: auto;
        `}
        contentCss={`
          height: 420px;
        `}
      />

      <HeightExample
        heading={<>Grid container, align-items</>}
        description={
          <>
            if a grid container sets <code>align-items</code> to something other
            than <code>stretch</code> (the default), then the element will
            adjust to the <b>height of the content</b>{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">
              MDN docs on <code>align-items</code>
            </a>
            .
          </>
        }
        id="5e"
        containerCss={`
          align-items: start;
          display: grid;
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading={<>Grid container, align-items, tall content</>}
        description={
          <>
            elements with tall content in grid containers expand to the{" "}
            <b>height of the content</b>
          </>
        }
        id="5f"
        containerCss={`
          align-items: start;
          display: grid;
          height: 400px;
        `}
        exampleCss={``}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading={<>Grid container, align-items, tall content, overflow</>}
        description={
          <>
            elements with tall content in grid containers expand to the{" "}
            <b>height of the content</b> even if <code>overflow</code> is set
          </>
        }
        id="5g"
        containerCss={`
          align-items: start;
          display: grid;
          height: 400px;
        `}
        exampleCss={`
          overflow: auto;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      {/* Absolute positioning */}
      <h4 id="absolute">Absolute positioning</h4>

      <HeightExample
        heading="Absolutely positioned"
        description={<></>}
        id="6a"
        containerCss={`
          display: block;  /* default */
          position: relative;
          height: 400px;
        `}
        exampleCss={`
          position: absolute;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Absolutely positioned, tall content"
        description={<></>}
        id="6b"
        containerCss={`
          display: block;  /* default */
          position: relative;
          height: 400px;
        `}
        exampleCss={`
          position: absolute;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={80}
      />

      <HeightExample
        heading="Absolutely positioned, height 100%"
        description={<></>}
        id="6c"
        containerCss={`
          display: block;  /* default */
          position: relative;
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
          position: absolute;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Absolutely positioned, height 100%, tall content"
        description={<></>}
        id="6d"
        containerCss={`
          display: block;  /* default */
          position: relative;
          height: 400px;
        `}
        exampleCss={`
          height: 100%;
          position: absolute;
        `}
        contentCss={`
          height: 420px;
        `}
        marginBottom={60}
      />

      {/* Floated elements */}
      <h4 id="float">Floated elements</h4>

      <HeightExample
        heading="Floated elements"
        description={
          <>
            elements that set <code>float</code> adjust to the{" "}
            <b>height of their content</b>.{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
              MDN docs on <code>float</code>
            </a>
            .
          </>
        }
        id="7a"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          float: left;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Floated elements, tall content"
        description={
          <>
            elements that set <code>float</code> adjust to the{" "}
            <b>height of their content</b>
          </>
        }
        id="7b"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          float: left;
        `}
        contentCss={`
          height: 420px;
        `}
      />

      <HeightExample
        heading="Floated elements, height 100%"
        description={<></>}
        id="7c"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          float: left;
          height: 100%;
        `}
        contentCss={`
          height: 80px;
        `}
      />

      <HeightExample
        heading="Floated elements, height 100%, tall content"
        description={<></>}
        id="7d"
        containerCss={`
          display: block;  /* default */
          height: 400px;
        `}
        exampleCss={`
          float: left;
          height: 100%;
        `}
        contentCss={`
          height: 420px;
        `}
      />
    </div>
  );
}

export default CssHeightCheatSheet;
