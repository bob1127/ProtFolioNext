"use client";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Button from "./Button";
// import styles from "./style.module.scss";
// import Nav from "./Nav";
import Image from "next/image";
export default function Index() {
  return (
    <div className="z-[99999999999] relative">
      <div className="fullscreen-menu bg-[#1a1a1a]" style={{ display: "none" }}>
        <div className="menu-layout">
          <div className="menu-socials" style={{ opacity: 0 }}>
            <div className="menu-social-wrapper w-dyn-list">
              <div role="list" className="menu-social-list w-dyn-items">
                <div role="listitem" className="menu-social-item w-dyn-item">
                  {/* <a href="#" className="menu-social-link w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c39ba9cdf534275b8533_youtube-logo-black.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-social-menu-icon"
                    />
                  </a> */}
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
                <a href=" " target="_blank" className="menu-sesondary-link">
                  關於我們
                </a>
                <a href="  " target="_blank" className="menu-sesondary-link">
                  網站作品｜案例
                </a>
              </div>
            </div>
            <div className="menu-main-links">
              <a
                data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                href="/about-3"
                aria-current="page"
                className="menu-link hover:text-[#f3f3f3] duration-400  w-inline-block w--current"
              >
                <div
                  className="menu-link-text w-inline-block"
                  style={{
                    transform:
                      "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  關於JEEK
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
                href="/about-2"
                className="menu-link hover:text-[#f3f3f3] duration-400  w-inline-block"
              >
                <div
                  className="menu-link-text w-inline-block"
                  style={{
                    transform:
                      "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  網站案例
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
                href="/Service"
                className="menu-link hover:text-[#f3f3f3] duration-400  w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  服務項目
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
                href="/Blogs"
                className="menu-link hover:text-[#f3f3f3] duration-400  w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  相關文章
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
                href="/Contact"
                className="menu-link hover:text-[#f3f3f3] duration-400 w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  聯絡我們
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
            <div className="brand-name">Jeek</div>
          </a>
          <div className="nav-menu-wrapper">
            <div
              data-delay={0}
              data-hover="true"
              data-w-id="9db95670-a172-eb68-49e7-0e2e01445857"
              className="dropdown w-dropdown "
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
                <div className="nav-text">Jeek</div>
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
                id="w-dropdown-list-0 "
                aria-labelledby="w-dropdown-toggle-0"
                style={{
                  transform:
                    "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 0,
                }}
              >
                <div className="dropdown-links-wrapper  ">
                  <div className="menu-features-wrapper ">
                    <div role="list" className="menu-features-list w-dyn-items">
                      <div
                        role="listitem"
                        className="menu-feature-item w-dyn-item"
                      >
                        <div className="menu-feature-image">
                          <Image
                            src="/images/S__35962890-2.webp"
                            alt="Navbar-ServiceImg" // 替代文字
                            width={700} // 圖片寬度
                            height={700} // 圖片高度
                            priority // 高優先級載入
                            layout="responsive" // 響應式設計
                            placeholder="empty" // 模糊佔位符
                            quality={80} // 圖片質量
                          />
                        </div>
                        <a
                          aria-label="Feature link"
                          href="/about-2"
                          className="menu-feature-content-link w-inline-block"
                          tabIndex={0}
                        >
                          <div className="menu-feature-title">網站案例</div>
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-large"
                          /> */}
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="menu-feature-item w-dyn-item"
                      >
                        <div className="menu-feature-image">
                          <Image
                            src="/images/S__359362890-2.webp"
                            alt="Navbar-ServiceImg" // 替代文字
                            width={700} // 圖片寬度
                            height={700} // 圖片高度
                            priority // 高優先級載入
                            layout="responsive" // 響應式設計
                            placeholder="empty" // 模糊佔位符
                            quality={80} // 圖片質量
                          />
                        </div>
                        <a
                          aria-label="Feature link"
                          href="/about-2"
                          className="menu-feature-content-link w-inline-block"
                          tabIndex={0}
                        >
                          <div className="menu-feature-title">網站案例</div>
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-large"
                          /> */}
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="menu-feature-item w-dyn-item"
                      >
                        <div className="menu-feature-image">
                          {/* <img
                            src="https://www.handz.design/assets/images/image03.jpg?v=02f8e9b2"
                            loading="lazy"
                            alt="Compatibility"
                            sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                            srcSet="https://www.handz.design/assets/images/image03.jpg?v=02f8e9b2"
                            className="cover-image"
                          /> */}
                        </div>
                        <a
                          aria-label="Feature link"
                          href="/about-3"
                          className="menu-feature-content-link w-inline-block"
                          tabIndex={0}
                        >
                          <div className="menu-feature-title">關於我們</div>
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-large"
                          /> */}
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="menu-feature-item w-dyn-item"
                      >
                        <div className="menu-feature-image">
                          <img
                            src="https://static.wixstatic.com/media/a261d7_46e3c75913564d87a4379c0d8d20f335f000.jpg/v1/fill/w_596,h_374,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/a261d7_46e3c75913564d87a4379c0d8d20f335f000.jpg"
                            loading="lazy"
                            alt="Quality"
                            sizes="(max-width: 767px) 92vw, (max-width: 991px) 45vw, (max-width: 1439px) 22vw, (max-width: 1919px) 23vw, 25vw"
                            srcSet="https://static.wixstatic.com/media/a261d7_46e3c75913564d87a4379c0d8d20f335f000.jpg/v1/fill/w_596,h_374,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/a261d7_46e3c75913564d87a4379c0d8d20f335f000.jpg"
                            className="cover-image"
                          />
                        </div>
                        <a
                          aria-label="Feature link"
                          href="/Contact"
                          className="menu-feature-content-link w-inline-block"
                          tabIndex={0}
                        >
                          <div className="menu-feature-title">聯絡方式</div>
                          {/* <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="icon is-large"
                          /> */}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-2nd-links">
                    <a href="/features" className="simple-link" tabIndex={0}>
                      我的Email
                    </a>
                    <a href="/contact" className="simple-link" tabIndex={0}>
                      我的line
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="nav-main-links">
              {/* <a href="/" className="nav-link-block w-inline-block">
                <div className="nav-text">Home</div>
              </a>
              <link rel="prefetch" href="/" /> */}
              <a href="/Service" className="nav-link-block ">
                <div className="nav-text">服務項目</div>
              </a>

              <a
                href="https://next-wp0004.vercel.app"
                target="_blank"
                className="nav-link-block "
              >
                <div className="nav-text">專案範例</div>
              </a>
              {/* <link rel="prefetch" href="/features" /> */}
              <a href="/about" className="nav-link-block ">
                <div className="nav-text">關於我們</div>
              </a>
              {/* <link rel="prefetch" href="/about" /> */}
              <a href="/Contact" className="nav-link-block w-inline-block">
                <div className="nav-text">聯絡我們</div>
              </a>
              {/* <a
                href="/store"
                aria-current="page"
                className="nav-link-block w-inline-block w--current"
              >
                <div className="nav-text">Store</div>
              </a>
              <a href="/contact" className="nav-link-block w-inline-block">
                <div className="nav-text">Contact</div>
              </a> */}
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
            {/* <a
              href="#"
              data-node-type="commerce-cart-open-link"
              aria-haspopup="dialog"
              aria-label="Open cart containing 9 items"
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
                  9
                </div>
              </div>
            </a> */}
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
                            defaultValue={3}
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
                            defaultValue={2}
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
                      <div className="w-commerce-commercecartitem cart-item">
                        <div className="w-commerce-commercecartiteminfo cart-product">
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.product.f_name_%22%7D%7D%5D"
                            className="w-commerce-commercecartproductname cart-title"
                          >
                            Mastering smart personal devices
                          </div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.price%22%7D%7D%5D"
                            className="w-commerce-commercecartproductname cart-product-price"
                          >
                            $&nbsp;89.00&nbsp;USD
                          </div>
                          <ul
                            data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.sku.f_sku_values_3dr%22%7D%7D%5D"
                            className="w-commerce-commercecartoptionlist option-list"
                            data-wf-collection="database.commerceOrder.userItems.3.product.f_sku_properties_3dr"
                            data-wf-template-id="wf-template-9db95670-a172-eb68-49e7-0e2e0144587c"
                          />
                        </div>
                        <div className="cart-quantity-wrapper">
                          <input
                            aria-label="Update quantity"
                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.sku.id%22%7D%7D%5D"
                            className="w-commerce-commercecartquantity cart-quantity"
                            required=""
                            pattern="^[0-9]+$"
                            inputMode="numeric"
                            type="number"
                            name="quantity"
                            autoComplete="off"
                            data-wf-cart-action="update-item-quantity"
                            data-commerce-sku-id="668bd563537f10fdc41ac0bb"
                            defaultValue={3}
                          />
                          <a
                            href="#"
                            role="button"
                            aria-label="Remove item from cart"
                            data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.3.sku.id%22%7D%7D%5D"
                            className="remove-button w-inline-block"
                            data-wf-cart-action="remove-item"
                            data-commerce-sku-id="668bd563537f10fdc41ac0bb"
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
                          $&nbsp;811.00&nbsp;USD
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
    </div>
  );
}
