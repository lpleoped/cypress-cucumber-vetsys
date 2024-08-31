require('dotenv').config();

const axios = require('axios');

async function generateTestScenarios(prompt, options = {}) {
    const apiKey = process.env.OPENAI_API_KEY;

    const defaultOptions = {
        model: "text-davinci-003",
        maxTokens: 1000,
        temperature: 0.7
    };

    const finalOptions = { ...defaultOptions, ...options };

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: finalOptions.model,
            prompt: prompt,
            max_tokens: finalOptions.maxTokens,
            temperature: finalOptions.temperature
        }, {
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating scenarios:', error);
        throw error;
    }
}

module.exports = { generateTestScenarios };