import styled from "@emotion/styled";
import { colors } from "@theme";
import { Link } from "react-router-dom";

interface OthersWritingFooterProps {
  id: number;
}

const OthersWritingFooter = ({ id }: OthersWritingFooterProps) => {
  return (
    <Footer>
      <div>
        <Link to={`/write?id=${id}`}>나도 일지 작성하기</Link>
      </div>
    </Footer>
  );
};

export default OthersWritingFooter;

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  max-width: 768px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 16px;

  a {
    text-decoration: none;
    color: white;
  }

  & > div {
    background-color: ${colors.primaryDark};
    color: white;
    width: 100%;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 362px;
  }
`;
