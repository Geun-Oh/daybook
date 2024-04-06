import styled from "@emotion/styled";

const NoWritings = () => {
    return (
        <Wrapper>
            <img src="/src/assets/images/no_writings.png" alt="no writings" width={'298px'} />
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