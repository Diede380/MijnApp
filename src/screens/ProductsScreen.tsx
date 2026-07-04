import { ScrollView, StyleSheet, Text } from "react-native";

export function ProductsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📚 Producten</Text>
      <Text>Hier komen straks de vaste productsoorten.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F4F4F4" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
});