import { useState } from "react";
import Image from "next/image";

export default function NewsletterForm() {
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

  return (
    <div className="xl:w-[800px] md:w-[700px] w-full mx-auto bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">提出需求，聯繫JEEK</h2>
      <form onSubmit={handleSubmit}>
        {/* 表單字段 */}
        <div className="mb-4 w-full md:w-[80%] xl:w-[60%]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 py-2 border border-black px-2 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {/* 其他字段省略 */}
        <button
          type="submit"
          className="px-4 w-[200px] text-center py-4 inline-block rounded-[6px] bg-blue-700 text-white font-semibold shadow-sm hover:bg-blue-600"
        >
          送出
        </button>
      </form>
      {status && <p className="mt-4 text-blue-600">{status}</p>}
    </div>
  );
}
