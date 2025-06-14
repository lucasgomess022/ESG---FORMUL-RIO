// src/services/api.ts
const API_URL = "https://esg.onrender.com"; // URL do seu backend no Render

export const api = {
  // Envia avaliação ESG
  submitEvaluation: async (data: any) => {
    const response = await fetch(`${API_URL}/api/avaliacoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  },

  // Busca resultados (para o painel admin)
  getResults: async () => {
    const response = await fetch(`${API_URL}/api/avaliacoes`);
    return await response.json();
  },

  // Login de admin
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  },
};
