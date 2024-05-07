import axios from 'axios';

const alphaVantage = async (symbol) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
    //   console.log('Chegou até aqui');
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
      return null;
    }
};

// const API_KEY = "KM3PTTHZNI45GUWJ";
const API_KEY = "YU938S42CFRSI15H";

export default alphaVantage;