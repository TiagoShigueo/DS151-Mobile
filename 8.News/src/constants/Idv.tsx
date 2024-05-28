import { StyleSheet } from "react-native";

const Idv = StyleSheet.create({
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
  navbar: {
    height: 60,
    backgroundColor: "#000080",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});

export default Idv;
