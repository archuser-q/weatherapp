import { getBackgroundColor, getWeatherCondition } from "@/automatic/convertBackgroundAndCondition";
import { useWeatherStore } from "@/data/cities";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import "../global.css";

export default function Index() {
  const router = useRouter();
  const { cities, loading, removeCity } = useWeatherStore();

  const handleSearchPress = () => {
    router.push("/addLocation");
  };

  const renderRightActions = (cityId: string) => (
    <View className="justify-center items-center px-2 pb-4">
      <TouchableOpacity
        className="bg-red-500 h-16 w-16 rounded-full justify-center items-center"
        onPress={() => removeCity(cityId)}
        activeOpacity={0.8}
      >
        <Feather name="trash-2" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  useFocusEffect(
    useCallback(() => {
      // Component refocus
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      useWeatherStore.getState().loadCities();
    }, [])
  );

  useEffect(() => {
    useWeatherStore.getState().loadCities();
  }, []);

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <ScrollView 
          className="flex-1 px-4 pt-14"
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            className="text-4xl font-normal pt-10 py-3 pl-4"
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

          {loading && (
            <View className="items-center justify-center py-8">
              <ActivityIndicator size="large" color="#3B82F6" />
              <Text className="text-gray-400 text-sm mt-3">Loading weather data...</Text>
            </View>
          )}

          {cities.length === 0 && !loading && (
            <View className="items-center justify-center py-8">
              <Feather name="map-pin" size={40} color="#D1D5DB" />
              <Text className="text-gray-400 text-base mt-3">
                No cities added yet
              </Text>
            </View>
          )}

          {cities.map((city) => {
            const condition = getWeatherCondition(parseInt(city.temp));
            const bgColor = getBackgroundColor(parseInt(city.temp));

            return (
              <Swipeable
                key={city.id}
                renderRightActions={() => renderRightActions(city.id)}
                overshootRight={false}
              >
                <View className={`${bgColor} rounded-3xl p-5 mb-4 h-[105px]`}>
                  <View className="flex-row justify-between items-start">
                    <View className="flex-1">
                      <Text className="text-white text-3xl font-semibold mb-1">
                        {city.name}
                      </Text>
                      <Text className="text-white text-sm opacity-75 mt-1">
                        {condition}
                      </Text>
                    </View>
                    <View className="items-end">
                      <Text className="text-white text-5xl font-medium">
                        {city.temp}°
                      </Text>
                      <Text className="text-white text-base opacity-90">
                        {city.high}° / {city.low}°
                      </Text>
                    </View>
                  </View>
                </View>
              </Swipeable>
            );
          })}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/detail")}
          >
            <View className="bg-blue-500 rounded-full px-5 py-3 mb-6 self-start ml-4">
              <Text className="text-white text-base font-medium">Go to Detail</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </GestureHandlerRootView>
    
  );
}