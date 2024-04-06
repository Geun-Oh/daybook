import { useSwiper } from "swiper/react";
import styled from "@emotion/styled";
import GoPrevSVG from "@assets/svg/go_prev.svg?react";
import getFontStyle from "@theme/font/getFontSize";
import { colors } from "@theme";

const SwipePrevButton = () => {
    const swiper = useSwiper();
    return (
        <StyledButton
            onClick={() => {
                swiper.slidePrev();
            }}
        >
            <GoPrevSVG />
            <span>이전</span>
        </StyledButton>
    );
};

export default SwipePrevButton;

export const StyledButton = styled.button`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  gap: 8px;

  cursor: pointer;

  & > span {
    ${getFontStyle('title3')}
    color: ${colors.grey50};
  }
`;
