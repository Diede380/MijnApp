import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏠 HuisVoorraad</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚠️ Bijna over datum</Text>
        <Text>Geen producten gevonden.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📦 Categorieën</Text>
        <Text>🥛 Koelkast</Text>
        <Text>❄️ Vriezer</Text>
        <Text>🥫 Voorraadkast</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4", padding: 20 },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});