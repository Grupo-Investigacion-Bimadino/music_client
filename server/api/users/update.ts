// server/api/users/update.ts
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const url = `${config.public.apiBaseUrl}/users/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: "Error updating user" };
  }
});
