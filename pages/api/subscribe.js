import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.length) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

      const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

      const response = await axios.post(
        url,
        {
          email_address: email,
          status: "subscribed",
        },
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something went wrong, please try again later." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
