// server/api/songs/update.ts
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const config = useRuntimeConfig();
  const url = `${config.public.apiBaseUrl}/songs/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating song:", error);
    return { error: "Error updating song" };
  }
});
