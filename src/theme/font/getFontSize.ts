import { css } from "@emotion/react";
import { Style, Variety } from "./type";

const StyleMap: Record<Variety, Style> = {
  header1: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 36,
  },
  header2: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 30,
  },
  header3: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 27,
  },
  header4: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
  },
  title1: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 30,
  },
  title2: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
  },
  title3: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
  },
  title4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 21,
  },
  title5: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 18,
  },
  body1: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 27,
  },
  body2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
  body3: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
  },
  body4: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
  },
  caption1: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 18,
  },
  caption2: {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 15,
  },
} as const;

const getFontStyle = (variety: Variety) => {
  const { fontSize, fontWeight, lineHeight } = StyleMap[variety];
  return css`
    font-size: ${`${fontSize}px`};
    font-weight: ${fontWeight};
    line-height: ${`${lineHeight}px`};
  `;
};

export default getFontStyle;
