import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import StockItem from "../components/StockItem";
import Dividends from "../components/Dividends";
import { alphaVantageGlobalQuote } from "../services/alphaVantage";

import { fetchNews } from "../services/newsService";
import News from "../components/News";
import Idv from "../constants/Idv";

const HomeScreen = () => {
  const [stockDataList, setStockDataList] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 5;

  useEffect(() => {
    const symbols = ["KNIP11.SA", "KNCR11.SA", "XPML11.SA", "HGLG11.SA"];

    const newDataList: any = [];

    const axiosDataForSymbols = async () => {
      for (const symbol of symbols) {
        const data = await alphaVantageGlobalQuote(symbol);
        newDataList.push(data);
      }
      setStockDataList(newDataList);
    };
    axiosDataForSymbols();

    const loadNews = async () => {
      setLoading(true);
      const response = await fetchNews(page, pageSize);
      if (response) {
        setNews(response.articles);
        setTotalResults(response.totalResults);
      }
      setLoading(false);
    };
    loadNews();
  }, [page]);

  const handleNextPage = () => {
    if (page * pageSize < totalResults) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={Idv.container}>
      <Text style={Idv.title}>Mercado hoje</Text>
      {stockDataList.length > 0 ? (
        <FlatList
          data={stockDataList}
          renderItem={({ item }) => <StockItem stockData={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>Carregando...</Text>
      )}

      {/* Talvez colocar os dividendos nessa tela, mas tenho medo de exceder as requisições diárias */}
      <View style={{ height: "65%" }}>
        <ScrollView>
          {news.map((article, index) => (
            <News key={index} article={article} />
          ))}
        </ScrollView>
        <View style={Idv.paginationContainer}>
          <TouchableOpacity
            style={Idv.button}
            onPress={() => handlePreviousPage()}
          >
            <Text style={Idv.buttonTextWhite}>Anterior</Text>
          </TouchableOpacity>
          <Text>{`Página ${page}`}</Text>
          <TouchableOpacity style={Idv.button} onPress={() => handleNextPage()}>
            <Text style={Idv.buttonTextWhite}>Próxima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
