import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./src/screens/HomeScreen";
import { InventoryScreen } from "./src/screens/InventoryScreen";
import { AddProductScreen } from "./src/screens/AddProductScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
  );
}