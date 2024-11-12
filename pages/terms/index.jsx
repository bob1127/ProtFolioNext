import { NextSeo } from "next-seo";
import Image from "next/image.js";
import Head from "next/head.js";
import GsapText from "../../components/RevealText/index";
import NewsletterForm from "../../components/NewsletterForm.jsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {
  const webpage = {
    name: "條款須知-極客網頁設計｜JEEK WEBDESIGN｜形象官網、商業攝影、客製化網站、套版網站 - 你的創意，我來實踐",
    description:
      "    需求確認後，雙方應共同制定書面合約，該合約將包括具體的服務內容、預計交付時間、付款方式及其他相關條款，並經雙方簽字確認後生效。",
    url: "https://www.jeek-webdesign.com.tw/terms",
    logo: "https://www.jeek-webdesign.com.tw/images/company-logo/JeekLogo_web_title.png",
    contact: {
      phone: "+0939767977",
      email: "jeekdesign@gmail.com",
    },
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpenModal = (id) => {
    setModalContentId(id); // 設置當前要顯示的內容 ID
    onOpen(); // 打開模態框
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";

  return (
    <div className="py-[100px] flex justify-center items-center">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="關於我們-極客網頁設計" />
        <meta
          property="og:description"
          content="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        />
        <meta
          property="og:image"
          content="https://www.jeek-webdesign.com.tw/images/網頁設計製作_網頁seo-極客網頁設計.png"
        />
        <meta property="og:url" content="https://www.jeek-webdesign.com.tw" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: webpage.name,
              description: webpage.description,
              url: webpage.url,
              publisher: {
                "@type": "Organization",
                name: webpage.name,
                logo: {
                  "@type": "ImageObject",
                  url: webpage.logo,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: webpage.contact.phone,
                  contactType: "Customer Service",
                  email: webpage.contact.email,
                },
              },
            }),
          }}
        />
      </Head>
      <Modal
        className="bg-white p-[30px] border-2 border-black rounded-xl h-[70vh] top-[90px] w-[550px]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-[28px] flex-col gap-1">
                確認雙方需求，並制定合約內容
              </ModalHeader>
              <ModalBody>
                <p>
                  <b className="bg-blue-700 mb-5 px-2 py-1 text-white">
                    {" "}
                    雙方確認：
                  </b>
                  <br></br>
                  <div className="mt-4">
                    甲乙雙方應在合作前充分溝通並確認具體需求，包括但不限於設計風格、功能要求、交付時間等細節。
                  </div>
                </p>
                <p className="leading-[30px] mt-[40px]">
                  {" "}
                  <b className="bg-blue-700 mb-5 px-2 py-1 text-white">
                    {" "}
                    合約制定：
                  </b>
                  <br></br>
                  <div className="mt-4">
                    需求確認後，雙方應共同制定書面合約，該合約將包括具體的服務內容、預計交付時間、付款方式及其他相關條款，並經雙方簽字確認後生效。
                  </div>
                </p>
              </ModalBody>
              <ModalFooter>
                <a
                  color="danger"
                  href="https://www.zensor.com.tw/DM/TW/ECWP100S.pdf"
                  download
                  variant="light"
                  onPress={onClose}
                >
                  報價單下載
                </a>
                <Button color="primary" onPress={onClose}>
                  關閉
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <NextSeo
        title="合作須知-極客網頁設計｜JEEK WEBDESIGN"
        description="JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。"
        openGraph={{
          title: "合作須知-極客網頁設計｜JEEK WEBDESIGN",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。通過精確的設計和優化策略，我們提升網站的加載速度和使用者體驗，幫助您的品牌在數位世界中脫穎而出。選擇 JEEK，讓您的線上存在更具吸引力和實用性。",
          images: [
            {
              url: "https://www.example.com/og-home.jpg",
              width: 800,
              height: 600,
              alt: "極客網頁設計｜形象官網｜商業攝影｜客製化網站｜套版網站",
            },
          ],
        }}
        additionalJsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "合作須知",
          description:
            "JEEK 專注於網頁設計和網頁結構優化，致力於為您打造視覺美觀、使用者友好的網站。",
          publisher: {
            "@type": "Organization",
            name: "JEEK WEBDESIGN",
            logo: {
              "@type": "ImageObject",
              url: "https://www.example.com/logo.jpg",
            },
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "什麼是合作須知？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "合作須知是針對客戶與設計團隊合作過程中需注意的細節與流程，從需求確認到最終結案。",
                },
              },
              {
                "@type": "Question",
                name: "服務範圍有哪些？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "我們的服務包括網頁製作、SEO 優化和網頁結構優化等。",
                },
              },
              {
                "@type": "Question",
                name: "付款條款是什麼？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "我們會在項目開始前收取訂金，並且在項目完成後結清尾款。",
                },
              },
            ],
          },
        }}
      />
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <span
            data-aos="fade-up"
            data-aos-delay="400"
            className="md:text-[30px] text-[26px] xl:text-[50px] mx-auto"
            style={{
              marginBottom: 30,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <GsapText
              text="合作須知-terms"
              lineHeight="70px"
              id="text2"
              fontSize="60px"
            />
          </span>
        </div>
        <div className="terms-wrap  bg-white border w-[97%] md:w-[80vw] mx-auto p-8 md:p-10  shadow-xl rounded-xl">
          <h2>1.合作流程</h2>
          <div className="grid  p-0 md:p-10 grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-2">
            <div className="content p-10">
              <b className="text-[20px]">Step01</b>
              <p className="text-[20px]">確認雙方需求</p>

              <Image
                className="mt-3"
                src="/images/icon/collaboration.png"
                loading="lazy"
                width={300}
                height={300}
                placeholder="empty"
                alt="step1確認雙方需求"
              />
            </div>
            <div className="content p-10">
              <b className="text-[20px]">Step02</b>
              <p className="text-[20px]">支付訂金</p>
              <Image
                className="mt-3"
                src="/images/icon/payment-method.png"
                loading="lazy"
                width={300}
                height={500}
                placeholder="empty"
                alt="step02. 支付訂金-極客網頁設計"
              />
            </div>
            <div className="content p-10">
              <b className="text-[20px]">Step03</b>
              <p className="text-[20px]">開始製作</p>
              <Image
                className="mt-3"
                src="/images/icon/ux.png"
                loading="lazy"
                width={300}
                height={500}
                placeholder="empty"
                alt="step03. 開始製作"
              />
            </div>
            <div className="content p-10">
              <b className="text-[20px]">Step04</b>
              <p className="text-[20px]">支付尾款-結案</p>
              <Image
                className="mt-3"
                src="/images/icon/positive-vote.png"
                loading="lazy"
                width={300}
                height={500}
                placeholder="empty"
                alt="step04. 結案"
              />
            </div>
          </div>

          <h2>2.服務範圍 (Scope of Work)</h2>
          <div>
            <ul className="p-0 m-0 ">
              <li className="text-[20px] mt-4 font-bold">• 網頁設計</li>
              <li className="text-[20px] mt-4 font-bold">• seo優化</li>
              <li className="text-[20px] mt-4 font-bold">• 3D建模</li>
              <li className="text-[20px] mt-4 font-bold">• 各項商品拍攝</li>
              <li className="text-[20px] mt-4 font-bold">
                • Banner、DM、產品圖上架、圖片美化{" "}
              </li>
              <li className="text-[20px] mt-4 font-bold">• 空拍攝影</li>
            </ul>
          </div>
          <h2>3.合約內容</h2>
          <div>
            <Image
              src="/images/contract.png"
              alt="合約內容下載"
              placeholder="empty"
              loading="lazy"
              className=""
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
