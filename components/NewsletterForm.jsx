import { useState } from "react";
import Image from "next/image";
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(""); // 用於性別選擇
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

    // 收集表單數據
    const { plan1, plan2, plan3 } = plans;
    const selectedPlans = [];
    if (plan1) selectedPlans.push("Plan 1");
    if (plan2) selectedPlans.push("Plan 2");
    if (plan3) selectedPlans.push("Plan 3");

    try {
      const res = await fetch("/api/subscribe", {
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
        setPlans({ plan1: false, plan2: false, plan3: false }); // 重設選擇狀態
      } else {
        setStatus(data.message || "An error occurred");
      }
    } catch (error) {
      setStatus("An error occurred");
    }
  };

  return (
    <div className=" md:w-[430px]  w-full mx-auto bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 ">提出需求，聯繫JEEK</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mt-1 py-2 border border-black px-2 block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="mt-1 block w-full py-2 border border-black px-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="mt-1 block w-full py-2 border border-black px-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <p className="block text-sm font-medium text-gray-700">Gender:</p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 py-2 border border-black px-2 "
            />
            <label
              htmlFor="male"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Male
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label
              htmlFor="female"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Female
            </label>
          </div>
        </div>
        <p className="block  text-[22px] font-medium text-gray-700">Plans:</p>
        <div className="mb-4  md:overflow-auto overflow-scroll flex flex-row">
          <div className="flex flex-col py-[20px] justify-start items-start mb-2">
            <input
              type="checkbox"
              id="plan1"
              name="plan1"
              checked={plans.plan1}
              onChange={handleCheckboxChange}
              className="h-4 ml-2 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label
              htmlFor="plan2"
              className="ml-2 text-[22px] font-medium text-gray-700"
            >
              Plan 1
              <div className="border p-7 w-[300px] border-black rounded-md">
                <div className="title mb-4 text-[20px] font-bold">
                  Basic 基本方案
                </div>
                <div className="img">
                  <Image
                    src="/images/heroimg.webp"
                    width={600}
                    height={300}
                  ></Image>
                </div>
                <div className="plan-content">
                  <p className="mt-3">包含一年網域空間費用</p>

                  <p className="mt-3">客製化版面設計</p>
                  <p className="mt-3">Seo優化 串接gtm</p>
                  <p className="mt-3">形象影片拍攝</p>
                </div>
              </div>
            </label>
          </div>
          <div className="flex   flex-col py-[20px] justify-start items-start mb-2">
            <input
              type="checkbox"
              id="plan2"
              name="plan2"
              checked={plans.plan2}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />

            <label
              htmlFor="plan2"
              className="ml-2 text-[22px] font-medium text-gray-700"
            >
              Plan 2
              <div className="border p-7 w-[300px] border-black rounded-md">
                <div className="title mb-4 text-[20px] font-bold">
                  Plus 進階方案
                </div>
                <div className="img">
                  <Image
                    src="/images/heroimg.webp"
                    width={600}
                    height={300}
                  ></Image>
                </div>
                <div className="plan-content">
                  <p className="mt-3">包含一年網域空間費用</p>

                  <p className="mt-3">客製化版面設計</p>
                  <p className="mt-3">Seo優化 串接gtm</p>
                  <p className="mt-3">形象影片拍攝</p>
                </div>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap w-full py-[20px] justify-start items-start mb-2">
            <input
              type="checkbox"
              id="plan3"
              name="plan3"
              checked={plans.plan3}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />

            <label
              htmlFor="plan3"
              className="ml-2 text-[22px] font-medium text-gray-700"
            >
              Plan 3
              <div className="border p-7 w-[300px] border-black rounded-md">
                <div className="title mb-4 text-[20px] font-bold">
                  Customized 客製化方案
                </div>
                <div className="img">
                  <Image
                    src="/images/heroimg.webp"
                    width={600}
                    height={300}
                  ></Image>
                </div>
                <div className="plan-content">
                  <p className="mt-3">包含一年網域空間費用</p>

                  <p className="mt-3">客製化版面設計</p>
                  <p className="mt-3">Seo優化 串接gtm</p>
                  <p className="mt-3">形象影片拍攝</p>
                </div>
              </div>
            </label>

            {/*             
            <label
              htmlFor="plan3"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Plan 3
            </label> */}
          </div>
        </div>
        <div className="py-5">
          <b className="leading-normal">
            使用 Mailchimp
            作為行銷平台。點擊下方送出，即表示您承認您的資訊將被傳輸至 Mailchimp
            進行處理。
            <a
              className="border-b-2 border-black"
              href="https://mailchimp.com/legal/terms/"
            >
              {" "}
              在此瞭解更多關於 Mailchimp 隱私權實務的資訊。
            </a>
          </b>
        </div>
        <button
          type="submit"
          className="px-4  w-full py-4 inline-block rounded-[6px] bg-blue-700 text-white font-semibold shadow-sm hover:bg-blue-600"
        >
          送出
        </button>
      </form>
      {status && <p className="mt-4 text-blue-600">{status}</p>}
    </div>
  );
}
