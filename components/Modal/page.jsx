import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow:hidden bg-opacity-75">
      <div
        ref={modalRef}
        className="relative p-4   h-auto bg-[#4982d7] border-2 border-[#878787] rounded-md"
        style={{
          width: "70vw",
          height: "80vh",
          maxWidth: "90%",
          maxHeight: "90%",
        }}
      >
        <button
          className="absolute top-2 right-2 text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex px-[10px] xl:px-[30px] xl:flex-row flex-col justify-center items-center h-full ">
          <div className="w-full border  overflow-scroll border-white relative overflow-y-scroll h-full overflow:scroll xl:w-1/2">
            <div className="img-wrap border border-white w-full mx-auto "></div>
          </div>
          <div className="flex flex-col mt-[20px] w-full xl:w-1/2 justify-start">
            <div className="content  mx-[20px] p-[40px] rounded-xl border border-black bg-white w-full  ">
              <div className="project-type px-2 bg-blue-400 rounded-[30px] w-[30%] py-1 flex justify-center mb-4  items-center">
                官網建置
              </div>
              <b className="text-[20px] text-center font-normal">
                專案名稱:禪譜科技官網建置
              </b>
              <p className="text-[20px] mt-4 font-normal">專案內容:</p>
              <p className="text-[15px] font-bold">
                使用Bootstrap + Scss + Jquery 建置 另外加商品影片剪輯 商品攝影
                商品3D建模 圖片後製 網頁性能優化 Seo優化
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
