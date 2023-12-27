// src/utils/api.ts
const BASE_URL = 'https://api.thecatapi.com/v1';

export const getCatImages = async (limit: number = 10): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/images/search?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao obter imagens de gatos. Status: ${response.status}`);
    }

    const data = await response.json();
    const catImages = data.map((cat: any) => cat.url);
    return catImages;
  } catch (error) {
    console.error('Erro ao obter imagens de gatos:', error);
    throw error;
  }
};
