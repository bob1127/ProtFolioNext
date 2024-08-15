import React from "react";
import Script from "next/script";
import Head from "next/head";

export default function Blog() {
  return (
    <div className="about-root">
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
                        alt
                        className="icon is-social-menu-icon"
                      />
                    </a>
                  </div>
                  <div role="listitem" className="menu-social-item w-dyn-item">
                    <a href="#" className="menu-social-link w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3b3dd27ebf12436fc85_linkedin-logo-black.svg"
                        loading="lazy"
                        alt
                        className="icon is-social-menu-icon"
                      />
                    </a>
                  </div>
                  <div role="listitem" className="menu-social-item w-dyn-item">
                    <a href="#" className="menu-social-link w-inline-block">
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c380c49a871545a7ce42_facebook-logo-black.svg"
                        loading="lazy"
                        alt
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
                    alt
                    className="icon is-menu-link-icon"
                  />
                </a>
                <a
                  data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                  href="/services"
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
                    Services
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt
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
                    Features
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt
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
                    alt
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
                    alt
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
                alt
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
            <div className="menu-delay-for-animations" style={{}} />
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
                style={{}}
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
                      alt
                      className="icon is-nav-icon"
                      style={{}}
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
                  id="w-dropdown-list-0"
                  aria-labelledby="w-dropdown-toggle-0"
                  style={{
                    transform:
                      "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                  }}
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
                              alt=""
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
                              alt
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
                              alt
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
                              alt
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
                              alt
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
                <a href="/" className="nav-link-block w-inline-block">
                  <div className="nav-text">Home</div>
                </a>
                <link rel="prefetch" href="/" />
                <a
                  href="/services"
                  aria-current="page"
                  className="nav-link-block w-inline-block w--current"
                >
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
              data-open-product
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
              data-wf-page-link-href-prefix
              className="w-commerce-commercecartwrapper cart"
            >
              <a
                href="#"
                data-node-type="commerce-cart-open-link"
                aria-haspopup="dialog"
                aria-label="Open empty cart"
                role="button"
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
              >
                <div className="nav-cart-block">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5c975be16ca280369a41_shopping_cart_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                    alt
                    className="icon in-cart"
                  />
                  <div
                    data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                    className="w-commerce-commercecartopenlinkcount products-quantity-text"
                  >
                    0
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
                        alt
                        className="icon is-trash-icon"
                      />
                    </a>
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
          <div className="services-hero">
            <h1
              id="w-node-d79ed735-06bf-e892-3574-38acfc835992-c41abf92"
              data-w-id="d79ed735-06bf-e892-3574-38acfc835992"
              style={{
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
              className="heading is-services-title"
            >
              Services
            </h1>
            <div
              data-w-id="e2596c18-e634-aee1-2cc0-8bd5ca5a34c7"
              style={{
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
              className="hero-circle-block"
            >
              <a
                data-w-id="075e4424-d5b9-95d9-e2af-4e918592e6d2"
                href="#explore"
                className="simple-link is-explore w--current"
              >
                Explore
              </a>
              <div className="hero-circle-border" style={{}} />
            </div>
          </div>
          <section className="section">
            <div className="services-image-size">
              <div className="reveal-image-trigger">
                <img
                  loading="lazy"
                  alt
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2.webp"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2-p-800.webp 800w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2-p-1080.webp 1080w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2-p-1600.webp 1600w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2-p-2000.webp 2000w, https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adbeb4e8ea78e658b96_stada-img-2.webp 2912w"
                  className="cover-image"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  className="bg-for-animation"
                  style={{
                    display: "block",
                    transform:
                      "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </section>
          <section id="explore" className="section">
            <div className="services-wrapper w-dyn-list">
              <div role="list" className="services-list w-dyn-items">
                <div role="listitem" className="service-item w-dyn-item">
                  <a
                    data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                    href="/service/product"
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
                      Product
                    </h2>
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
                        alt
                        className="circle-button-icon"
                        style={{}}
                      />
                    </div>
                    <div className="fullwidth-link-bg" style={{}} />
                  </a>
                  <div className="main-container align-left-top">
                    <div
                      id="w-node-e4b640af-5b9f-0111-6e00-a7b0fa6c31e9-c41abf92"
                      data-w-id="e4b640af-5b9f-0111-6e00-a7b0fa6c31e9"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                    >
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">About the service</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319331-c41abf92"
                      data-w-id="2eb62f39-ffed-1c0f-34b6-c46670319331"
                      style={{
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                      }}
                      className="service-content"
                    >
                      <div className="service-image">
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696a33f2b8263212ed5b814_stada-img-new-5.webp"
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                          <div
                            className="bg-for-animation"
                            style={{
                              display: "block",
                              transform:
                                "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        </div>
                      </div>
                      <p className="service-paragraph">
                        Our process begins with thorough research and ideation,
                        where we identify market needs and brainstorm potential
                        solutions. Our talented designers then create detailed
                        sketches and 3D models, ensuring each concept is both
                        aesthetically pleasing and functionally sound.
                      </p>
                      <a
                        id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319336-c41abf92"
                        href="/service/product"
                        className="simple-link"
                      >
                        Product design &amp; development
                      </a>
                    </div>
                    <p
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319338-c41abf92"
                      className="paragraph is-sticky"
                    >
                      (01)
                    </p>
                  </div>
                </div>
                <div role="listitem" className="service-item w-dyn-item">
                  <a
                    data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                    href="/service/usability"
                    className="fullwidth-link w-inline-block"
                    style={{}}
                  >
                    <h2
                      data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfda"
                      className="heading is-fullwidth-title"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      Usability
                    </h2>
                    <div
                      data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfdc"
                      className="circle-button"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      <div className="circle-button-bg" style={{}} />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="circle-button-icon"
                        style={{}}
                      />
                    </div>
                    <div className="fullwidth-link-bg" style={{}} />
                  </a>
                  <div className="main-container align-left-top">
                    <div
                      id="w-node-e4b640af-5b9f-0111-6e00-a7b0fa6c31e9-c41abf92"
                      data-w-id="e4b640af-5b9f-0111-6e00-a7b0fa6c31e9"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">About the service</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319331-c41abf92"
                      data-w-id="2eb62f39-ffed-1c0f-34b6-c46670319331"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="service-content"
                    >
                      <div className="service-image">
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696a338388edb8aa4d61c90_stada-img-new-6.webp"
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
                      <p className="service-paragraph">
                        We start by understanding the needs and preferences of
                        our target users through comprehensive research and
                        usability studies. This allows us to create detailed
                        user personas and journey maps that guide our design
                        process.
                      </p>
                      <a
                        id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319336-c41abf92"
                        href="/service/usability"
                        className="simple-link"
                      >
                        User experience &amp; interface design
                      </a>
                    </div>
                    <p
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319338-c41abf92"
                      className="paragraph is-sticky"
                    >
                      (02)
                    </p>
                  </div>
                </div>
                <div role="listitem" className="service-item w-dyn-item">
                  <a
                    data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfd9"
                    href="/service/development"
                    className="fullwidth-link w-inline-block"
                    style={{}}
                  >
                    <h2
                      data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfda"
                      className="heading is-fullwidth-title"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      Development
                    </h2>
                    <div
                      data-w-id="a0ca9c58-17ca-f4ed-b1bb-53cff360cfdc"
                      className="circle-button"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      <div className="circle-button-bg" style={{}} />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="circle-button-icon"
                        style={{}}
                      />
                    </div>
                    <div className="fullwidth-link-bg" style={{}} />
                  </a>
                  <div className="main-container align-left-top">
                    <div
                      id="w-node-e4b640af-5b9f-0111-6e00-a7b0fa6c31e9-c41abf92"
                      data-w-id="e4b640af-5b9f-0111-6e00-a7b0fa6c31e9"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                    >
                      <div className="eyebrow-block">
                        <div className="icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6388edb8aa4cb4391_asterisk_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt
                            className="icon is-eyebrow-icon"
                          />
                        </div>
                        <p className="eyebrow-text">About the service</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319331-c41abf92"
                      data-w-id="2eb62f39-ffed-1c0f-34b6-c46670319331"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="service-content"
                    >
                      <div className="service-image">
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6696a33116fb6a7b2cbc5ffd_stada-img-new-4.webp"
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
                      <p className="service-paragraph">
                        Once a product design is finalized, our engineering team
                        brings it to life through the creation of detailed
                        prototypes. These prototypes are not just visual
                        representations but fully functional models that allow
                        us to test every aspect of the product.{" "}
                      </p>
                      <a
                        id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319336-c41abf92"
                        href="/service/development"
                        className="simple-link"
                      >
                        Prototype development &amp; testing
                      </a>
                    </div>
                    <p
                      id="w-node-_2eb62f39-ffed-1c0f-34b6-c46670319338-c41abf92"
                      className="paragraph is-sticky"
                    >
                      (03)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section sec-with-large-link">
            <div className="container">
              <div
                data-w-id="68b329d3-fb86-c45e-2942-4ca3d54544d4"
                className="large-text-wrapper"
              >
                <p className="paragraph is-uppercase-center">Get in touch</p>
                <div className="large-text-with-image">
                  <div
                    className="large-text is-1st"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(-40vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    Future
                  </div>
                  <a
                    data-w-id="68b329d3-fb86-c45e-2942-4ca3d54544dd"
                    href="/services"
                    aria-current="page"
                    className="large-text-link w-inline-block w--current"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(20vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="large-text is-2nd">Ready</div>
                  </a>
                  <div
                    className="large-text is-3rd"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(-25vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    Lifestyle
                  </div>
                  <div className="large-text-image">
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
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb4fdb218366e3d5bf_stada-img-13.webp"
                          loading="lazy"
                          alt="v"
                          className="cover-image"
                        />
                        <div className="bg-for-animation" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                  href="/contact"
                  className="button-wrapper w-inline-block"
                >
                  <div className="button-layout">
                    <div className="button-text" style={{}}>
                      Hire us
                    </div>
                    <div className="button-bg" style={{}} />
                  </div>
                  <div className="button-icon-block">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      className="button-icon"
                      style={{}}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="large-text-bg-color" style={{}} />
          </section>
          <section className="section white-bg with-borders">
            <div className="w-layout-grid form-grid">
              <div
                id="w-node-_1f340198-2448-0e5a-9772-c59c529f3bd2-c41abf92"
                className="form-block"
              ></div>
              <div
                id="w-node-_1f340198-2448-0e5a-9772-c59c529f3bd6-c41abf92"
                className="form-block is-2nd"
              >
                <div className="custom-list">
                  <div className="custom-list-item">
                    <div className="custom-list-icon-block">
                      <div
                        className="custom-list-icon-bg"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6f994f099c6fa0af1_visibility_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="custom-list-icon"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="custom-list-content">
                      <p
                        className="list-title"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Innovative design
                      </p>
                      <p
                        className="list-paragraph"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Our smart devices are designed with both aesthetics and
                        functionality in mind.
                      </p>
                    </div>
                    <div
                      className="list-line"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="custom-list-item">
                    <div className="custom-list-icon-block">
                      <div
                        className="custom-list-icon-bg"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6695ce27515b5811a_deployed_code_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="custom-list-icon"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="custom-list-content">
                      <p
                        className="list-title"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Advanced technology
                      </p>
                      <p
                        className="list-paragraph"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        We leverage the latest advancements in tech to provide
                        you with smart devices.{" "}
                      </p>
                    </div>
                    <div
                      className="list-line"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="custom-list-item">
                    <div className="custom-list-icon-block">
                      <div
                        className="custom-list-icon-bg"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f63f89034abc1f71d8_lightbulb_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="custom-list-icon"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="custom-list-content">
                      <p
                        className="list-title"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        User-centric design
                      </p>
                      <p
                        className="list-paragraph"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Every feature is intuitive, accessible, and enhances
                        your overall experience.
                      </p>
                    </div>
                    <div
                      className="list-line"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="custom-list-item is-last">
                    <div className="custom-list-icon-block">
                      <div
                        className="custom-list-icon-bg"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f60cb1aa0913ff9414_devices_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                        loading="lazy"
                        alt
                        className="custom-list-icon"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                    <div className="custom-list-content">
                      <p
                        className="list-title"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Smart home integration
                      </p>
                      <p
                        className="list-paragraph"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Our smart devices are designed to integrate seamlessly
                        into your smart home ecosystem.
                      </p>
                    </div>
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
                        aria-current="page"
                        className="footer-large-link w--current"
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
                          alt
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
                          alt
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
                          alt
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
                    src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/66914adb5cdd9676a6900347_stada-img-3.webp"
                    loading="lazy"
                    alt
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
