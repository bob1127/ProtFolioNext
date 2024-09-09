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
        className="relative p-4   h-auto bg-[#4982d7] border-2 border-black rounded-md"
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
        <div className="flex px-[30px] xl:flex-row flex-col justify-center items-center h-full ">
          <div className="w-full xl:w-1/2">
            <img
              src={imageSrc}
              alt="Expanded view"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="content  mx-[20px] p-[40px] rounded-xl border border-black bg-white w-full xl:w-1/2 ">
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
            {/* <a
              href="/"
              data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
              className="button-wrapper w-[120px] w-inline-block"
            >
              <div className="button-layout">
                <p href="/about" className="button-text" style={{}}>
                  立即聯絡
                </p>
                <div className="button-bg" style={{}} />
              </div>
              <div className="button-icon-block">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="button-icon"
                  style={{}}
                />
              </div>
            </a> */}
            {/* <div
              data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6"
              class="footre-page-links"
              style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
            >
              <a href="/" class="simple-link-blue w--current">
                形象影片
              </a>
              <a href="/about" class="simple-link-blue">
                產品攝影
              </a>
              <a href="/journal" class="simple-link-blue">
                社群短視頻
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
