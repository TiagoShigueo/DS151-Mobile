import axios from 'axios';
import { useState } from 'react';

const API_KEY = "KM3PTTHZNI45GUWJ";
// const API_KEY = "YU938S42CFRSI15H";
// const API_KEY = 'UJIB1PEBJ5TD09N5';
// const API_KEY = '372O2TQK33SL9DR2';

export const alphaVantageGlobalQuote = async (symbol: string) => {
  try {
    const response = await axios.get(
      // `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados da API:", error);
    return null;
  }
};

export const alphaVantageSymbolSearch = async(symbol: string) => {
  try {
    // console.log('Ticker válidos na versão demo: \n -tesco\n -tencent\n -BA\n -SAT');
    // const response = await axios.get (`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=demo`);
    const response = await axios.get('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo');
    console.log(response.data.bestMatches);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados da API: ', error);
    return null;
  }
}

// export default {alphaVantageGlobalQuote, alphaVantageSymbolSearch};