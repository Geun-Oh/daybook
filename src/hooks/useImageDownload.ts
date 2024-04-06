import html2canvas from "html2canvas";
import { useRef } from "react";

const useImageDownload = <T = HTMLDivElement>() => {
  const target = useRef<T>(null);

  const asyncDownload = async () => {
    if (!target.current) return;
    const current = target.current as unknown as HTMLElement;
    try {
      const canvas = await html2canvas(current);

      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = "daybook.png";
      link.click();
      document.body.removeChild(link);
    } catch {
      alert("일지 저장에 실패했습니다. 🥹");
    }
  };

  return { target, asyncDownload };
};

export default useImageDownload;
