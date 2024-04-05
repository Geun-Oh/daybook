import styled from "@emotion/styled";
import { colors } from "../theme";
import getFontStyle from "../theme/font/getFontSize";

function Daybook() {
  return <Wrapper>일지~</Wrapper>;
}

export default Daybook;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border: 1px solid ${colors.primaryLight};
  ${getFontStyle("header1")};
`;
