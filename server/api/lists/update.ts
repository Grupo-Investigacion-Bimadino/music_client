// server/api/artists/find.js
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const config = useRuntimeConfig();
  const url = `${config.public.apiBaseUrl}/artists/${id}`;

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
