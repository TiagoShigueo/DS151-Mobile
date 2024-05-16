import { StyleSheet } from "react-native";

const Idv = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  centralizedContainer: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
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
  navbar: {
    backgroundColor: "#333",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Idv;
