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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div
        ref={modalRef}
        className="relative p-4 bg-white rounded-md"
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
          <div className="content w-full xl:w-1/2 p-5">
            <p className="text-[14px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              quibusdam perspiciatis voluptas aliquid consequatur vitae dolore
              mollitia eaque voluptatibus libero ullam similique unde expedita,
              cum eum, ea maiores ex dolorum!
            </p>
            <a
              href="/"
              data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
              className="button-wrapper w-inline-block"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
