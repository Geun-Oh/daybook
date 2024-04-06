import styled from "@emotion/styled";
import SwipePrevButton from "./SwipePrevButton";
import SwipeNextButton from "./SwipeNextButton";
import CardIndicator, { CardIndicatorProps } from "./CardIndicator";
import { FC } from "react";

interface SwiperFooterProps extends CardIndicatorProps {}

const SwiperFooter: FC<SwiperFooterProps> = ({ maxIndex, currentIndex }) => {
  return (
    <Wrapper>
      <div>
        <SwipePrevButton />
        <CardIndicator maxIndex={maxIndex} currentIndex={currentIndex} />
        <SwipeNextButton />
      </div>
    </Wrapper>
  );
};

export default SwiperFooter;

const Wrapper = styled.article`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 336px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
