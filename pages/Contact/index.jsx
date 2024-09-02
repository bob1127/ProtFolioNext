// import Seo from '@/components/Seo';
// "use client"
// import CustomLink from '@/components/CustomLink';
// import Inner from "../components/Inner/index.jsx";

// import BannerCarousel from '../components/BannerCarousel/App.jsx';
// import reportWebVitals from '../components/reportWebVitals.js';

// import CarouselImg from '../components/CarouselImg/index.jsx'

// const PhysicsAnimationApp = dynamic(
//   () => import("../components/PhysicsAnimation/app.jsx"),
//   { ssr: false }
// );

import mailchimp from "../../components/mailchimp/page.jsx";
export default function Home() {
  //   const plane = useRef(null);
  //   const maxRotate = 45;

  //   const manageMouseMove = (e) => {
  //     const x = e.clientX / window.innerWidth;
  //     const y = e.clientY / window.innerHeight;
  //     const perspective = window.innerWidth * 4;
  //     const rotateX = maxRotate * x - maxRotate / 2;
  //     const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  //     plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  //   };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div>
        <div id="mc_embed_shell" className="w-full">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}\n        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n",
            }}
          />
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us9.list-manage.com/subscribe/post?u=e4fe6f68e70ec50f3def8801d&id=9042884b3e&f_id=007753e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate w-full"
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
                    required=""
                    defaultValue=""
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">您的姓名 </label>
                  <input
                    type="text"
                    name="LNAME"
                    className=" text"
                    id="mce-LNAME"
                    defaultValue=""
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-PHONE">聯絡電話 </label>
                  <input
                    type="text"
                    name="PHONE"
                    className="REQ_CSS"
                    id="mce-PHONE"
                    defaultValue=""
                  />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_e4fe6f68e70ec50f3def8801d_9042884b3e"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      defaultValue="Subscribe"
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
                            borderRadius: 4,
                          }}
                        >
                          <img
                            className="refferal_badge"
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                            alt="Intuit Mailchimp"
                            style={{
                              width: 220,
                              height: 40,
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
        </div>
      </div>
    </div>
  );
}

// reportWebVitals();
