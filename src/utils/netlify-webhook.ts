export async function triggerNetlifyBuild(webhookUrl: string) {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Netlify build triggered successfully:", response.status);
  } catch (error) {
    console.error("Failed to trigger Netlify build:", error);
  }
}
