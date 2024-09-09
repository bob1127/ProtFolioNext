// components/PolicyModal.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Cookies from "js-cookie";

const PolicyModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Check if the cookie exists to determine if the modal should be shown
    const cookieValue = Cookies.get("policy-accepted");
    if (!cookieValue) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate the modal when it appears
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isVisible]);

  const handleClose = () => {
    // Set a cookie to remember that the user has accepted the policy
    Cookies.set("policy-accepted", "true", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex  bottom-0 items-center justify-center bg-black bg-opacity-50 z-[999999999]">
      <div
        ref={modalRef}
        className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden sm:w-[500px]   w-full right-0 md:right-[25px] fixed bottom-[25px] z-[99999999]"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="title-color py-[26px] bg-blue-100"></div>
        <div className="p-6 flex justify-center flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">隱私權公告</h2>
          <p className="mb-6 text-[14px] font-normal">
            我們尊重您的隱私。為了向您提供相關的行銷資訊和促銷活動，我們會收集您的電子郵件地址。這些資訊僅用於我們的行銷活動，並不會出售或出租給第三方。我們可能會根據法律要求或與我們合作的夥伴共享這些資訊。請定期查看我們的政策更新，以了解最新的隱私保護措施。如有任何問題，請聯絡
            bob112722761236tom@gmail.com。
          </p>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
