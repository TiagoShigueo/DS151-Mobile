import Colors from "../constants/Colors";
import { View, Text } from "./Themed";
import { LineGraph, GraphPoint } from "react-native-graph";
import timeseries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";
import { useState } from "react";

const Graph = () => {
  const points: GraphPoint[] = timeseries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  })); /*map funciona pra converter o formatação do dado */
  // console.log(JSON.stringify(points, null, 2));

  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(
    points[points.length - 1]
  );

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
