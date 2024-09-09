// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { email, phone, name, gender, plans } = req.body;

  // 檢查必填字段
  if (!email || !email.includes('@') || !name) {
    return res.status(400).json({ message: 'Email and name are required fields.' });
  }

  // 你可以在這裡處理額外的驗證或清理數據
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const server = apiKey.split('-')[1]; // Extract the server prefix from the API key

  try {
    const response = await axios.post(
      `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        email_address: email,
        status: 'subscribed', // 可以是 'subscribed' 或 'pending' 根據需求
        merge_fields: {
          PHONE: phone, // 自訂字段：聯絡電話
          FNAME: name, // 自訂字段：姓名
          GENDER: gender, // 自訂字段：性別
          PLANS: plans.join(', ') // 自訂字段：選項
        },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Subscription error:', error.response ? error.response.data : error.message);
    return res.status(500).json({ message: 'Subscription failed', error: error.message });
  }
}
