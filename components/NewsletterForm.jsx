import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { Accordion, AccordionItem } from "@nextui-org/react";
export default function NewsletterForm() {
  const [isOpen, setIsOpen] = useState(null); // 紀錄當前開啟的 Modal 編號

  // 處理開啟或關閉 Modal
  const handleOpen = (id) => {
    setIsOpen(id);
  };
  const handleClose = () => {
    setIsOpen(null);
  };

  useEffect(() => {
    // 动态加载 Mailchimp 验证脚本
    const script1 = document.createElement("script");
    script1.src =
      "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script1.type = "text/javascript";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = `
      (function($) {
        window.fnames = new Array(); 
        window.ftypes = new Array();
        fnames[0] = 'EMAIL'; ftypes[0] = 'email';
        fnames[2] = 'FNAME'; ftypes[2] = 'text';
        fnames[1] = 'PHONE'; ftypes[1] = 'number';
        fnames[4] = 'GENDER'; ftypes[4] = 'radio';
      }(jQuery));
      var $mcj = jQuery.noConflict(true);
    `;
    document.body.appendChild(script2);

    // 清理函数，以便在组件卸载时移除脚本
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [plans, setPlans] = useState({
    plan1: false,
    plan2: false,
    plan3: false,
  });
  const [status, setStatus] = useState(null);

  const handleCheckboxChange = (event) => {
    setPlans({ ...plans, [event.target.name]: event.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      setStatus("Name and email are required fields.");
      return;
    }

    const { plan1, plan2, plan3 } = plans;
    const selectedPlans = [];
    if (plan1) selectedPlans.push("Plan 1");
    if (plan2) selectedPlans.push("Plan 2");
    if (plan3) selectedPlans.push("Plan 3");

    try {
      const res = await fetch("https://www.jeek-webdesign.com.tw", {
        // 使用絕對 URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          name,
          gender,
          plans: selectedPlans,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Subscription successful");
        setEmail("");
        setPhone("");
        setName("");
        setGender("");
        setPlans({ plan1: false, plan2: false, plan3: false });
      } else {
        setStatus(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error); // 錯誤記錄
      setStatus("An error occurred");
    }
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="   overflow-y-scroll  2xl:w-[800px]  md:h-full   w-full mx-auto  bg-white rounded-lg">
      <div id="mc_embed_signup ">
        <form
          action="https://gmail.us9.list-manage.com/subscribe/post?u=e4fe6f68e70ec50f3def8801d&amp;id=9042884b3e&amp;f_id=007753e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate "
          target="_blank"
        >
          <div id="mc_embed_signup_scroll ">
            <div className="indicates-required">
              <h2>填寫資料</h2>
            </div>
            <div className="mc-field-group w-full   xl:w-3/4 2xl:w-2/3">
              <label htmlFor="mce-EMAIL">
                信箱 <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                placeholder="請輸入你的Email"
                className="required  p-3 border-2 w-full py-2 rounded-md border-black email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div className="mc-field-group w-full mt-[15px]   xl:w-3/4 2xl:w-2/3">
              <label htmlFor="mce-FNAME">
                {" "}
                姓名 <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                placeholder="請輸入你的名字"
                className=" p-3 border-2 border-black w-full py-2 rounded-md text"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group mt-[15px]   xl:w-3/4 2xl:w-2/3">
              <label htmlFor="mce-PHONE">聯絡電話</label>
              <input
                type="number"
                name="PHONE"
                className="number p-3 border-2 border-black w-full py-2 rounded-md"
                id="mce-PHONE"
              />
            </div>
            <div className="mc-field-group input-group py-[40px]">
              <strong>選擇您需要的方案</strong>
              <ul className=" gap-2  grid grid-cols-1 md:grid-cols-2 p-0 m-0">
                <li className="bg-black p-8 rounded-md ">
                  <input
                    type="checkbox"
                    name="group[43793][1]"
                    id="mce-group[43793]-43793-0"
                  ></input>
                  <div>
                    <h4 className="text-white text-[22px]">一頁式網站</h4>
                    <b className="text-white mb-[30px]">價格：NT10,000 up</b>
                    <p className="text-[14px] text-white mt-3">- 高轉化率</p>
                    <p className="text-[14px] text-white">
                      - 商業授權圖庫 x 10 (另有商業攝影服務可提供)
                    </p>
                    <p className="text-[14px] text-white">- 客製化設計</p>
                  </div>
                </li>
                <li className="bg-black p-8 rounded-md ">
                  <input
                    type="checkbox"
                    name="group[43793][1]"
                    id="mce-group[43793]-43793-0"
                    data-gtm-form-interact-field-id="0"
                  ></input>
                  <div>
                    <h4 className="text-white text-[22px]">精選方案</h4>

                    <b className="text-white">價格：NT30,000 up</b>

                    <p className="text-[14px] text-white mt-3">
                      - 精美網站版型設計
                    </p>
                    <p className="text-[14px] text-white">- 簡易後台編輯操作</p>
                    <p className="text-[14px] text-white">
                      - 商業授權圖庫 x 10 (另有商業攝影服務可提供)
                    </p>
                    <p className="text-[14px] text-white">- 基本seo優化</p>
                  </div>
                </li>

                <li className="bg-black p-8 rounded-md ">
                  <input
                    type="checkbox"
                    name="group[43793][4]"
                    id="mce-group[43793]-43793-2"
                  ></input>
                  <div>
                    <h4 className="text-white text-[22px]">購物網站</h4>
                    <b className="text-white">價格：NT60,000 up</b>
                    <p className="text-[14px] text-white mt-3">
                      - 客製化網站規劃與設計
                    </p>
                    <p className="text-[14px] text-white">
                      - 包含基本商品去背上架
                    </p>
                    <p className="text-[14px] text-white">- 商品 形象 Banner</p>
                    <p className="text-[14px] text-white">
                      - 公司形象(產品)影片拍攝
                    </p>
                  </div>
                </li>
                <li className="bg-black p-8 rounded-md ">
                  <input
                    type="checkbox"
                    name="group[43793][2]"
                    id="mce-group[43793]-43793-1"
                  ></input>
                  <div>
                    <h4 className="text-white text-[22px]">客製化網站</h4>
                    <b className="text-white">找我談談！</b>
                    <p className="text-[14px] text-white mt-3">
                      - 精選網頁設計版型
                    </p>
                    <p className="text-[14px] text-white">- 基本seo優化</p>
                    <p className="text-[14px] text-white">- 精選網頁設計版型</p>
                    <p className="text-[14px] text-white">- 基本seo優化</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mc-field-group input-group py-[40px]">
              <strong className="">其他聯繫方式：</strong>
              <ul className="p-0 m-0 flex ">
                <li className="mr-5 mt-3">
                  <Button
                    onPress={() => handleOpen(1)}
                    className="w-[130px] h-[130px]"
                  >
                    {" "}
                    <Image
                      src="/images/line-qrcode.jpg"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="contact-line-qrcode"
                      placeholder="empty"
                    ></Image>
                  </Button>
                  <Modal isOpen={isOpen === 1} onOpenChange={handleClose}>
                    <ModalContent className="border p-[100px] rounded-[30px] bg-white border-black">
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex  flex-col  gap-1"></ModalHeader>
                          <ModalBody>
                            <div className="">
                              {/* <Image
                                src="/images/line-qrcode.jpg"
                                width={1000}
                                height={1000}
                                loading="lazy"
                                alt="contact-line-qrcode"
                                placeholder="empty"
                              ></Image> */}
                              <p>Line Qr code</p>
                              <p>掃描加入好友</p>
                            </div>
                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>

                  <label htmlFor="mce-group[43794]-43794-0">Instagram</label>
                </li>
                <li className="mr-5 mt-3">
                  {/* Button 2 */}
                  <Button
                    onPress={() => handleOpen(2)}
                    className="w-[130px] h-[130px]"
                  >
                    <Image
                      src="/images/fb-qrCode.png"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="contact-fb-qrcode"
                      placeholder="empty"
                    />
                  </Button>
                  <Modal isOpen={isOpen === 2} onOpenChange={handleClose}>
                    <ModalContent className="border p-[100px] rounded-[30px] bg-white border-black">
                      <ModalBody>
                        <div>
                          <Image
                            src="/images/fb-qrCode.png"
                            width={1000}
                            height={1000}
                            loading="lazy"
                            alt="contact-fb-qrcode"
                            placeholder="empty"
                          />
                          <p>Instagram QR code</p>
                          <p>掃描加入 Facebook</p>
                        </div>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <label htmlFor="mce-group[43794]-43794-1">Facebook</label>
                </li>
                <li className="mr-5 mt-3">
                  <Button
                    onPress={() => handleOpen(1)}
                    className="w-[130px] h-[130px]"
                  >
                    {" "}
                    <Image
                      src="/images/ig-qrCode.png"
                      width={100}
                      height={100}
                      loading="lazy"
                      alt="contact-line-qrcode"
                      placeholder="empty"
                    ></Image>
                  </Button>
                  <Modal isOpen={isOpen === 1} onOpenChange={handleClose}>
                    <ModalContent className="border p-[100px] rounded-[30px] bg-white border-black">
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex  flex-col  gap-1"></ModalHeader>
                          <ModalBody>
                            <div className="">
                              <Image
                                src="/images/line-qrcode.jpg"
                                width={1000}
                                height={1000}
                                loading="lazy"
                                alt="contact-line-qrcode"
                                placeholder="empty"
                              ></Image>
                              <p>Line Qr code</p>
                              <p>掃描加入好友</p>
                            </div>
                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                  <label htmlFor="mce-group[43794]-43794-2">Line</label>
                </li>
              </ul>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_e4fe6f68e70ec50f3def8801d_9042884b3e"
                tabIndex="-1"
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button border border-black text-center  w-full md:w-[140px] text-white rounded-md py-4 md:py-2 bg-gray-900"
                  value="Subscribe"
                />
                <p style={{ margin: "0px auto" }}>
                  <a
                    href="http://eepurl.com/iX1Z9M"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: "220px",
                          height: "40px",
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {status && <p className="mt-4 text-blue-600">{status}</p>}
    </div>
  );
}
