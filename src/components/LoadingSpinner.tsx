import { useLottie } from 'lottie-react';
import loading from '@assets/lottie/loading.json';
import styled from '@emotion/styled';

const LoadingSpinner = () => {
  const options = {
    animationData: loading,
    loop: true,
  };

  const { View } = useLottie(options);

  return <Wrapper>{View}</Wrapper>;
};

export default LoadingSpinner;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 20;
  background-color: #1a1a1a;
  opacity: 0.3;
`;
