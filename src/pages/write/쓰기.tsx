import Textarea from '@components/Textarea';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { daybookAtom } from '@state/daybook';
import { paperTypeState } from '@state/paperType';
import { fadeLeftAnimation } from '@theme/animation';
import { useAtom, useAtomValue } from 'jotai';

function 쓰기() {
  const paperTypeAtom = useAtomValue(paperTypeState);
  const [daybook, setDaybook] = useAtom(daybookAtom);

  return (
    <Wrapper>
      <Textarea
        css={css`
          ${paperTypeAtom === '줄노트'
            ? css`
                line-height: 30.24px;
                padding-left: 40px;
                background-image: url('/src/assets/images/memo.png');
              `
            : css`
                background-image: url('/src/assets/images/monun.png');
              `};
        `}
        value={daybook?.content}
        onChange={(e) => {
          setDaybook((prev) => ({ ...prev, content: e.target.value }));
        }}
      />
    </Wrapper>
  );
}

export default 쓰기;

const Wrapper = styled.div`
  margin-top: 40px;
  opacity: 0;
  ${fadeLeftAnimation}
`;
