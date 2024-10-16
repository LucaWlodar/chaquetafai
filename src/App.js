import React, { useState } from 'react';
import axios from 'axios';

const promptTemplate = "[INST] {input} [/INST]";
let prompt = "<s>";

const App = () => {
  const [inputText, setInputText] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const chatbot = async (input) => {
    if (input) {
      prompt += promptTemplate.replace('{input}', input);

      // Model Predict
      const API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY; // Asegúrate de tener tu API Key en .env
      const MODEL_ID = 'mistralai/completion/models/mixtral-8x7B-Instruct-v0_1';
      const URL = `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`;

      try {
        const response = await axios.post(
          URL,
          {
            inputs: [
              {
                data: {
                  text: {
                    raw: prompt,
                  },
                },
              },
            ],
          },
          {
            headers: {
              Authorization: `Key ${API_KEY}`,
            },
          }
        );

        const reply = response.data.outputs[0].data.text.raw;

        prompt += reply + "</s>";
        return reply;

      } catch (error) {
        console.error('Error al interactuar con la API de Clarifai:', error);
        return "Lo siento, hubo un error al procesar tu solicitud.";
      }
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await chatbot(inputText);
    setBotResponse(response);
    setInputText(''); // Limpiar el campo de entrada
  };

  return (
    <div>
      <h1>Chatbot con Clarifai API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Escribe algo"
        />
        <button type="submit">Enviar</button>
      </form>
      <h2>Respuesta del chatbot:</h2>
      <p>{botResponse}</p>
    </div>
  );
};

export default App;
