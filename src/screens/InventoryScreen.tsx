import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useProducts } from "../context/ProductContext";

export function InventoryScreen() {
  const { voorraad } = useProducts();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📦 Voorraad</Text>

      {voorraad.length === 0 ? (
        <Text>Geen voorraad gevonden.</Text>
      ) : (
        voorraad.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.productNaam}</Text>
            <Text>
              {item.hoeveelheid} {item.eenheid}
            </Text>
            <Text>
              {item.locatie} - {item.categorie}
            </Text>
            <Text>Houdbaar tot: {item.houdbaarTot}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F4F4F4" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: "bold" },
});