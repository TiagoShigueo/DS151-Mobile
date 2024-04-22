import Colors from "../constants/Colors";
import { View, Text } from "./Themed";
import { LineGraph, GraphPoint } from "react-native-graph";
import timeseries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator } from "react-native";

const query = gql`
  query MyQuery($symbol: String!, $interval: String!) {
    time_series(interval: $interval, symbol: $symbol) {
      values {
        close
        datetime
      }
    }
  }
`;

const Graph = ({ symbol }: { symbol: String }) => {
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>();

  const { data, loading, error } = useQuery(query, {
    variables: {
      symbol,
      interval: "1day",
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const points: GraphPoint[] = data.time_series.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  })); /*map funciona pra converter o formatação do dado */
  // console.log(JSON.stringify(points, null, 2));

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };
  return (
    <View>
      <Text>Graph</Text>

      <MonoText style={{ fontSize: 20, fontWeight: "bold", color: "#017560" }}>
        ${selectedPoint?.value.toFixed(2)}
      </MonoText>
      <Text style={{ color: "gray" }}>
        {selectedPoint?.date.toDateString()}
      </Text>

      {/* Line Graph não funciona para Web */}
      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={points} // Points precisa de date e value pra funcionar
        animated={true}
        color="#017560"
        gradientFillColors={["#0175605D", "#7476df00"]} // Colocaração da área do gráfico
        enablePanGesture={true} // Precisa deixar pressionado por um tempo
        onPointSelected={onPointSelected}
        // enableIndicator
        // indicatorPulsating
        // enableFadeInMask
      />
    </View>
  );
};

export default Graph;
