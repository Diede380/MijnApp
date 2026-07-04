import { useProducts } from "../context/ProductContext";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export function AddProductScreen() {
  const [naam, setNaam] = useState("");
  const [locatie, setLocatie] = useState("");
  const [categorie, setCategorie] = useState("");
  const [hoeveelheid, setHoeveelheid] = useState("");
  const [eenheid, setEenheid] = useState("");
  const [houdbaarTot, setHoudbaarTot] = useState("");
  const [extraDagen, setExtraDagen] = useState("");
  const [waarschuwingDagen, setWaarschuwingDagen] = useState("");
  const { addProduct } = useProducts();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>➕ Product toevoegen</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Naam product</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. Melk"
          value={naam}
          onChangeText={setNaam}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Locatie</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. Koelkast"
          value={locatie}
          onChangeText={setLocatie}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Categorie</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. Zuivel"
          value={categorie}
          onChangeText={setCategorie}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Hoeveelheid</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. 2"
          keyboardType="numeric"
          value={hoeveelheid}
          onChangeText={setHoeveelheid}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Eenheid</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. liter, stuks, gram"
          value={eenheid}
          onChangeText={setEenheid}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Houdbaar tot</Text>
        <TextInput
          style={styles.input}
          placeholder="Bijv. 12-07-2026"
          value={houdbaarTot}
          onChangeText={setHoudbaarTot}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Nog bruikbaar na datum</Text>
        <TextInput
          style={styles.input}
          placeholder="Aantal dagen"
          keyboardType="numeric"
          value={extraDagen}
          onChangeText={setExtraDagen}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Waarschuwing vooraf</Text>
        <TextInput
          style={styles.input}
          placeholder="Aantal dagen vooraf"
          keyboardType="numeric"
          value={waarschuwingDagen}
          onChangeText={setWaarschuwingDagen}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Opslaan"
          onPress={() => {
            addProduct({
    id: Date.now().toString(),
              naam,
              locatie,
              categorie,
              hoeveelheid,
              eenheid,
              houdbaarTot,
              extraDagen,
              waarschuwingDagen,
            });

            alert("Product opgeslagen.");
          }}
        />
      </View>
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
  field: {
    marginBottom: 14,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 50,
  },
});