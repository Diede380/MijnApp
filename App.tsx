import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProductProvider } from "./src/context/ProductContext";

import { HomeScreen } from "./src/screens/HomeScreen";
import { InventoryScreen } from "./src/screens/InventoryScreen";
import { AddProductScreen } from "./src/screens/AddProductScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { ProductsScreen } from "./src/screens/ProductsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "🏠 Home" }}
          />
          
          <Tab.Screen
            name="Producten"
            component={ProductsScreen}
            options={{ title: "📚 Producten" }}
          />

          <Tab.Screen
            name="Voorraad"
            component={InventoryScreen}
            options={{ title: "📦 Voorraad" }}
          />

          <Tab.Screen
            name="Toevoegen"
            component={AddProductScreen}
            options={{ title: "➕ Toevoegen" }}
          />

          <Tab.Screen
            name="Instellingen"
            component={SettingsScreen}
            options={{ title: "⚙️ Instellingen" }}
          />
        
        </Tab.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}