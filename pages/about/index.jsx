import React from "react";
import Script from "next/script";
import Head from "next/head";

export default function Blog() {
  return (
    <div className="about-root">
      <style
        dangerouslySetInnerHTML={{
          __html:
            '@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"] {-webkit-transform:translate3d(0, 1.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 1.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 1.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 1.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"] {-webkit-transform:translate3d(0, 101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:block;}html.w-mod-js:not(.w-mod-ix) [data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"] {-webkit-transform:translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"] {-webkit-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"] {-webkit-transform:translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:block;}html.w-mod-js:not(.w-mod-ix) [data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c26b"] {-webkit-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c274"] {-webkit-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c27c"] {-webkit-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 4rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}',
        }}
      />

      <Head>
        <link
          href="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/css/stada-design-agency-template.webflow.9aa283b37.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=668bd563537f10fdc41abec9"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
        strategy="beforeInteractive" // 可以使用 `beforeInteractive`, `lazyOnload`, `afterInteractive` 等策略
      />

      <Script
        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/js/webflow.765c1394c.js"
        strategy="afterInteractive"
      />
      <div id="webpage" className="page-wrapper">
        <div className="fullscreen-menu" style={{ display: "none" }}>
          <div className="menu-layout">
            <div className="menu-socials" style={{ opacity: 0 }}>
              <div className="menu-social-wrapper w-dyn-list">
                <div role="list" className="menu-social-list w-dyn-items">
                  <div role="listitem" className="menu-social-item w-dyn-item">
                    <a href="#" className="menu-social-link w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c39ba9cdf534275b8533_youtube-logo-black.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-social-menu-icon"
                      />
                    </a>
                  </div>
                  <div role="listitem" className="menu-social-item w-dyn-item">
                    <a href="#" className="menu-social-link w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3b3dd27ebf12436fc85_linkedin-logo-black.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-social-menu-icon"
                      />
                    </a>
                  </div>
                  <div role="listitem" className="menu-social-item w-dyn-item">
                    <a href="#" className="menu-social-link w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c380c49a871545a7ce42_facebook-logo-black.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-social-menu-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-links-wrapper" style={{ opacity: 0 }}>
              <div
                className="secondary-links"
                style={{
                  opacity: 0,
                  transform:
                    "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="secondary-links-block">
                  <p className="menu-small-text">聯絡我們</p>
                  <a href="/store" className="menu-sesondary-link">
                    Line
                  </a>
                  <a href="/contact" className="menu-sesondary-link">
                    Facebook
                  </a>
                </div>
                <div className="secondary-links-block">
                  <p className="menu-small-text">Get in touch</p>
                  <a href="#" className="menu-sesondary-link">
                    Email
                  </a>
                  <a href="#" className="menu-sesondary-link">
                    電話
                  </a>
                </div>
                <div className="secondary-links-block">
                  <p className="menu-small-text">Template</p>
                  <a
                    href="https://webflow.com/templates/html/stada-agency-website-template"
                    target="_blank"
                    className="menu-sesondary-link"
                  >
                    關於我們
                  </a>
                  <a
                    href="https://www.metrik.studio/webflow-templates"
                    target="_blank"
                    className="menu-sesondary-link"
                  >
                    網站作品｜案例
                  </a>
                </div>
              </div>
              <div className="menu-main-links">
                <a
                  data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                  href="/"
                  aria-current="page"
                  className="menu-link w-inline-block w--current"
                >
                  <div
                    className="menu-link-text"
                    style={{
                      transform:
                        "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    關於我們
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-menu-link-icon"
                  />
                </a>
                <a
                  data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                  href="www.zensorrd.com"
                  className="menu-link w-inline-block"
                >
                  <div
                    className="menu-link-text"
                    style={{
                      transform:
                        "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    一頁式網站
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-menu-link-icon"
                  />
                </a>
                <a
                  data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                  href="/features"
                  className="menu-link w-inline-block"
                >
                  <div
                    className="menu-link-text"
                    style={{
                      transform:
                        "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    商業攝影
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-menu-link-icon"
                  />
                </a>
                <a
                  data-w-id="03e10da9-d56b-f42b-a87a-0d5fd44d5e75"
                  href="/about"
                  className="menu-link w-inline-block"
                >
                  <div
                    className="menu-link-text"
                    style={{
                      transform:
                        "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    企業形象網站
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-menu-link-icon"
                  />
                </a>
                <a
                  data-w-id="4f963323-4aa1-e2d1-d1f7-b679d51590a7"
                  href="/journal"
                  className="menu-link w-inline-block"
                >
                  <div
                    className="menu-link-text"
                    style={{
                      transform:
                        "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    網站SEO
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-menu-link-icon"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="b1ec2d20-05dc-077d-da18-86120beceaae"
              className="close-button"
              style={{ opacity: 0 }}
            >
              <img
                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6697fb309b7a20920ffdcdb1_close_24dp_181720_FILL0_wght500_GRAD0_opsz24.svg"
                loading="lazy"
                alt=""
                className="close-button-icon"
                style={{}}
              />
              <div className="menu-close-text">Close</div>
            </div>
            <div
              className="menu-background-color"
              style={{
                transform:
                  "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="menu-delay-for-animations" />
          </div>
        </div>
        <nav className="navbar">
          <div className="nav-inner">
            <a
              href="/"
              aria-current="page"
              className="brand-link w-nav-brand w--current"
            >
              <div className="brand-name">Stada</div>
            </a>
            <div className="nav-menu-wrapper">
              <div
                data-delay={0}
                data-hover="true"
                data-w-id="9db95670-a172-eb68-49e7-0e2e01445857"
                className="dropdown w-dropdown"
              >
                <div
                  data-w-id="9db95670-a172-eb68-49e7-0e2e01445858"
                  className="nav-link-block is-dropdown w-dropdown-toggle"
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="nav-text">Features</div>
                  <div className="nav-dropdown-icon">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc3da136783012f5769_arrow_downward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                      alt=""
                      className="icon is-nav-icon"
                    />
                    <div
                      className="nav-dropdown-icon-bg"
                      style={{
                        display: "none",
                        transform:
                          "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </div>
                <nav
                  className="dropdown-list w-dropdown-list"
                  style={{
                    transform:
                      "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                  id="w-dropdown-list-0"
                  aria-labelledby="w-dropdown-toggle-0"
                >
                  <div className="dropdown-links-wrapper">
                    <div className="menu-features-wrapper w-dyn-list">
                      <div
                        role="list"
                        className="menu-features-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="menu-feature-item w-dyn-item"
                        >
                          <div className="menu-feature-image">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19.webp"
                              loading="lazy"
                              alt="Design"
                              sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                              srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19.webp 2912w"
                              className="cover-image"
                            />
                          </div>
                          <a
                            aria-label="Feature link"
                            href="/feature/design"
                            className="menu-feature-content-link w-inline-block"
                            tabIndex={0}
                          >
                            <div className="menu-feature-title">Design</div>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-large"
                            />
                          </a>
                        </div>
                        <div
                          role="listitem"
                          className="menu-feature-item w-dyn-item"
                        >
                          <div className="menu-feature-image">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15.webp"
                              loading="lazy"
                              alt="Innovation"
                              sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                              srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15.webp 2912w"
                              className="cover-image"
                            />
                          </div>
                          <a
                            aria-label="Feature link"
                            href="/feature/innovation"
                            className="menu-feature-content-link w-inline-block"
                            tabIndex={0}
                          >
                            <div className="menu-feature-title">Innovation</div>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-large"
                            />
                          </a>
                        </div>
                        <div
                          role="listitem"
                          className="menu-feature-item w-dyn-item"
                        >
                          <div className="menu-feature-image">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp"
                              loading="lazy"
                              alt="Compatibility"
                              sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                              srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-2600.webp 2600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp 2912w"
                              className="cover-image"
                            />
                          </div>
                          <a
                            aria-label="Feature link"
                            href="/feature/compatibility"
                            className="menu-feature-content-link w-inline-block"
                            tabIndex={0}
                          >
                            <div className="menu-feature-title">
                              Compatibility
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-large"
                            />
                          </a>
                        </div>
                        <div
                          role="listitem"
                          className="menu-feature-item w-dyn-item"
                        >
                          <div className="menu-feature-image">
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3.webp"
                              loading="lazy"
                              alt="Quality"
                              sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                              srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3.webp 2912w"
                              className="cover-image"
                            />
                          </div>
                          <a
                            aria-label="Feature link"
                            href="/feature/quality"
                            className="menu-feature-content-link w-inline-block"
                            tabIndex={0}
                          >
                            <div className="menu-feature-title">Quality</div>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon is-large"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-2nd-links">
                      <a href="/features" className="simple-link" tabIndex={0}>
                        All features
                      </a>
                      <a href="/contact" className="simple-link" tabIndex={0}>
                        Get in touch
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="nav-main-links">
                <a
                  href="/"
                  aria-current="page"
                  className="nav-link-block w-inline-block w--current"
                >
                  <div className="nav-text">Home</div>
                </a>
                <link rel="prefetch" href="/" />
                <a href="/services" className="nav-link-block w-inline-block">
                  <div className="nav-text">Services</div>
                </a>
                <link rel="prefetch" href="/services" />
                <a href="/features" className="nav-link-block w-inline-block">
                  <div className="nav-text">Features</div>
                </a>
                <link rel="prefetch" href="/features" />
                <a href="/about" className="nav-link-block w-inline-block">
                  <div className="nav-text">About</div>
                </a>
                <link rel="prefetch" href="/about" />
                <a href="/journal" className="nav-link-block w-inline-block">
                  <div className="nav-text">Journal</div>
                </a>
                <a href="/store" className="nav-link-block w-inline-block">
                  <div className="nav-text">Store</div>
                </a>
                <a href="/contact" className="nav-link-block w-inline-block">
                  <div className="nav-text">Contact</div>
                </a>
              </div>
            </div>
            <div
              data-node-type="commerce-cart-wrapper"
              data-open-product=""
              data-wf-cart-type="rightDropdown"
              data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
comment
extraItems {
  name
  pluginId
  pluginName
  price {
    value
    unit
    decimalValue
    string
  }
}
id
startedOn
statusFlags {
  hasDownloads
  hasSubscription
  isFreeOrder
  requiresShipping
}
subtotal {
  value
  unit
  decimalValue
  string
}
total {
  value
  unit
  decimalValue
  string
}
updatedOn
userItems {
  count
  id
  price {
    value
    unit
    decimalValue
    string
  }
  product {
    id
    cmsLocaleId
    f__draft_0ht
    f__archived_0ht
    f_name_
    f_sku_properties_3dr {
      id
      name
      enum {
        id
        name
        slug
      }
    }
  }
  rowTotal {
    value
    unit
    decimalValue
    string
  }
  sku {
    cmsLocaleId
    f__draft_0ht
    f__archived_0ht
    f_sku_values_3dr {
      property {
        id
      }
      value {
        id
      }
    }
    id
  }
  subscriptionFrequency
  subscriptionInterval
  subscriptionTrial
}
userItemsCount
    }
  }
  site {
    id
    commerce {
businessAddress {
  country
}
defaultCountry
defaultCurrency
quickCheckoutEnabled
    }
  }
}"
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper cart"
            >
              <div
                data-node-type="commerce-cart-container-wrapper"
                style={{ display: "none" }}
                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightDropdown cart-wrapper"
              >
                <div
                  role="dialog"
                  data-node-type="commerce-cart-container"
                  className="w-commerce-commercecartcontainer cart-container"
                >
                  <div className="w-commerce-commercecartheader cart-header">
                    <p className="your-cart-text">Your cart</p>
                    <a
                      href="#"
                      data-node-type="commerce-cart-close-link"
                      role="button"
                      aria-label="Close cart"
                      className="w-commerce-commercecartcloselink cart-close-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6697fb309b7a20920ffdcdb1_close_24dp_181720_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-trash-icon"
                      />
                    </a>
                  </div>
                  <div className="w-commerce-commercecartformwrapper">
                    <form
                      data-node-type="commerce-cart-form"
                      style={{ display: "none" }}
                      className="w-commerce-commercecartform"
                    >
                      <div
                        className="w-commerce-commercecartlist cart-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e01445874"
                      />
                      <div className="w-commerce-commercecartfooter cart-footer">
                        <div
                          aria-live="polite"
                          aria-atomic="true"
                          className="w-commerce-commercecartlineitem cart-line-item"
                        >
                          <div className="cart-subtotal-text">Subtotal</div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                            className="w-commerce-commercecartordervalue cart-subtotal-text"
                          />
                        </div>
                        <div className="checkout-actions">
                          <div
                            data-node-type="commerce-cart-quick-checkout-actions"
                            style={{ display: "none" }}
                          >
                            <a
                              role="button"
                              aria-haspopup="dialog"
                              aria-label="Apple Pay"
                              data-node-type="commerce-cart-apple-pay-button"
                              tabIndex={0}
                              style={{
                                backgroundImage:
                                  "-webkit-named-image(apple-pay-logo-white)",
                                backgroundSize: "100% 50%",
                                backgroundPosition: "50% 50%",
                                backgroundRepeat: "no-repeat",
                              }}
                              className="w-commerce-commercecartapplepaybutton apple-pay-button"
                            >
                              <div />
                            </a>
                            <a
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              data-node-type="commerce-cart-quick-checkout-button"
                              style={{ display: "none" }}
                              className="w-commerce-commercecartquickcheckoutbutton"
                            >
                              <svg
                                className="w-commerce-commercequickcheckoutgoogleicon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <polygon
                                    id="google-mark-a"
                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                  />
                                  <polygon
                                    id="google-mark-c"
                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                  />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                  />
                                  <path
                                    fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                  />
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use xlinkHref="#google-mark-a" />
                                    </mask>
                                    <path
                                      fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"
                                    />
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use xlinkHref="#google-mark-c" />
                                  </mask>
                                  <path
                                    fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"
                                  />
                                </g>
                              </svg>
                              <svg
                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <polygon
                                    fill="#F05022"
                                    points="7 7 1 7 1 1 7 1"
                                  />
                                  <polygon
                                    fill="#7DB902"
                                    points="15 7 9 7 9 1 15 1"
                                  />
                                  <polygon
                                    fill="#00A4EE"
                                    points="7 15 1 15 1 9 7 9"
                                  />
                                  <polygon
                                    fill="#FFB700"
                                    points="15 15 9 15 9 9 15 9"
                                  />
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a>
                          </div>
                          <a
                            href="/checkout"
                            value="Continue to Checkout"
                            data-node-type="cart-checkout-button"
                            className="w-commerce-commercecartcheckoutbutton checkout-button"
                            data-loading-text="Hang Tight..."
                          >
                            Continue to Checkout
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="w-commerce-commercecartemptystate">
                      <div
                        aria-live="polite"
                        aria-label="This cart is empty"
                        className="empty-cart-text"
                      >
                        Your cart is empty :(
                      </div>
                    </div>
                    <div
                      aria-live="assertive"
                      style={{ display: "none" }}
                      data-node-type="commerce-cart-error"
                      className="w-commerce-commercecarterrorstate error-state"
                    >
                      <div
                        className="error-message w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="9db95670-a172-eb68-49e7-0e2e01445848"
              className="button-for-open-menu"
            >
              <div
                className="burger-menu"
                style={{ width: "2em", height: "1.3em" }}
              >
                <div className="burger-menu-line" />
                <div className="burger-menu-line" />
                <div className="burger-menu-line" />
              </div>
              <div
                className="burger-menu-bg"
                style={{
                  display: "none",
                  transform:
                    "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>
        </nav>
        <main className="main">
          <div className="home-hero">
            <div className="home-hero-content">
              <div className="home-hero-wrapper">
                <div
                  data-w-id="b3a43e50-789b-2236-6fea-b72c39d21874"
                  style={{
                    transform:
                      "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="hero-eyebrown"
                >
                  <div className="icon-block">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6d0ed7eea431f6e6a_stacks_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-eyebrow-icon"
                    />
                  </div>
                  <p className="eyebrow-hero-text">design agency</p>
                </div>
                <h1
                  data-w-id="b3a43e50-789b-2236-6fea-b72c39d21870"
                  style={{
                    transform:
                      "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="heading is-home-title"
                >
                  MyCompany-網頁設計
                </h1>
                <p>花費小預算，增加大收益</p>
                <div
                  data-w-id="b3a43e50-789b-2236-6fea-b72c39d21884"
                  style={{
                    transform:
                      "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="home-hero-button"
                >
                  <a
                    data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                    href="#services"
                    className="button-wrapper w-inline-block"
                  >
                    <div className="button-layout">
                      <div className="button-text">更多資訊</div>
                      <div className="button-bg" style={{}} />
                    </div>
                    <div className="button-icon-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc3da136783012f5769_arrow_downward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="button-icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-lines">
                <div className="bg-lines-gradient" />
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-14.6076%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-14.6076%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </div>
                <div className="bg-line" />
                <div className="bg-line">
                  <div className="interactive-line">
                    <div
                      className="interactive-line-color"
                      style={{
                        display: "block",
                        transform:
                          "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-hero-bg">
              <div className="parallax-trigger">
                <div
                  className="parallax-layout"
                  style={{
                    willChange: "transform",
                    transform:
                      "translate3d(0px, -0.6783%, 0px) scale3d(1.02839, 1.02839, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="slider">
                    <div className="custom-slider">
                      <div className="slider-backgrounds">
                        <div className="slider-inner">
                          <div className="slider-container">
                            <div className="slider-image-block-1" style={{}}>
                              <img
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb899b075a55107d00_stada-img-16.webp"
                                loading="eager"
                                alt="Person use tech gadget"
                                className="slider-image is-1st"
                                style={{}}
                              />
                            </div>
                            <div className="slider-image-block-2" style={{}}>
                              <img
                                src=""
                                alt="Person use tech gadget"
                                className="slider-image is-2nd"
                                style={{}}
                              />
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8.webp"
                              alt="Person use tech gadget"
                              sizes="100vw"
                              srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbb359637979fee7b9_stada-img-8.webp 2912w"
                              className="slider-image-last"
                              style={{}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone.webp"
                      loading="eager"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669ba9bfb5dd3fb12a1e0456_stada-img-16-phone.webp 1200w"
                      className="cover-image for-phone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="services" className="section">
            <a
              data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
              href="https://www.zensor.com.tw"
              className="fullwidth-link w-inline-block"
              style={{}}
            >
              <h2
                data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfda"
                className="heading is-fullwidth-title"
                style={{
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                企業形象網站
              </h2>
              <br />
              <br />
              <div>(套版網站｜RWD網站)</div>
              <div
                data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfdc"
                className="circle-button"
                style={{
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                <div className="circle-button-bg" style={{}} />
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="circle-button-icon"
                  style={{}}
                />
              </div>
              <div className="fullwidth-link-bg" style={{}} />
            </a>
          </section>
          <section className="section">
            <div className="padding">
              <div className="main-container">
                <div id="w-node-_0d97e7f2-7677-0103-d394-d8b1b529b132-c41abecd">
                  <div className="eyebrow-block">
                    <div className="icon-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-eyebrow-icon"
                      />
                    </div>
                    <p className="eyebrow-text">What we do</p>
                  </div>
                </div>
                <div
                  id="w-node-_3e2ecc0f-542d-8997-9376-5ddc2576004a-c41abecd"
                  className="service-content"
                >
                  <div className="service-image">
                    <div className="reveal-image-trigger">
                      <img
                        loading="lazy"
                        alt="Person use tech gadget"
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3.webp"
                        sizes="(max-width: 479px) 128.6328125px, (max-width: 767px) 153.43238830566406px, (max-width: 991px) 21vw, (max-width: 1439px) 50vw, (max-width: 1919px) 754.1220703125px, 42vw"
                        srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-2600.webp 2600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3.webp 2912w"
                        className="cover-image"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="bg-for-animation"
                        style={{ display: "block" }}
                      />
                    </div>
                  </div>
                  <p className="paragraph">
                    這句slogan強調了網站作為品牌形象的重要性，指出網站通常是客戶對品牌的第一印象。公司專注於創造讓人印象深刻的網站，確保客戶的品牌在網上擁有強大的吸引力，從而提高客戶的信任和參與度。
                  </p>
                  <div className="service-cms-page-links w-dyn-list">
                    <div
                      role="list"
                      className="service-cms-page-links-list w-dyn-items"
                    >
                      <div
                        role="listitem"
                        className="service-cms-page-link-item w-dyn-item"
                      >
                        <a href="/service/product" className="link-with-arrows">
                          「專業設計，助您領先數位時代」
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="service-cms-page-link-item w-dyn-item"
                      >
                        <a
                          href="/service/usability"
                          className="link-with-arrows"
                        >
                          「讓您的網站成為客戶的第一印象」
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="service-cms-page-link-item w-dyn-item"
                      >
                        <a
                          href="/service/development"
                          className="link-with-arrows"
                        >
                          「打造專屬您的獨特網站，提升品牌價值」
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  id="w-node-_3e2ecc0f-542d-8997-9376-5ddc25760056-c41abecd"
                  className="paragraph is-sticky"
                >
                  一頁式網站
                </p>
              </div>
            </div>
          </section>
          <section className="section with-borders">
            <div className="padding">
              <div className="main-container">
                <div
                  id="w-node-fd94e481-9f57-042f-d7da-018c52aa2861-c41abecd"
                  className="image-size-small"
                >
                  <div className="reveal-image-trigger">
                    <img
                      loading="lazy"
                      alt="Office desk"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4.webp"
                      sizes="(max-width: 479px) 76.62890625px, (max-width: 991px) 26vw, (max-width: 1919px) 28vw, 29vw"
                      srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4-p-2600.webp 2600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8bef7d706d72b0918324_stada-potrait-img-4.webp 2912w"
                      className="cover-image"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                    <div
                      className="bg-for-animation is-dark-color"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
                <div
                  id="w-node-_8fb99f96-0343-01e2-6610-c8cd5cd90678-c41abecd"
                  className="image-with-text"
                >
                  <div
                    id="w-node-ea5e50a9-d32e-b9ca-154d-86ac548c4dd1-c41abecd"
                    className="image-size-medium"
                  >
                    <div className="reveal-image-trigger">
                      <img
                        loading="lazy"
                        alt="Portrait of the team"
                        src="https://assets.website-files.com/6063be93db8e103fd1540700/6063c4d52832008f03eed114_With%20Relume%201%402x.png"
                        sizes="(max-width: 479px) 154.6390380859375px, (max-width: 767px) 35vw, (max-width: 991px) 26vw, (max-width: 1439px) 50vw, (max-width: 1919px) 50vw, 50vw"
                        className="cover-image"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="bg-for-animation is-dark-color"
                        style={{ display: "block" }}
                      />
                    </div>
                  </div>
                  <p className="paragraph is-large">
                    此slogan專注於定制化和品牌價值，強調公司能夠根據客戶的需求和品牌形象，創造出獨一無二的網站。這表明公司重視客戶的品牌，致力於通過精心設計來提升其品牌價值，使網站成為品牌增值的關鍵一環。
                  </p>
                </div>
                <p
                  id="w-node-ba50089b-4b59-264e-9143-947b8f33a08d-c41abecd"
                  className="paragraph is-sticky"
                >
                  SEO優化
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="padding">
              <div className="main-container">
                <div id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c261-c41abecd">
                  <div className="eyebrow-block">
                    <div className="icon-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-eyebrow-icon"
                      />
                    </div>
                    <p className="eyebrow-text">Company</p>
                  </div>
                </div>
                <div
                  id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c264-c41abecd"
                  className="cards-wrapper"
                >
                  <div className="card-title-block">
                    <h2 className="heading is-extralarge">
                      「創新設計，讓您的網站脫穎而出」
                    </h2>
                    <a
                      id="w-node-_4f18f1da-1e0a-2dad-3a97-4b92f5bc2c75-c41abecd"
                      href="/about"
                      className="simple-link"
                    >
                      More about us
                    </a>
                  </div>
                  <div className="cards">
                    <div
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c26b-c41abecd"
                      data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c26b"
                      className="card"
                      style={{}}
                    >
                      <div className="card-icon with-margin">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-card-icon"
                        />
                      </div>
                      <p className="card-paragraph">
                        <strong>
                          這句slogan突出了創新和差異化設計的重要性，表明公司專注於創造獨特且有影響力的網站。通過這個slogan，強調了公司致力於為客戶提供與眾不同的設計方案，幫助他們在競爭激烈的網絡世界中脫穎而出，從而吸引更多的潛在客戶。
                        </strong>
                      </p>
                    </div>
                    <div
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c274-c41abecd"
                      data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c274"
                      className="card"
                      style={{}}
                    >
                      <div className="card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-card-icon"
                        />
                      </div>
                      <div className="card-content">
                        <p className="card-paragraph">Our Values</p>
                        <p className="card-text-small">
                          這個slogan強調了公司專注於數位化的未來發展，目標是幫助客戶通過精心設計的網站在全球市場上脫穎而出。
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c27c-c41abecd"
                      data-w-id="0f1a54fb-6925-5097-5e99-5f4ecfa8c27c"
                      className="card"
                      style={{}}
                    >
                      <div className="card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6f994f099c6fa0af1_visibility_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-card-icon"
                        />
                      </div>
                      <div className="card-content">
                        <p className="card-paragraph">Our Journey</p>
                        <p className="card-text-small">
                          此slogan專注於定制化和品牌價值，強調公司能夠根據客戶的需求和品牌形象，創造出獨一無二的網站。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  id="w-node-_0f1a54fb-6925-5097-5e99-5f4ecfa8c284-c41abecd"
                  className="paragraph is-sticky"
                >
                  商業攝影
                </p>
              </div>
            </div>
          </section>
          <section className="section with-bg-dark">
            <div className="padding">
              <div className="main-container">
                <div id="w-node-_8370794b-f6ab-a9b0-56de-0c1faa6af515-c41abecd">
                  <div className="eyebrow-block">
                    <div className="icon-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6695ce27515b5811a_deployed_code_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt=""
                        className="icon is-eyebrow-icon"
                      />
                    </div>
                    <p className="eyebrow-text">Features</p>
                  </div>
                </div>
                <div
                  id="w-node-_17adc12d-78a0-5543-81dd-4bc4bf3b431c-c41abecd"
                  className="features-content-flex"
                >
                  <h2 className="heading is-extralarge">創意驅動，技術為本</h2>
                  <div className="features-wrapper w-dyn-list">
                    <div role="list" className="features-grid w-dyn-items">
                      <div role="listitem" className="feature-item w-dyn-item">
                        <div className="feature-image">
                          <div className="reveal-image-trigger">
                            <img
                              loading="lazy"
                              alt=""
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19.webp"
                              className="cover-image"
                              style={{
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                              }}
                            />
                            <div
                              className="bg-for-animation is-dark-color"
                              style={{ display: "block" }}
                            />
                          </div>
                        </div>
                        <a
                          aria-label="Feature link"
                          data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                          style={{
                            transform:
                              "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            opacity: 0,
                          }}
                          href="/feature/design"
                          className="feature-content-link w-inline-block"
                        >
                          <h3
                            data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                            className="heading is-feature-title"
                            style={{}}
                          >
                            Design
                          </h3>
                          <div
                            data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                            className="feature-line"
                            style={{}}
                          />
                          <div
                            data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                            className="feature-more-block"
                            style={{}}
                          >
                            <p className="case-study-category-text">More</p>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon in-feature-icon"
                            />
                          </div>
                          <div
                            data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                            className="feature-bg"
                            style={{}}
                          />
                        </a>
                      </div>
                      <div role="listitem" className="feature-item w-dyn-item">
                        <div className="feature-image">
                          <div className="reveal-image-trigger">
                            <img
                              loading="lazy"
                              alt=""
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15.webp"
                              className="cover-image"
                              style={{
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                              }}
                            />
                            <div
                              className="bg-for-animation is-dark-color"
                              style={{ display: "block" }}
                            />
                          </div>
                        </div>
                        <a
                          aria-label="Feature link"
                          data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                          style={{
                            transform:
                              "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            opacity: 0,
                          }}
                          href="https://www.zensorrd.com"
                          className="feature-content-link w-inline-block"
                        >
                          <h3
                            data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                            className="heading is-feature-title"
                            style={{}}
                          >
                            Innovation
                          </h3>
                          <div
                            data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                            className="feature-line"
                            style={{}}
                          />
                          <div
                            data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                            className="feature-more-block"
                            style={{}}
                          >
                            <p className="case-study-category-text">More</p>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon in-feature-icon"
                            />
                          </div>
                          <div
                            data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                            className="feature-bg"
                            style={{}}
                          />
                        </a>
                      </div>
                      <div role="listitem" className="feature-item w-dyn-item">
                        <div className="feature-image">
                          <div className="reveal-image-trigger">
                            <img
                              loading="lazy"
                              alt=""
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp"
                              className="cover-image"
                              style={{
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                              }}
                            />
                            <div
                              className="bg-for-animation is-dark-color"
                              style={{ display: "block" }}
                            />
                          </div>
                        </div>
                        <a
                          aria-label="Feature link"
                          data-w-id="07d9a56e-d643-2bf8-806a-32751f6a64a2"
                          style={{
                            transform:
                              "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            opacity: 0,
                          }}
                          href="/feature/compatibility"
                          className="feature-content-link w-inline-block"
                        >
                          <h3
                            data-w-id="5de2f2dd-e901-6701-f8f6-873bf69fa7c7"
                            className="heading is-feature-title"
                            style={{}}
                          >
                            Compatibility
                          </h3>
                          <div
                            data-w-id="8c408de9-d384-9933-3fee-e2e760e7e2a7"
                            className="feature-line"
                            style={{}}
                          />
                          <div
                            data-w-id="4289e887-07ce-5274-3030-580c1ab92bcb"
                            className="feature-more-block"
                            style={{}}
                          >
                            <p className="case-study-category-text">More</p>
                            <img
                              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                              loading="lazy"
                              alt=""
                              className="icon in-feature-icon"
                            />
                          </div>
                          <div
                            data-w-id="2388d243-2369-6d3b-32f2-2b13ff7a6ace"
                            className="feature-bg"
                            style={{}}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    id="w-node-b11b5a39-657b-4d88-a15d-8479a328e955-c41abecd"
                    href="/features"
                    className="simple-link-blue"
                  >
                    All features
                  </a>
                </div>
                <p
                  id="w-node-_9db66ef5-79ba-ccf2-b611-2ffbbcc49659-c41abecd"
                  className="paragraph is-sticky"
                >
                  其他行銷
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="main-container large-paddings">
              <h2
                id="w-node-_7f252330-861b-fbf3-b542-876890600281-c41abecd"
                className="heading is-extralarge"
              >
                服務內容：
              </h2>
            </div>
            <div
              id="w-node-c71144d9-2650-daf1-da99-a2639c7ddcaf-c41abecd"
              className="blog-wrapper w-dyn-list"
            >
              <div role="list" className="blog-list w-dyn-items">
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    aria-label="Blog post link"
                    id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                    data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                    href="/blog/sustainable-tech-how-green-innovations-are-transforming-world"
                    className="main-container is-blog-container w-inline-block"
                  >
                    <div
                      id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                      className="blog-small-text"
                    >
                      Jul 18
                    </div>
                    <p
                      id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                      className="blog-article-name"
                    >
                      它傳達了公司致力於通過專業設計來助力客戶的品牌成長和成功，成為其商業發展的合作夥伴。
                    </p>
                    <div
                      id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                      className="main-link in-blog"
                    >
                      <div className="main-link-icon-block">
                        <div className="main-link-icon-bg is-2nd" />
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          alt=""
                          className="main-link-icon"
                        />
                      </div>
                      <div className="main-link-open-text in-blog" style={{}}>
                        read
                      </div>
                    </div>
                    <div
                      id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                      data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                      className="blog-line"
                      style={{}}
                    />
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    aria-label="Blog post link"
                    id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                    data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                    href="/blog/the-role-of-ai-in-shaping-the-future-of-smart-devices"
                    className="main-container is-blog-container w-inline-block"
                  >
                    <div
                      id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                      className="blog-small-text"
                    >
                      Jul 18
                    </div>
                    <p
                      id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                      className="blog-article-name"
                    >
                      此slogan專注於定制化和品牌價值，強調公司能夠根據客戶的需求和品牌形象
                    </p>
                    <div
                      id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                      className="main-link in-blog"
                    >
                      <div className="main-link-icon-block">
                        <div className="main-link-icon-bg is-2nd" />
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          alt=""
                          className="main-link-icon"
                        />
                      </div>
                      <div className="main-link-open-text in-blog" style={{}}>
                        read
                      </div>
                    </div>
                    <div
                      id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                      data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                      className="blog-line"
                      style={{}}
                    />
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    aria-label="Blog post link"
                    id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                    data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                    href="/blog/how-user-centric-design-is-revolutionizing-smart-gadgets"
                    className="main-container is-blog-container w-inline-block"
                  >
                    <div
                      id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                      className="blog-small-text"
                    >
                      Jul 18
                    </div>
                    <p
                      id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                      className="blog-article-name"
                    >
                      How User-Centric Design is Revolutionizing Smart Gadgets
                    </p>
                    <div
                      id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                      className="main-link in-blog"
                    >
                      <div className="main-link-icon-block">
                        <div className="main-link-icon-bg is-2nd" />
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          alt=""
                          className="main-link-icon"
                        />
                      </div>
                      <div className="main-link-open-text in-blog" style={{}}>
                        read
                      </div>
                    </div>
                    <div
                      id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                      data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                      className="blog-line"
                      style={{}}
                    />
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    aria-label="Blog post link"
                    id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                    data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                    href="/blog/the-future-of-wearable-tech-innovations-and-trends-to-watch"
                    className="main-container is-blog-container w-inline-block"
                  >
                    <div
                      id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                      className="blog-small-text"
                    >
                      Jul 18
                    </div>
                    <p
                      id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                      className="blog-article-name"
                    >
                      The Future of Wearable Tech: Innovations and Trends to
                      Watch
                    </p>
                    <div
                      id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                      className="main-link in-blog"
                    >
                      <div className="main-link-icon-block">
                        <div className="main-link-icon-bg is-2nd" />
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          alt=""
                          className="main-link-icon"
                        />
                      </div>
                      <div className="main-link-open-text in-blog" style={{}}>
                        read
                      </div>
                    </div>
                    <div
                      id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                      data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                      className="blog-line"
                      style={{}}
                    />
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    aria-label="Blog post link"
                    id="w-node-_0ba56e40-3053-ed79-2168-e6c34377f6cf-c41abecd"
                    data-w-id="0ba56e40-3053-ed79-2168-e6c34377f6cf"
                    href="/blog/top-5-smart-devices-transforming-daily-life-in-2024"
                    className="main-container is-blog-container w-inline-block"
                  >
                    <div
                      id="w-node-cd4f4756-6402-be4a-e3ed-d2c7cff9f0e0-c41abecd"
                      className="blog-small-text"
                    >
                      Jul 18
                    </div>
                    <p
                      id="w-node-d055a34a-1b5f-c6f5-d42e-fc66c498a59a-c41abecd"
                      className="blog-article-name"
                    >
                      Top 5 Smart Devices Transforming Daily Life in 2024
                    </p>
                    <div
                      id="w-node-aa54c5ef-16d2-8b80-7625-e8417a7c9eeb-c41abecd"
                      className="main-link in-blog"
                    >
                      <div className="main-link-icon-block">
                        <div className="main-link-icon-bg is-2nd" />
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                          alt=""
                          className="main-link-icon"
                        />
                      </div>
                      <div className="main-link-open-text in-blog" style={{}}>
                        read
                      </div>
                    </div>
                    <div
                      id="w-node-_307ffc2e-8f32-75cb-4c48-36c38a9e2f4b-c41abecd"
                      data-w-id="307ffc2e-8f32-75cb-4c48-36c38a9e2f4b"
                      className="blog-line"
                      style={{}}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-container medium-paddings">
              <a
                id="w-node-_0205bcef-2d26-8503-8f33-85d57d1fb7b2-c41abecd"
                href="/journal"
                className="simple-link"
              >
                All blog posts
              </a>
            </div>
          </section>
          <div className="footer">
            <div className="footer-layout">
              <div className="footer-wrapper">
                <div className="main-container">
                  <div
                    id="w-node-_38022ebf-47b1-b5c9-4fe1-6fc4778801c0-cdf922c7"
                    data-w-id="38022ebf-47b1-b5c9-4fe1-6fc4778801c0"
                    className="footre-contact-block"
                    style={{}}
                  >
                    <div className="footer-small-text">Get in touch</div>
                    <a href="#" className="footer-contact-link">
                      company@example.com
                    </a>
                    <a href="#" className="footer-contact-link">
                      +33 (44) 567 89
                    </a>
                  </div>
                  <div
                    id="w-node-b805c6a7-2e25-391b-5d30-1818cdf922cd-cdf922c7"
                    className="footer-main-links"
                  >
                    <div
                      data-w-id="6dc4d3f7-1feb-7d1d-eb75-644710288cff"
                      className="footer-main-links-wrapper"
                      style={{}}
                    >
                      <a
                        data-w-id="224d6c80-9f0d-e6d1-431a-b5fa62444ed2"
                        href="/services"
                        className="footer-large-link"
                        style={{ opacity: 0 }}
                      >
                        Services: Our offerings
                      </a>
                      <a
                        data-w-id="02ea3d74-4934-f2d7-3135-266b3d05b924"
                        href="/features"
                        className="footer-large-link"
                        style={{ opacity: 0 }}
                      >
                        Features: Our experience
                      </a>
                      <a
                        data-w-id="1732bbf2-cb7c-0cf1-5888-bf3fc0857521"
                        href="/contact"
                        className="footer-large-link"
                        style={{ opacity: 0 }}
                      >
                        Contact: Get in touch
                      </a>
                    </div>
                    <div
                      data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6"
                      className="footre-page-links"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      <a
                        href="/"
                        aria-current="page"
                        className="simple-link-blue w--current"
                      >
                        Home
                      </a>
                      <a href="/about" className="simple-link-blue">
                        About
                      </a>
                      <a href="/journal" className="simple-link-blue">
                        Journal
                      </a>
                      <a href="/store" className="simple-link-blue">
                        Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-utility-section">
              <div className="main-container align-center">
                <div
                  id="w-node-_4f1c3f96-9351-ef46-d1ee-e61c42e6a5bd-cdf922c7"
                  className="w-dyn-list"
                >
                  <div role="list" className="footer-socials-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        aria-label="Social link"
                        href="#"
                        className="footer-social-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3a8b2f927ce7f896c3a_youtube-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-footer-social"
                        />
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a
                        aria-label="Social link"
                        href="#"
                        className="footer-social-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3be86afee09c6670653_linkedin-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-footer-social"
                        />
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a
                        aria-label="Social link"
                        href="#"
                        className="footer-social-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c393feb96a6a38785fc6_facebook-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-footer-social"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_4b3c50e8-fd47-cca7-b90c-0c893a2a7de9-cdf922c7"
                  className="footer-utility-wrapper"
                >
                  <div className="footer-utility-links">
                    <a
                      href="/utility-pages/instructions"
                      className="footer-utility-link"
                    >
                      Instructions
                    </a>
                    <a
                      href="/utility-pages/licenses"
                      className="footer-utility-link"
                    >
                      Licenses
                    </a>
                    <a
                      href="http://www.webflow.com"
                      target="_blank"
                      className="footer-utility-link"
                    >
                      Powered by Webflow
                    </a>
                  </div>
                  <div className="footer-utility-links">
                    <a
                      href="https://www.metrik.studio/webflow-templates"
                      target="_blank"
                      className="footer-utility-link"
                    >
                      Webflow templates
                    </a>
                    <a
                      href="https://webflow.com/templates/designers/metrik"
                      target="_blank"
                      className="footer-utility-link"
                    >
                      Made by Metrik.studio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bg">
              <div className="parallax-trigger">
                <div
                  className="parallax-layout"
                  style={{
                    willChange: "transform",
                    transform:
                      "translate3d(0px, -5%, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2.webp"
                    loading="lazy"
                    alt=""
                    className="cover-image"
                  />
                  <div className="bg-for-animation" />
                </div>
              </div>
              <div className="footer-bg-gradient" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// reportWebVitals();
