import axios from 'axios';
import { API_KEY } from '../utils/apiconfig';

export const fetchNews = async (page: number, pageSize: number) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Fundos de Investimentos Imobiliário',
        language: 'pt',
        apiKey: API_KEY,
        page: page,
        pageSize: pageSize,
        sortBy: 'publishedAt',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar notícias: ', error);
    return null;
  }
};
