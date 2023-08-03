const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/chat", async(req,res) => {
    const {prompt} = req.body;

    try{
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role:"assistant",content:prompt}],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        res.send(response.data.choices[0].message.content)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router