import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./Router";
import Layout from "./components/Layout";
import GlobalStyles from "./theme/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);
