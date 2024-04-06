import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { daybookAtom } from '@state/daybook';
import { colors } from '@theme';
import { fadeLeftAnimation } from '@theme/animation';
import getFontStyle from '@theme/font/getFontSize';
import { useAtom } from 'jotai';

const data = [
  '내가 다른 사람에게 주었어요',
  '내가 다른 사람에게 받았어요',
  '내가 다른 사람이 주는 것을 보았어요',
] as const;

function 탄생() {
  const [daybook, setDaybook] = useAtom(daybookAtom);

  return (
    <Wrapper>
      {data.map((ment, index) => {
        return (
          <Item
            key={index}
            css={css`
              ${daybook.category === ment &&
              css`
                color: ${colors.white};
                background-color: ${colors.primary};
              `}
            `}
            onClick={() => {
              setDaybook((prev) => ({ ...prev, category: ment }));
            }}
          >
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
  list-style: none;
  border: 1px solid #999999;
  text-align: center;
  padding: 16px 0;
  color: ${colors.grey40};
  ${getFontStyle('header4')};

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
