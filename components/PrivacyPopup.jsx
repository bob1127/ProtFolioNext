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
    <div className="fixed  w-[97%] lg:w-[40%] py-[30px] bottom-[10px] lg:bottom-[20px] right-[20px]  bg-white border rounded-md z-[999999999999999999] text-white p-4">
      <div className="container text-center mx-auto flex flex-col text-black justify-between items-center">
        <span>
          我們使用 cookies 改善您的體驗。點擊 "同意" 以接受我們的隱私條款。
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
