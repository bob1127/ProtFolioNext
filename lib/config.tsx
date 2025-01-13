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
      price: "NT 2,500",
      period: "month",
      yearlyPrice: "NT 2,000",
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
      question: "Step1.需求溝通與項目規劃",
      answer: (
        <span>
          設計師或網頁工程師將透過與您溝通，瞭解您的品牌定位、目標客群與網站功能需求，打造精準的網站架構與設計。
          這一步不僅是奠定網站製作的基礎，更是降低未來修改成本的關鍵。
        </span>
      ),
    },
    {
      question: "Step02.視覺設計與雙方達成確認",
      answer: (
        <span>
          設計師或網頁工程師會以您的品牌核心，製作出符合您公司品牌需求的網頁設計稿。
          平面稿件完成後，我們會與您確認視覺方向，確保每個細節都達到預期效果。
          如果校稿或修改內容較多，製作時間可能會相應調整。在這個步驟中，為了確保項目的順利推進並保護雙方的權益，我們會與您簽訂合約，明確合作範圍、工作流程與時程規劃，讓雙方在合作的每一階段都有清晰的共識。
          同時，可能會視情況斟酌收取訂金，例如設計需求較為複雜、頁面數量較多或需要投入大量創意與資源時，這樣可以保障設計師的工作投入並提高效率。
          尾款部分則會在網站完成或正式上線前支付，確保您對最終成果感到滿意，並為項目的圓滿結束提供保障。這樣的安排能讓整個合作過程更具透明性與專業性。
        </span>
      ),
    },
    {
      question: "Step03. 前後端開發與整合",
      answer: (
        <span>
          這階段技術工程師會專注於網站功能、網頁美工設計與動畫效果實現，
          並建立易於使用的後台系統，確保使用者能輕鬆操作與管理。
        </span>
      ),
    },
    {
      question: "Step04.內容整理與SEO設定",
      answer: (
        <span>
          如有串接資料需求會在這個步驟進行，SEO優化，網站結構優化。
          同時，我們會教您如何操作後台，讓網站維護變得更加高效簡單。
        </span>
      ),
    },
    {
      question: "Step05.網站上線與後續支援",
      answer: (
        <span>
          最後，我們會協助您完成域名設定並將網站上線。
          從此刻起，您的品牌有了全新數位形象，並可持續為企業創造更多價值。
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
