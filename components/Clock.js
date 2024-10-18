// components/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const taipeiTime = new Date().toLocaleTimeString('zh-TW', {
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(taipeiTime);
    };

    updateTime(); // 初始化時更新時間
    const interval = setInterval(updateTime, 1000); // 每秒更新一次

    return () => clearInterval(interval); // 組件卸載時清除 interval
  }, []);

  return (
    <div style={{ fontSize: '2rem', color: '#fff', textAlign: 'center' }}>
     {time}
    </div>
  );
};

export default Clock;
