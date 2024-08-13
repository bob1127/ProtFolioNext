import React from "react";
import Script from "next/script";
import Head from "next/head";
// import Styles from "../../styles/portfolio.module.css";

export default function Blog() {
  return (
    <div className="about-root">
      {/* <Head>
        <link
          href="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/css/stada-design-agency-template.webflow.9aa283b37.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head> */}
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
                  <p className="menu-small-text">General</p>
                  <a href="/store" className="menu-sesondary-link">
                    Store
                  </a>
                  <a href="/contact" className="menu-sesondary-link">
                    Contact
                  </a>
                </div>
                <div className="secondary-links-block">
                  <p className="menu-small-text">Get in touch</p>
                  <a href="#" className="menu-sesondary-link">
                    Email
                  </a>
                  <a href="#" className="menu-sesondary-link">
                    Phone
                  </a>
                </div>
                <div className="secondary-links-block">
                  <p className="menu-small-text">Template</p>
                  <a
                    href="https://webflow.com/templates/html/stada-agency-website-template"
                    target="_blank"
                    className="menu-sesondary-link"
                  >
                    Buy template
                  </a>
                  <a
                    href="https://www.metrik.studio/webflow-templates"
                    target="_blank"
                    className="menu-sesondary-link"
                  >
                    More templates
                  </a>
                </div>
              </div>
              <div className="menu-main-links">
                <a
                  data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                  href="/"
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
                    Home
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
                  href="/services"
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
                    Services
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
                    Features
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
                    About
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
                    Journal
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
            <a href="/" className="brand-link w-nav-brand">
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
                              srcSet="
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-500.webp   500w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-800.webp   800w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-1080.webp 1080w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-1600.webp 1600w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19-p-2000.webp 2000w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696552b7e4bc56feab537e8_stada-img-n-19.webp        2912w
                                                  "
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
                              srcSet="
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-500.webp   500w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-800.webp   800w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-1080.webp 1080w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-1600.webp 1600w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15-p-2000.webp 2000w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655bf3caaa06f871273e4_stada-img-n-15.webp        2912w
                                                  "
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
                              srcSet="
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-500.webp   500w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-800.webp   800w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-1080.webp 1080w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-1600.webp 1600w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-2000.webp 2000w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20-p-2600.webp 2600w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d6f695ce27515bc9718_stada-img-20.webp        2912w
                                                  "
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
                              srcSet="
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-500.webp   500w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-800.webp   800w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-1080.webp 1080w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-1600.webp 1600w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3-p-2000.webp 2000w,
                                                      https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3.webp        2912w
                                                  "
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
                      <a
                        href="/features"
                        aria-current="page"
                        className="simple-link w--current"
                        tabIndex={0}
                      >
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
                <a href="/" className="nav-link-block w-inline-block">
                  <div className="nav-text">Home</div>
                </a>
                <link rel="prefetch" href="/" />
                <a href="/services" className="nav-link-block w-inline-block">
                  <div className="nav-text">Services</div>
                </a>
                <link rel="prefetch" href="/services" />
                <a
                  href="/features"
                  aria-current="page"
                  className="nav-link-block w-inline-block w--current"
                >
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
              <a
                href="#"
                data-node-type="commerce-cart-open-link"
                aria-haspopup="dialog"
                aria-label="Open cart containing 4 items"
                role="button"
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
              >
                <div className="nav-cart-block">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5c975be16ca280369a41_shopping_cart_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                    alt=""
                    className="icon in-cart"
                  />
                  <div
                    data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                    className="w-commerce-commercecartopenlinkcount products-quantity-text"
                  >
                    4
                  </div>
                </div>
              </a>
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
                      style={{}}
                      className="w-commerce-commercecartform"
                    >
                      <div
                        className="w-commerce-commercecartlist cart-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e01445874"
                      >
                        <div className="w-commerce-commercecartitem cart-item">
                          <div className="w-commerce-commercecartiteminfo cart-product">
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_name_%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-title"
                            >
                              In-depth to smart home technology
                            </div>
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.price%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-product-price"
                            >
                              $&nbsp;29.00&nbsp;USD
                            </div>
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_sku_values_3dr%22%7D%7D%5D"
                              className="w-commerce-commercecartoptionlist option-list"
                              data-wf-collection="database.commerceOrder.userItems.0.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e0144587c"
                            />
                          </div>
                          <div className="cart-quantity-wrapper">
                            <input
                              aria-label="Update quantity"
                              data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D"
                              className="w-commerce-commercecartquantity cart-quantity"
                              required=""
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              type="number"
                              name="quantity"
                              autoComplete="off"
                              data-wf-cart-action="update-item-quantity"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b8"
                              defaultValue={2}
                            />
                            <a
                              href="#"
                              role="button"
                              aria-label="Remove item from cart"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D"
                              className="remove-button w-inline-block"
                              data-wf-cart-action="remove-item"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b8"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669a404dbe11861b3efbfb8f_delete_24dp_BB271A_FILL0_wght500_GRAD0_opsz24.svg"
                                loading="lazy"
                                alt=""
                                className="icon is-trash-icon"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="w-commerce-commercecartitem cart-item">
                          <div className="w-commerce-commercecartiteminfo cart-product">
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.product.f_name_%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-title"
                            >
                              Advanced wearable tech design
                            </div>
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.price%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-product-price"
                            >
                              $&nbsp;199.00&nbsp;USD
                            </div>
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.sku.f_sku_values_3dr%22%7D%7D%5D"
                              className="w-commerce-commercecartoptionlist option-list"
                              data-wf-collection="database.commerceOrder.userItems.1.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e0144587c"
                            />
                          </div>
                          <div className="cart-quantity-wrapper">
                            <input
                              aria-label="Update quantity"
                              data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.sku.id%22%7D%7D%5D"
                              className="w-commerce-commercecartquantity cart-quantity"
                              required=""
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              type="number"
                              name="quantity"
                              autoComplete="off"
                              data-wf-cart-action="update-item-quantity"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b9"
                              defaultValue={1}
                            />
                            <a
                              href="#"
                              role="button"
                              aria-label="Remove item from cart"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.1.sku.id%22%7D%7D%5D"
                              className="remove-button w-inline-block"
                              data-wf-cart-action="remove-item"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b9"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669a404dbe11861b3efbfb8f_delete_24dp_BB271A_FILL0_wght500_GRAD0_opsz24.svg"
                                loading="lazy"
                                alt=""
                                className="icon is-trash-icon"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="w-commerce-commercecartitem cart-item">
                          <div className="w-commerce-commercecartiteminfo cart-product">
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.product.f_name_%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-title"
                            >
                              Future technology gadgets insights
                            </div>
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.price%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname cart-product-price"
                            >
                              $&nbsp;59.00&nbsp;USD
                            </div>
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.sku.f_sku_values_3dr%22%7D%7D%5D"
                              className="w-commerce-commercecartoptionlist option-list"
                              data-wf-collection="database.commerceOrder.userItems.2.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e0144587c"
                            />
                          </div>
                          <div className="cart-quantity-wrapper">
                            <input
                              aria-label="Update quantity"
                              data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.sku.id%22%7D%7D%5D"
                              className="w-commerce-commercecartquantity cart-quantity"
                              required=""
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              type="number"
                              name="quantity"
                              autoComplete="off"
                              data-wf-cart-action="update-item-quantity"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b7"
                              defaultValue={1}
                            />
                            <a
                              href="#"
                              role="button"
                              aria-label="Remove item from cart"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.2.sku.id%22%7D%7D%5D"
                              className="remove-button w-inline-block"
                              data-wf-cart-action="remove-item"
                              data-commerce-sku-id="668bd563537f10fdc41ac0b7"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669a404dbe11861b3efbfb8f_delete_24dp_BB271A_FILL0_wght500_GRAD0_opsz24.svg"
                                loading="lazy"
                                alt=""
                                className="icon is-trash-icon"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
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
                          >
                            $&nbsp;316.00&nbsp;USD
                          </div>
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
                    <div
                      className="w-commerce-commercecartemptystate"
                      style={{ display: "none" }}
                    >
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
          <div className="features-hero">
            <div className="container">
              <div className="vertical-flex with-gap">
                <div
                  data-w-id="dbd30077-3d84-ca11-e010-7e7b5b69cdab"
                  style={{
                    transform:
                      "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                  className="features-hero-title"
                >
                  <div className="inline-image">
                    <div className="reveal-image-trigger">
                      <img
                        loading="lazy"
                        alt="Person use tech gadget"
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6.webp"
                        sizes="(max-width: 479px) 104px, (max-width: 767px) 112px, (max-width: 991px) 180px, (max-width: 1439px) 20vw, (max-width: 1919px) 300px, 320px"
                        srcSet="
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-500.webp   500w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-800.webp   800w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-1080.webp 1080w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-1600.webp 1600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-2000.webp 2000w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6-p-2600.webp 2600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6b8d2f5dba1e2deac_stada-img-new-6.webp        2912w
                                      "
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
                  <h1
                    id="w-node-dbd30077-3d84-ca11-e010-7e7b5b69cdae-c41abf4f"
                    className="heading is-features-hero-title"
                  >
                    We are committed to innovation, quality, and user-centric
                    design.
                  </h1>
                </div>
                <div
                  data-w-id="dbd30077-3d84-ca11-e010-7e7b5b69cdb7"
                  style={{
                    transform:
                      "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
                  className="features-hero-content"
                >
                  <a
                    id="w-node-c8015393-8e06-0bb7-e362-a6acd8fcfe46-c41abf4f"
                    href="#explore"
                    className="simple-link is-explore"
                  >
                    Explore features
                  </a>
                  <div
                    id="w-node-_3ad2373a-0965-b0c1-2078-09fd91318cfd-c41abf4f"
                    className="features-hero-paragraph"
                  >
                    <p className="paragraph opacity-85">
                      We leverage the latest advancements in technology to
                      provide you with smart devices that offer superior
                      performance and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="explore" className="section with-bg-dark">
            <div className="padding small-paddings">
              <div className="container">
                <div className="large-features-wrapper w-dyn-list">
                  <div role="list" className="large-features-list w-dyn-items">
                    <div
                      role="listitem"
                      className="large-feature-item w-dyn-item"
                    >
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
                        data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                        href="/feature/design"
                        className="feature-title-link w-inline-block"
                      >
                        <h2 className="heading is-feature-large-title">
                          Design
                        </h2>
                        <div
                          data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                          className="feature-title-link-line"
                          style={{}}
                        />
                      </a>
                      <div className="large-feature-gallery w-dyn-list">
                        <div
                          role="list"
                          className="large-feature-gallery-list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6cbed59380266cfeac2_stada-img-n-21.webp"
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
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6cbecf6f5dbebf0ceba_stada-img-n-18.webp"
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
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/669655332bb09bc39adf4ec7_stada-img-n-20.webp"
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
                        </div>
                        <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="large-feature-item w-dyn-item"
                    >
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
                        data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                        href="/feature/innovation"
                        className="feature-title-link w-inline-block"
                      >
                        <h2 className="heading is-feature-large-title">
                          纏普科技
                        </h2>
                        <p>
                          我們專注於為企業打造獨特而吸引人的網頁設計，幫助您的品牌在數位世界中脫穎而出。
                        </p>
                        <div
                          data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                          className="feature-title-link-line"
                          style={{}}
                        />
                      </a>
                      <div className="large-feature-gallery w-dyn-list">
                        <div
                          role="list"
                          className="large-feature-gallery-list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e49ee8e710e1de70b0_stada-img-n-30.webp"
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
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e4ed59380266d00266_stada-img-n-8.webp"
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
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d6e4b75f918dc8608ccf_stada-img-n-2.webp"
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
                        </div>
                        <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="large-feature-item w-dyn-item"
                    >
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
                        data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                        href="/feature/compatibility"
                        className="feature-title-link w-inline-block"
                      >
                        <h2 className="heading is-feature-large-title">
                          Compatibility
                        </h2>
                        <div
                          data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                          className="feature-title-link-line"
                          style={{}}
                        />
                      </a>
                      <div className="large-feature-gallery w-dyn-list">
                        <div
                          role="list"
                          className="large-feature-gallery-list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
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
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d746de317f059b8f3db_stada-img-21.webp"
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
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/66969d71e1789502face9037_stada-img-23.webp"
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
                        </div>
                        <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="large-feature-item w-dyn-item"
                    >
                      <div className="feature-image">
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697db71df85f60ba51311ba_stada-img-n-3.webp"
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                          <div
                            className="bg-for-animation is-dark-color"
                            style={{
                              display: "block",
                              transform:
                                "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        </div>
                      </div>
                      <a
                        aria-label="Feature link"
                        data-w-id="3693517e-89e9-2f96-cace-c1d04dc6f48a"
                        href="/feature/quality"
                        className="feature-title-link w-inline-block"
                      >
                        <h2 className="heading is-feature-large-title">
                          Quality
                        </h2>
                        <div
                          data-w-id="d2d71c0e-fe7a-b314-737c-3742dc22a2df"
                          className="feature-title-link-line"
                          style={{}}
                        />
                      </a>
                      <div className="large-feature-gallery w-dyn-list">
                        <div
                          role="list"
                          className="large-feature-gallery-list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9d99f2d740455aad3c6_stada-img-n-10.webp"
                                className="cover-image"
                                style={{
                                  transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                              <div
                                className="bg-for-animation is-dark-color"
                                style={{
                                  display: "block",
                                  transform:
                                    "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9dae472fdc9bf452bfc_stada-img-n-9.webp"
                                className="cover-image"
                                style={{
                                  transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                              <div
                                className="bg-for-animation is-dark-color"
                                style={{
                                  display: "block",
                                  transform:
                                    "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="large-feature-gallery-item w-dyn-item w-dyn-repeater-item"
                          >
                            <div className="reveal-image-trigger">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697d9e8f74db8bef6daa54d_stada-img-6.webp"
                                className="cover-image"
                                style={{
                                  transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                              <div
                                className="bg-for-animation is-dark-color"
                                style={{
                                  display: "block",
                                  transform:
                                    "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="empty-state-hidden w-dyn-hide w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-black"
                      style={{ fontSize: 40, textAlign: "center" }}
                    >
                      案例陸續更新中，歡迎商家互惠
                    </p>
                  </div>
                </div>
              </div>
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
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Services: Our offerings
                      </a>
                      <a
                        data-w-id="02ea3d74-4934-f2d7-3135-266b3d05b924"
                        href="/features"
                        aria-current="page"
                        className="footer-large-link w--current"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Features: Our experience
                      </a>
                      <a
                        data-w-id="1732bbf2-cb7c-0cf1-5888-bf3fc0857521"
                        href="/contact"
                        className="footer-large-link"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Contact: Get in touch
                      </a>
                    </div>
                    <div
                      data-w-id="60710c24-c4e8-9d65-10d7-1ada286361b6"
                      className="footre-page-links"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                    >
                      <a href="/" className="simple-link-blue">
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
                      "translate3d(0px, -0.5804%, 0px) scale3d(1.0279, 1.0279, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb5cdd9676a6900347_stada-img-3.webp"
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
