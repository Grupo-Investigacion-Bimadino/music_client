// server/api/users/findAll.ts
import { defineEventHandler } from "h3";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const url = `${config.public.apiBaseUrl}/users`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Error fetching data" };
  }
});
