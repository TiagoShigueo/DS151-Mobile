{
  /*Opção Dropdown element*/
}
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { readRemoteFile } from "react-native-csv";
// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

const DropdownComponent = () => {
  const [value, setValue] = useState<string | null>(null);

  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    readRemoteFile("./fundosListadosEdited.csv", {
      complete: (results: any) => {
        const csvDataArray = results.data;
        const convertedData = csvDataArray.map(
          (item: { [x: string]: any }) => ({
            label: item["Codigo"],
            value: item["Codigo"],
          })
        );
        console.log("convertedData: ", convertedData);
        setItems(convertedData);
      },

      header: true,
    });
  }, []);
  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        // placeholderStyle={styles.placeholderStyle}
        // selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={items}
        search
        // maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "Selecione o fundo"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? "blue" : "black"}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

{
  /* Opção Dropdown Picker
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { readRemoteFile } from "react-native-csv";
import { Dropdown } from "react-native-element-dropdown";
interface Fruit {
  label: string;
  value: string;
}
const initialItems: Fruit[] = [];
export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(initialItems);
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    readRemoteFile("./fundosListadosEdited.csv", {
      complete: (results: any) => {
        const csvDataArray = results.data;
        const convertedData = csvDataArray.map(
          (item: { [x: string]: any }) => ({
            label: item["Codigo"],
            value: item["Codigo"],
          })
        );
        console.log("convertedData: ", convertedData);
        setItems(convertedData);
      },

      header: true,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Opção Dropdown Picker</Text>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Choose a fruit."}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Chosen fruit: {value === null ? "none" : value}</Text>
      </View>
    </View>
  );
}
*/
}
