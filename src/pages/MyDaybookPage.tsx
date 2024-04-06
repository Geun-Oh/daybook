import Header from "@components/Header";
import styled from "@emotion/styled";
import MyWritingSwiper from "@components/MyWritingSwiper";

const MyDaybookPage = () => {
  return (
    <Wrapper>
      <Header>
        <Header.Button variety="write" />
        <Header.Button variety="logout" />
      </Header>
      <MyWritingSwiper />
    </Wrapper>
  );
};

export default MyDaybookPage;

const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100vh;
`;
