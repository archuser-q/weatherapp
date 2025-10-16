import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import "../global.css";

export default function Index() {
  const cities = [
    { name: "Hanoi", temp: "25°", condition: "Cloudy", high: "31°", low: "23°", bg: "bg-purple-400" },
    { name: "Delhi", temp: "24°", condition: "Haze", high: "31°", low: "19°", bg: "bg-yellow-600" },
    { name: "Kuala Lumpur", temp: "32°", condition: "Cloudy", high: "32°", low: "24°", bg: "bg-indigo-400" },
  ];

  return (
    <ScrollView className="px-4">
      <Text className="text-4xl font-normal py-5 pl-4">Manage cities</Text>
      
      <View className="bg-gray-200 rounded-full flex-row items-center px-3 pl-5 mb-6">
        <Feather name="search" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Enter location ..."
          className="flex-1 py-3 pl-3"
        />
      </View>

      <Text className="text-gray-400 text-sm mb-3 pl-2">Added locations</Text>

      {cities.map((city, index) => (
        <View
          key={index}
          className={`${city.bg} rounded-3xl p-5 mb-4 h-40`}
        >
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-white text-3xl font-semibold mb-1">
                {city.name}
              </Text>
              <Text className="text-white text-base opacity-90">
                {city.condition}
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-white text-6xl font-light">
                {city.temp}
              </Text>
              <Text className="text-white text-base opacity-90">
                {city.high} / {city.low}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}