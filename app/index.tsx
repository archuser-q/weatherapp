import { getBackgroundColor, getWeatherCondition } from "@/automatic/convertBackgroundAndCondition";
import { cities } from "@/data/cities";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Index() {
  const router = useRouter();

  const handleSearchPress = () => {
    router.push("/addLocation");
  };

  return (
    <ScrollView className="px-4 pt-12 pb-5">
      <Text
        className="text-4xl font-normal pt-5 py-3 pl-4"
        style={{ lineHeight: 50 }}
      >
        Manage cities
      </Text>
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={handleSearchPress}
      >
        <View className="bg-gray-200 rounded-full flex-row items-center px-3 pl-5 mb-6">
          <Feather name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Enter location ..."
            className="flex-1 py-3 pl-3"
            editable={false}
            pointerEvents="none"
          />
        </View>
      </TouchableOpacity>

      <Text className="text-gray-400 text-sm mb-3 pl-2">Added locations</Text>
      {cities.map((city, index) => {
        const condition = getWeatherCondition(city.temp);
        const bgColor = getBackgroundColor(city.temp);
        
        return (
          <View
            key={index}
            className={`${bgColor} rounded-3xl p-5 mb-4 h-40`}
          >
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white text-3xl font-semibold mb-1">
                  {city.name}
                </Text>
                <Text className="text-white text-base opacity-90">
                  {condition}
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
        );
      })}
    </ScrollView>
  );
}