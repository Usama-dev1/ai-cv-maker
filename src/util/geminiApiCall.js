import { useEffect, useState } from "react";

const geminiApiCall = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prompt, setPrompt] = useState({
    generationConfig: {
      temperature: 0.3,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 3000,
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_LOW_AND_ABOVE",
      },
    ],
    contents: [], 
  });
  const enterPrompt = (newContentText) => {
    setPrompt((prevPrompt) => ({
      ...prevPrompt,
      contents: [
        {
          parts: [
            {
              text: newContentText, 
            },
          ],
        },
      ],
    }));
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 

      try {
        const url =
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": import.meta.env.VITE_API_KEY, // Replace with your actual API key
          },
          body: JSON.stringify(prompt),
        });

        if (!res.ok) {
          throw new Error(`Something went wrong: ${res.status}`);
        }

        const result = await res.json();
        setData(result); // Update state with response data
      } catch (error) {
        setError(error); // Update state with error
      } finally {
        setLoading(false); // Set loading to false when fetch is complete
      }
    };

    fetchData();
  }, [prompt,]); // Re-run the effect if `prompt` changes

  return { data, loading, error,enterPrompt };
};

export default geminiApiCall;
