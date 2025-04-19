const baseUrl = import.meta.env.VITE_BASE_URL;

export const interceptRequest = async <T>({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}): Promise<T> => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: options.method,
    });

    if (!response.ok) {
      window.location.replace('/error')
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
