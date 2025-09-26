import { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Radar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(false);

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View className="flex-1 pt-20 px-5 space-y-6">
          <Text className="text-4xl font-bold mb-4">Settings</Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-xl">Dark/light mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-xl">Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-xl">Location access</Text>
            <Switch
              value={locationAccess}
              onValueChange={setLocationAccess}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Radar;