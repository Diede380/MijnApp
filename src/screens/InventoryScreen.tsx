import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useProducts } from "../context/ProductContext";

export function InventoryScreen() {
  const { producten } = useProducts();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📦 Voorraad</Text>

      {producten.length === 0 ? (
        <Text>Geen producten gevonden.</Text>
      ) : (
        producten.map((product) => (
          <View key={product.id} style={styles.card}>
            <Text style={styles.name}>{product.naam}</Text>
            <Text>
              {product.hoeveelheid} {product.eenheid}
            </Text>
            <Text>
              {product.locatie} - {product.categorie}
            </Text>
            <Text>Houdbaar tot: {product.houdbaarTot}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});