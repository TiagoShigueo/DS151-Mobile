import axios from 'axios';

const API_KEY = 'c108741640304c44a11efb0b2cf59c8d';
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
