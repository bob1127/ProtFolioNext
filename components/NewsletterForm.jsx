import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function NewsletterForm() {
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
    <div className="2xl:w-[800px] overflow-scroll h-full   w-full mx-auto bg-white rounded-lg">
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
            <div className="mc-field-group mt-[15px]   xl:w-3/4 2xl:w-2/3">
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
              <ul className="  grid grid-cols-2 p-0 m-0">
                <li className="border   bg-blue-700  border-black rounded-md p-5">
                  <input
                    type="checkbox"
                    name="group[43793][1]"
                    id="mce-group[43793]-43793-0"
                  />
                  <label htmlFor="mce-group[43793]-43793-0">
                    Basic website
                  </label>

                  <div className="project-wrap "></div>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="基本套版網站"
                      title="基本套版網站"
                      className="text-white"
                    >
                      <ul>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 基本網頁版型設計
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 形象照片攝影拍攝
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 企業形象照片
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 基本seo優化
                        </li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="border border-black rounded-md p-5">
                  <input
                    type="checkbox"
                    name="group[43793][2]"
                    id="mce-group[43793]-43793-1"
                  />
                  <label htmlFor="mce-group[43793]-43793-1">
                    E-Commerce website
                  </label>

                  <div className="project-wrap "></div>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      className="text-[16px]"
                      aria-label="購物網站"
                      title="購物網站"
                    >
                      <ul>
                        <li className="text-[20px] mt-3">- 基本網頁版型設計</li>
                        <li className="text-[20px] mt-3">- 形象照片攝影拍攝</li>
                        <li className="text-[20px] mt-3">- 企業形象照片</li>
                        <li className="text-[20px] mt-3">- 基本seo優化</li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="border    border border-black border-black rounded-md p-5">
                  <input
                    type="checkbox"
                    name="group[43793][1]"
                    id="mce-group[43793]-43793-0"
                  />
                  <label htmlFor="mce-group[43793]-43793-0">
                    Basic website
                  </label>

                  <div className="project-wrap "></div>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="基本套版網站"
                      title="基本套版網站"
                      className="text-[15px]"
                    >
                      <ul>
                        <li className="text-[20px]  mt-3">
                          - 基本網頁版型設計
                        </li>
                        <li className="text-[20px]  mt-3">
                          - 形象照片攝影拍攝
                        </li>
                        <li className="text-[20px]  mt-3">- 企業形象照片</li>
                        <li className="text-[20px]  mt-3">- 基本seo優化</li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="border  bg-blue-700 border-black rounded-md p-5">
                  <input
                    type="checkbox"
                    name="group[43793][4]"
                    id="mce-group[43793]-43793-2"
                  />
                  <label htmlFor="mce-group[43793]-43793-2 text-gray-100">
                    Landing page
                  </label>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="一頁式網站"
                      title="一頁式網站"
                      className="text-white text-[16px]"
                    >
                      <ul>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 基本網頁版型設計
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 形象照片攝影拍攝
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 企業形象照片
                        </li>
                        <li className="text-[20px] text-gray-100 mt-3">
                          - 基本seo優化
                        </li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </div>
            <div className="mc-field-group input-group py-[40px]">
              <strong className="">您接受的聯繫方式</strong>
              <ul className="p-0 m-0 flex ">
                <li className="mr-5 mt-3">
                  <input
                    type="checkbox"
                    name="group[43794][8]"
                    id="mce-group[43794]-43794-0"
                  />
                  <label htmlFor="mce-group[43794]-43794-0">Line</label>
                </li>
                <li className="mr-5 mt-3">
                  <input
                    type="checkbox"
                    name="group[43794][16]"
                    id="mce-group[43794]-43794-1"
                  />
                  <label htmlFor="mce-group[43794]-43794-1">Facebook</label>
                </li>
                <li className="mr-5 mt-3">
                  <input
                    type="checkbox"
                    name="group[43794][32]"
                    id="mce-group[43794]-43794-2"
                  />
                  <label htmlFor="mce-group[43794]-43794-2">Email</label>
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
                  className="button border border-black text-center w-[140px] text-white rounded-md  py-2 bg-blue-700"
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
