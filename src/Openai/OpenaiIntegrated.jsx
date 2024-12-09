
const Gemini_api = "AIzaSyCwqZc5IBYawBjW4JeUIFCKnw-SXonMF84";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = Gemini_api;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",  
  };
   
  async function run(promt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        
        ],
    });
  
    const result = await chatSession.sendMessage(promt);
    console.log(result.response.text());
   return result.response.text();
  }
  
  

export default run ;