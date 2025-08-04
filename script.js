import dotenv from 'dotenv';
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0
});

const response = await model.invoke("Hello, world!")

console.log(response.content)

let res = await model.invoke("Tell me what i have said during this convo")

console.log(res.content)