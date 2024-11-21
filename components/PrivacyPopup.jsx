import { useEffect, useState } from "react";

const PrivacyPopup = () => {
  // 儲存彈出框顯示狀態
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 檢查 localStorage 是否已有使用者選擇
    const hasAccepted = localStorage.getItem("privacyAccepted");
    if (!hasAccepted) {
      setIsVisible(true); // 如果沒有選擇過，顯示彈出框
    }
  }, []);

  const handleAccept = () => {
    // 記錄用戶同意隱私條款，並關閉彈出框
    localStorage.setItem("privacyAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // 記錄用戶拒絕隱私條款，並關閉彈出框
    localStorage.setItem("privacyAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null; // 如果不需要顯示，返回 null

  return (
    <div className="fixed  md:left-[70%] lg:left-[80%] left-[50%] md:w-[40%] -translate-x-1/2  w-[97%]  lg:max-w-[500px] py-[30px] bottom-[6px] lg:bottom-[20px]    bg-white border rounded-md z-[999999999999999999] text-white p-4">
      <div className="container text-center mx-auto flex flex-col text-black justify-between items-center">
        <b className="text-[20px]">隱私權政策</b>
        <span>
          本網站使用cookies和相關技術用於網站運營、分析和第三方廣告目的。你可以選擇同意我們使用這些技術。{" "}
          <br></br>
          您可以選擇同意我們使用這些技術，拒絕非必要的技術，或進一步管理您的偏好。
          .
        </span>
        <div className="mt-6">
          <button
            onClick={handleAccept}
            className="bg-black text-white mx-2 text-[14px] px-4 py-2 rounded"
          >
            同意
          </button>
          <button
            onClick={handleDecline}
            className="bg-black text-white mx-2 text-[14px] px-4 py-2 rounded"
          >
            拒絕
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPopup;
