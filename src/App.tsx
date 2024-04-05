import { css } from "@emotion/react";

function App() {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      emotion test
    </div>
  );
}

export default App;
