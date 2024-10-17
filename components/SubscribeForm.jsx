import { useState } from "react";
import axios from "axios";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const subscribe = async () => {
    try {
      const response = await axios.post("/api/subscribe", { email });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status === "success" && <p>你以成功送出表單，請等候我們的回覆訊息</p>}
      {status === "error" && <p>好像有點錯誤喔！，請再試一次。</p>}
    </div>
  );
}
