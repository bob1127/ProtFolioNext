if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  
  // 確保開啟縮小 (Minification) 和壓縮功能
  optimization: {
    minimize: true,  // 確保開啟縮小 (Minification)
  },
  compress: true, // Next.js 預設壓縮開啟

  images: {
    domains: [
      'www.ultraehp.com',
      'www.zensor.com.tw',
      'i0.wp.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },

  // 構建過程中壓縮 JavaScript 和 CSS 文件
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css)$/, // 指定要壓縮的文件類型
          filename: '[path][base].gz', // 生成壓縮文件的命名
          algorithm: 'gzip', // 使用 gzip 壓縮，或者改用 'brotliCompress' 進行 Brotli 壓縮
          threshold: 10240, // 壓縮大於 10KB 的文件
          minRatio: 0.8, // 壓縮比例，越小表示壓縮後的文件越小
        })
      );
    }
    return config;
  },

  // 自定義導出靜態路徑
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/quotation': { page: '/quotation' },
      '/posts/six-posts': { page: '/posts/[slug]', query: { slug: 'six-posts' } },
      '/posts/the-five-posts': { page: '/posts/[slug]', query: { slug: 'the-five-posts' } },
      '/posts/the-first-post': { page: '/posts/[slug]', query: { slug: 'the-first-post' } },
      '/posts/the-third-posts': { page: '/posts/[slug]', query: { slug: 'the-third-posts' } },
      // 添加其他靜態路徑
    };
  },
};
