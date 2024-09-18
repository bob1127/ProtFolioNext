import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface GsapTextProps {
  text: string;
  id?: string;
}

const GsapText: React.FC<GsapTextProps> = ({ text, id }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<string>("50px"); // 默认字体大小

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setFontSize("32px");
      } else if (width < 800) {
        setFontSize("40px");
      } else if (width < 1200) {
        setFontSize("50px");
      } else {
        setFontSize("50px");
      }
    };

    updateFontSize(); // 设置初始字体大小
    window.addEventListener("resize", updateFontSize); // 监听窗口大小变化

    return () => {
      window.removeEventListener("resize", updateFontSize); // 清理事件监听
    };
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const myText = new SplitType(textRef.current, { types: "chars" });
    const handleAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(`#${id} .char`, {
            y: 0,
            stagger: 0.03,
            delay: 0.4,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.1,
    });

    observer.observe(textRef.current);

    return () => {
      observer.unobserve(textRef.current);
    };
  }, [text, id]);

  return (
    <p
      ref={textRef}
      id={id}
      style={{
        fontSize, // 使用动态字体大小
        lineHeight: "80px", // 设置行高
        textTransform: "uppercase",
        fontFamily: "'Bebas Neue', sans-serif",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            transform: "translateY(125px)",
            transition: "transform .5s",
          }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default GsapText;
