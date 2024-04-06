import Router from "./Router";
import styled from '@emotion/styled';

function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
    max-width: 768px;
    width: 100vw;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
`