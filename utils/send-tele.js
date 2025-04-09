import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default async (text) => {
    axios.post(TELEGRAM_API_URL, {
        chat_id: TELEGRAM_CHAT_ID,
        text,
    })
        .then(response => {
        console.log('Message sent:', response.data);
    })
        .catch(error => {
        console.error('Failed to send message:', error.response?.data || error.message);
    });
}