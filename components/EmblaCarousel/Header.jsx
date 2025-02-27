import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation01.js";
import GsapText from "../../components/RevealText/index";
const Header = () => (
  <header className="pt-[30px] xl:pt-[80px] pb-[15px] xl:pb-[30px] relative flex-col flex justify-center">
    {/* <div className="absolute w-[200px] md:w-[330px] h-auto right-[-10%] md:right-[15%] top-[5%]">
      <LottieAnimation />
    </div> */}
    <div className="static z-[9]">
      <h2
        className="header text-[#1e1e1e] xl:text-[100px]
    font-extrabold xl:leading-[90px] leading-normal text-center md:text-[62px] text-[32px]"
      >
        <GsapText
          text='"精選網頁案例"'
          lineHeight="80px"
          id="text2"
          fontSize="70px"
        />{" "}
      </h2>
    </div>
    {/* <div className="absolute left-[-10%] md:left-[10%]   w-[200px] md:w-[330px] h-auto  top-[23%]">
      <LottieAnimation />
    </div> */}
    <div className="h-full flex my-auto justify-center items-center">
      <a
        href="/project"
        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
        className="button-wrapper  w-inline-block"
      >
        <div className="button-layout">
          <p href="/project" className="button-text" style={{}}>
            更多網頁設計案例
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
    <p className="mx-auto text-[16px]">(陸續新增中..)</p>
  </header>
);

export default Header;
