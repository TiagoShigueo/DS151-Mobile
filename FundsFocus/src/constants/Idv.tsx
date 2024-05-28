import { StyleSheet } from "react-native";

const Idv = StyleSheet.create({
  button: {
    backgroundColor: "#000080",
    padding: 10,
    borderRadius: 5,
    width: "auto",
    alignItems: "center",
    margin: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextWhite: {
    // fontFamily: "Arial",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  centralizedContainer: {
    marginHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0E0E0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingVertical: 10,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "fff",
  },
  list: {
    flexDirection: "row",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  navbar: {
    backgroundColor: "#333",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Idv;
