import { css, keyframes } from '@emotion/react';

export const fadeLeftKeyframes = keyframes`
    0% {
      opacity: 0;
      transform: translateX(10px)
    }
    100% {
      opacity: 1;
      transform: translateX(0)
    }
  `;

export const fadeLeftAnimation = css`
  animation: 1.2s ${fadeLeftKeyframes} forwards;
`;

export const fadeLeftDelayAnimation = css`
  animation: 1.2s ${fadeLeftKeyframes} forwards 0.2s;
`;
