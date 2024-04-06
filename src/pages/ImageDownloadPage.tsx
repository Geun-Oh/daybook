import useImageDownload from "../hooks/useImageDownload";
import Daybook from "../components/Daybook";

const ImageDownloadPage = () => {
  const { target, asyncDownload } = useImageDownload();

  return (
    <>
      <Daybook ref={target} />
      <button onClick={asyncDownload}>다운</button>
    </>
  );
};

export default ImageDownloadPage;
