import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NoWritings = () => {
    return (
        <Wrapper>
            <Link to={'/write'}>
                <img src="/src/assets/images/no_writings.png" alt="no writings" width={'298px'} />
            </Link>
        </Wrapper>
    );
};

export default NoWritings;

const Wrapper = styled.article`

    width: 362px;
    height: 426px;

    background-color: #F9F6F1;
    box-shadow: 2px 5px 16px -5px #00000026;

    display: flex;
    justify-content: center;
    align-items: center;

`