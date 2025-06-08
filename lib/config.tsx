import { Icons } from "../components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "acme.ai",
  description: "Automate your workflow with AI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "support@acme.ai",
    twitter: "https://twitter.com/magicuidesign",
    discord: "https://discord.gg/87p2vpsat5",
    github: "https://github.com/magicuidesign/magicui",
    instagram: "https://instagram.com/magicuidesign/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI-Powered Automation",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description: "Automate repetitive tasks and save time.",
          },
          {
            href: "#",
            title: "Workflow Optimization",
            description: "Optimize your processes with AI-driven insights.",
          },
          {
            href: "#",
            title: "Intelligent Scheduling",
            description: "AI-powered scheduling for maximum efficiency.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Tailored automation solutions for growing companies.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Scalable AI automation for large organizations.",
          },
          {
            title: "Developers",
            href: "#",
            description: "API access and integration tools for developers.",
          },
          {
            title: "Healthcare",
            href: "#",
            description: "Specialized automation for healthcare workflows.",
          },
          {
            title: "Finance",
            href: "#",
            description: "AI-driven process automation for financial services.",
          },
          {
            title: "Education",
            href: "#",
            description:
              "Streamline administrative tasks in educational institutions.",
          },
        ],
      },
    },
    {
      href: "/",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "基本網站",
      href: "#",
      price: "NT 1,000",
      period: "month",
      yearlyPrice: "NT 1,000",
      features: [
        "網頁運行維護",
        "網頁備份",
        "版面設計維護",
        "主機維護",
        "安全維護",
      ],
      description: "有任何需求歡迎提出",
      buttonText: "聯絡我",
      isPopular: false,
    },
    {
      name: "購物網站/客製化網站",
      href: "#",
      price: "NT 4,500",
      period: "month",
      yearlyPrice: "NT 3,500",
      features: [
        "網站SEO優化",
        "網站效能優化",
        "數據分析、關鍵字分析報告",
        "功能修改，(依難易度判斷是否額外收費)",
        "專業網頁分析建議",
      ],
      description: "頁面、功能新增依難易度另外收取費用",
      buttonText: "聯絡我",
      isPopular: true,
    },
    {
      name: "其他方案需求",
      href: "#",
      price: "找我聊聊",
      period: "month",
      yearlyPrice: "找我聊聊",
      features: [
        "固定剪輯短影音",
        "長期美化網站(產品圖、Banner、DM)",
        "3d產品圖",
        "電商平台維護",
      ],
      description: "有任何需求歡迎提出",
      buttonText: "聯絡我",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Step1.了解客戶需求，並展開雙方溝通",
      answer: (
        <span className="text-[16px]  leading-relaxed tracking-widest">
          我們的業務、PM會好會大致上了解您的需球，並且迅速跟工程師討論可行性並且回覆您(包含簡單的報價)，
          如客戶有近一步合作意願時我們才會根據需求內容展開更近一步的溝通和詳細報價內容
        </span>
      ),
    },
    {
      question: "Step02.同意合作並開始規劃視覺外觀設計",
      answer: (
        <div>
          <span className="text-[16px]  leading-relaxed tracking-widest">
            如果客戶同意合作後，我們會簽合約保障雙方，<br></br>
            然後網頁設計師會開始大約拉個設計版型和ui/wirefram/Mockup，這段時間會即時跟客戶確認設計的方向，確保雙方的認知誤差在最小範圍。
            通常我們會先跟您收取總款項的5-10%(會根據專案複雜程度和總報價金額做變動)來做為訂金預付，之後便會開始初版設計。
          </span>
        </div>
      ),
    },
    {
      question: "Step03. 版面效果呈現與資料和前後端整合",
      answer: (
        <span className="text-[16px]  leading-relaxed tracking-widest">
          等到網頁版型出來後，網頁工程師會開始套效果做網頁結構優化，使用者互動體驗，並且如有CMS
          後台需求，會開始串接整合api。 使網站達到可正式上線的地步。
        </span>
      ),
    },
    {
      question: "Step04.內容版面再修改與SEO優化",
      answer: (
        <span className="text-[16px]  leading-relaxed tracking-widest">
          如客戶對於任何地方有想法意見，我們會即時與工程師做討論。如有合約上沒有註明的功能需求這時也可以提出，我們會再額外報價。
          我們會先上測試環境給您確認網站的完整效果互動、功能或者呈現方式，待確認完成後開始進行網頁結構、圖片媒體的優化
        </span>
      ),
    },
    {
      question: "Step05.網站正式上線與後續維護",
      answer: (
        <span className="text-[16px]  leading-relaxed tracking-widest">
          正式上線後，1-2個月內會持續監控網站有無Bug和數據分析。如果您有維護需求也歡迎向我們詢問。
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
