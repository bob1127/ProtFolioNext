// generate-sitemap.js

const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

(async () => {
  // 模擬靜態路徑，您可以自定義此路徑清單
  const staticPaths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/Contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', pridority: 0.8 },
        { url: '/about-2', changefreq: 'monthly', priority: 0.8 },
            { url: '/about-3', changefreq: 'monthly', priority: 0.8 },
                { url: '/Service', changefreq: 'monthly', priority: 0.8 },
    // 您可以加入更多靜態頁面，或從 API 獲取動態路徑
  ];

  // 創建 Sitemap Stream
  const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' });

  // 添加路徑至 sitemap
  staticPaths.forEach((path) => {
    sitemap.write(path);
  });

  // 完成 sitemap
  sitemap.end();

  // 將 sitemap 寫入 sitemap.xml 檔案
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const sitemapXML = await streamToPromise(sitemap);
  fs.writeFileSync(sitemapPath, sitemapXML.toString());
})();
