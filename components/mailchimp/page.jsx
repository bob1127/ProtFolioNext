import React, { useState } from "react";
import Image from "next/image";
const MailchimpForm = () => {
  return (
    <div id="mc_embed_shell">
      {/* External CSS can be included in a <head> tag in the main document */}
      {/* For inline styles in React, use JavaScript objects */}
      <style>{`
        #mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: 600px;
        }
      `}</style>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us9.list-manage.com/subscribe/post?u=e4fe6f68e70ec50f3def8801d&amp;id=9042884b3e&amp;f_id=007753e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-NAME">您的姓名</label>
              <input type="text" name="NAME" className="text" id="mce-NAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">聯絡電話</label>
              <input
                type="number"
                name="PHONE"
                className="number"
                id="mce-PHONE"
              />
            </div>
            <div className="mc-field-group input-group">
              <strong>選擇您需要的方案</strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="group[43793][1]"
                    id="mce-group[43793]-43793-0"
                  />
                  <label htmlFor="mce-group[43793]-43793-0">方案一</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="group[43793][2]"
                    id="mce-group[43793]-43793-1"
                  />
                  <label htmlFor="mce-group[43793]-43793-1">方案二</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="group[43793][4]"
                    id="mce-group[43793]-43793-2"
                  />
                  <label htmlFor="mce-group[43793]-43793-2">方案三</label>
                </li>
              </ul>
            </div>
            <div className="mc-field-group input-group">
              <strong>您接受的聯繫方式</strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="group[43794][8]"
                    id="mce-group[43794]-43794-0"
                  />
                  <label htmlFor="mce-group[43794]-43794-0">Line</label>
                  <Image
                    src="/images/"
                    height={400}
                    alt="contact with line"
                    loading="lazy"
                    width={400}
                    placeholder=""
                  ></Image>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="group[43794][16]"
                    id="mce-group[43794]-43794-1"
                  />
                  <label htmlFor="mce-group[43794]-43794-1">Facebook</label>
                </li>
                <li>
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
                  className="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;
