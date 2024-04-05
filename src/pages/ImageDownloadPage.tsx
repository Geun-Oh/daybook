import styled from "@emotion/styled";
import Daybook from "../components/Daybook";

const ImageDownloadPage = () => {
  return (
    <Wrapper>
      <Daybook />
    </Wrapper>
  );
};

export default ImageDownloadPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
