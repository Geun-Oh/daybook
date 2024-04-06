import styled from '@emotion/styled';
import { colors } from '@theme';
import getFontStyle from '@theme/font/getFontSize';
import { FC } from 'react';

interface ImpactedProps {
  impactNum: number;
}

const Impacted: FC<ImpactedProps> = ({ impactNum }) => {
  return (
    <Wrapper>
      <div>{impactNum}명의 사용자가 이 일지에 영향을 받았어요.</div>
    </Wrapper>
  );
};

export default Impacted;

const Wrapper = styled.article`
  margin-top: 16px;
  width: 100%;

  & > div {
    width: 100%;
    height: 40px;
    background: #3d582b20;
    color: ${colors.primary};
    ${getFontStyle('caption1')};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
