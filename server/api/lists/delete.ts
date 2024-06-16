// server/api/lists/delete.ts
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const config = useRuntimeConfig();
  const url = `${config.public.apiBaseUrl}/lists/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting list:", error);
    return { error: "Error deleting list" };
  }
});
