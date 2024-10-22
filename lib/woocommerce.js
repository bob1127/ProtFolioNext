// lib/woocommerce.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://your-site.com", // 你的 WooCommerce 站点 URL
  consumerKey: "ck_9dd6ecb625d35641901300b21162553540260402",
  consumerSecret: "cs_3a0e941ca7ad6558be632492a1be993b8163f9dc",
  version: "wc/v3",
});

export default api;
