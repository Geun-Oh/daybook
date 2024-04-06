import { useSwiper } from "swiper/react";
import GoNextSVG from "@assets/svg/go_next.svg?react";
import { StyledButton } from "./SwipePrevButton";

const SwipeNextButton = () => {
    const swiper = useSwiper();
    return (
        <StyledButton
            onClick={() => {
                swiper.slideNext();
            }}
        >
            <span>다음</span>
            <GoNextSVG />
        </StyledButton>
    );
};

export default SwipeNextButton;