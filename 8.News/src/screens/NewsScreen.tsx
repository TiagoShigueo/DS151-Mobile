import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import News from "../components/News";
import { fetchNews } from "../services/newsService";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 5;

  useEffect(() => {
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
    <View style={styles.container}>
      <ScrollView>
        {news.map((article, index) => (
          <News key={index} article={article} />
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
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default NewsScreen;
