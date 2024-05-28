import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Button,
  Linking,
} from "react-native";
import axios from "axios";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 5;

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: "Fundos de Investimentos Imobiliário",
          language: "pt",
          apiKey: "c108741640304c44a11efb0b2cf59c8d",
          page: page,
          pageSize: pageSize,
          sortBy: "publishedAt",
        },
      });
      setNews(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (error) {
      console.error("Erro ao buscar notícias: ", error);
    } finally {
      setLoading(false);
    }
  };

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

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {news.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            <Text style={styles.title} onPress={() => openArticle(article.url)}>
              {article.title}
            </Text>
            <Text>{article.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        <Button
          title="Anterior"
          onPress={handlePreviousPage}
          disabled={page === 1}
        />
        <Text>{`Página ${page}`}</Text>
        <Button
          title="Próxima"
          onPress={handleNextPage}
          disabled={page * pageSize >= totalResults}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  articleContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default NewsScreen;
