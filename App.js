import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text>Olá!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
