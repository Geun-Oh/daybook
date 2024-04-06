import { colors } from "../theme";
import getFontStyle from "../theme/font/getFontSize";
import { ForwardedRef, forwardRef } from "react";
import { css } from "@emotion/react";

interface Props {}

// eslint-disable-next-line no-empty-pattern
function Daybook({}: Props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        border: 1px solid ${colors.primaryLight};
        ${getFontStyle("header1")};
      `}
    >
      일지~
    </div>
  );
}

export default forwardRef(Daybook);
