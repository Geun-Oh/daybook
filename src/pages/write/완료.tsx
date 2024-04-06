import CompleteImage from '@assets/images/complete.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function 완료() {
  return (
    <Wrapper>
      <img
        src={CompleteImage}
        css={css`
          width: 100%;
        `}
      />
    </Wrapper>
  );
}

export default 완료;

const Wrapper = styled.div`
  margin-top: 56px;
`;
