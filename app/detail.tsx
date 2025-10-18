import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Detail() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/43e9c51f7b907d1961a23df3fc2c7f78.gif")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row justify-end items-center mt-16 mb-14 gap-5">
          <TouchableOpacity onPress={()=>router.push('/')}>
            <Feather name="plus" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {/* Main Temperature Section */}
        <View className="mb-72">
          <Text className="text-2xl font-normal text-white">Hanoi</Text>
          <Text className="text-[148px] font-light text-white">31°</Text>
          <Text className="text-xl text-white">Showers 30°/24°</Text>
        </View>

        {/* 5-day Forecast */}
        <TouchableOpacity className="bg-white/20 backdrop-blur-md rounded-3xl px-6 py-6 mb-6">
            {[
            { day: "Today", icon: "🌧️", min: 24, max: 30 },
            { day: "Tomorrow", icon: "☀️", min: 24, max: 31 },
            { day: "Fri", icon: "⛅", min: 24, max: 32 },
            ].map((item, i) => (
                <View key={i} className="flex-row items-center mb-6">
                <View className="flex-[1.2]">
                    <Text className="text-lg text-white font-light">{item.day}</Text>
                </View>
                <View className="flex-[0.8] items-center">
                    <Text className="text-2xl">{item.icon}</Text>
                </View>
                <View className="flex-[2] flex-row justify-end items-center self-center">
                    <Text className="text-white text-base min-w-[28px] text-right">{item.min}°</Text>
                    <View className="w-16 h-[3px] bg-orange-400 rounded-full mx-2" />
                    <Text className="text-white text-base min-w-[28px] text-left">{item.max}°</Text>
                </View>
                </View>
            ))}

            <TouchableOpacity className="bg-white/40 rounded-full">
                <Text className="text-center text-white text-xl font-normal py-4">
                5-day forecast
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>

        {/* 24-hour Forecast */}
        <View className="bg-white/20 backdrop-blur-md rounded-3xl px-6 py-6 mb-6">
          <Text className="text-lg text-white font-light mb-6">
            24-hour forecast
          </Text>
          <View className="h-24 mb-4">
            <View className="flex-row justify-between items-end h-full">
              <View className="items-center">
                <Text className="text-white text-sm mb-2">28°</Text>
                <Text className="text-2xl mb-2">🌧️</Text>
                <Text className="text-xs text-white">Now</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-sm mb-2">27°</Text>
                <Text className="text-2xl mb-2">⛅</Text>
                <Text className="text-xs text-white">17:00</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-sm mb-2">27°</Text>
                <Text className="text-2xl mb-2">⛅</Text>
                <Text className="text-xs text-white">17:34</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-sm mb-2">27°</Text>
                <Text className="text-2xl mb-2">☀️</Text>
                <Text className="text-xs text-white">Sunset</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-sm mb-2">26°</Text>
                <Text className="text-2xl mb-2">⛅</Text>
                <Text className="text-xs text-white">19:00</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-sm mb-2">26°</Text>
                <Text className="text-2xl mb-2">🌧️</Text>
                <Text className="text-xs text-white">20:00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}