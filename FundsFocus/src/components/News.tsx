import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Idv from "../constants/Idv";

interface NewsItemProps {
  article: {
    title: string;
    description: string;
    url: string;
  };
}

const NewsItem: React.FC<NewsItemProps> = ({ article }) => {
  const openArticle = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={Idv.articleContainer}>
      <Text style={Idv.title} onPress={() => openArticle(article.url)}>
        {article.title}
      </Text>
      <Text>{article.description}</Text>
    </View>
  );
};

export default NewsItem;
