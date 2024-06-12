import axios from 'axios';

const API_KEY = "KM3PTTHZNI45GUWJ";
// const API_KEY = "YU938S42CFRSI15H";
// const API_KEY = 'UJIB1PEBJ5TD09N5';
// const API_KEY = '372O2TQK33SL9DR2';

export const alphaVantageGlobalQuote = async (symbol: string) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      // `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados da API:", error);
    return null;
  }
};

