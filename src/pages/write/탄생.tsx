import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { daybookAtom } from "@state/daybook";
import { colors } from "@theme";
import { fadeLeftAnimation } from "@theme/animation";
import getFontStyle from "@theme/font/getFontSize";
import { useAtom } from "jotai";
import TakeSVG from "@assets/svg/take.svg?react";
import GiveSVG from "@assets/svg/give.svg?react";
import SeeSVG from "@assets/svg/see.svg?react";

const data = new Map([
  ["내가 다른 사람에게 주었어요", TakeSVG],
  ["내가 다른 사람에게 받았어요", GiveSVG],
  ["내가 다른 사람이 주는 것을 보았어요", SeeSVG],
]);

function 탄생() {
  const [daybook, setDaybook] = useAtom(daybookAtom);

  return (
    <Wrapper>
      {Array.from(data).map(([ment, icon], index) => {
        const Icon = icon;
        return (
          <Item
            key={index}
            css={css`
              ${daybook.category === ment &&
              css`
                color: ${colors.white};
                background-color: ${colors.primary};
                svg {
                  path {
                    color: ${colors.white};
                  }
                }
              `}
            `}
            onClick={() => {
              setDaybook((prev) => ({ ...prev, category: ment }));
            }}
          >
            <Icon />
            {ment}
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default 탄생;

const Wrapper = styled.ul`
  padding: 0;
  margin-top: 47px;
  opacity: 0;
  ${fadeLeftAnimation}
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;
  border: 1px solid #999999;
  text-align: center;
  padding: 16px 0;
  color: ${colors.grey40};
  ${getFontStyle("header4")};

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
