import { useState, useEffect } from "react";

const PolicyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 檢查使用者是否已接受政策
    if (!localStorage.getItem("policyAccepted")) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("policyAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
    alert("您拒絕了網站政策，可能無法獲得完整的體驗。");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  z-[99999999999999999999999] flex ,items-end items-end justify-center  ">
      <div className="bg-white  md:mb-5 md:mr-5 m-3  z-[99999999999999999999999] flex flex-col justify-center items-start p-4 rounded-md  w-[97%] md:w-auto shadow-lg max-w-md text-center">
        <h2 className="text-lg font-semibold">網站政策通知</h2>
        <p className="my-4 text-left text-[14px]">
          我們使用 cookies
          和其他技術來增強您的瀏覽體驗。繼續使用本網站表示您同意我們的政策。
        </p>
        <div className="flex  justify-end space-x-4">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-black text-[12px] text-white rounded-md"
          >
            同意
          </button>
          <button
            onClick={handleDecline}
            className="px-4 text-[12px] py-2 bg-gray-300 rounded-md"
          >
            拒絕
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyPopup;
