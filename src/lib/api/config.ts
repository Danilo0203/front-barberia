import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PYTHON_HOST,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PYTHON_TOKEN}`,
    "Content-Type": "application/json",
  },
});
