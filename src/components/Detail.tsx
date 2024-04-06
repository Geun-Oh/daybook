import styled from "@emotion/styled";
import { colors } from "@theme";
import getFontStyle from "@theme/font/getFontSize";
import { Link } from "react-router-dom";

interface DetailProps {
    daybookId: number;
}

const Detail = ({ daybookId }: DetailProps) => {
    return (
        <Wrapper>
            <Link to={`/detail/${daybookId}`}>
                자세히 보기
            </Link>
        </Wrapper>
    );
};

export default Detail;

const Wrapper = styled.section`
    width: 100%;
    height: 64px;

    background-color: ${colors.primaryLight};
    ${getFontStyle("header4")};
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
    }
`