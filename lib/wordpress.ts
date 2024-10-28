// lib/wordpress.ts
import axios from "axios";

// WordPress API 基礎 URL
const API_URL = "https://zensorrd.com/portfolio/wp-json/wp/v2";

export const getAllPages = async () => {
  const response = await axios.get(`${API_URL}/pages`);
  return response.data;
};

export const getPageBySlug = async (slug: string) => {
  const response = await axios.get(`${API_URL}/pages?slug=${slug}`);
  return response.data[0]; // 返回第一個匹配的頁面
};
