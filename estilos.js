import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  um: {
    width: "100%",
    flex: 2,
    backgroundColor: "salmon",
  },

  dois: {
    width: "100%",
    flex: 3,
    backgroundColor: "lightgreen",
  },
  titulo: {
    textAlign: "center",
    color: "blue",
    fontSize: 32,
  },
  subtitulo: {
    textAlign: "center",
    color: "#f00",
    fontSize: 24,
  },
});

export default estilos;
