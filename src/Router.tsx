import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageDownloadPage from "./pages/ImageDownloadPage";
import A from "./pages/A";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A" element={<A />} />
        <Route path="/image-download" element={<ImageDownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
