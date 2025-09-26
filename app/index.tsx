import { hourlyForecast } from '@/mockupdata/forecastInDay';
import { weeklyForecast } from '@/mockupdata/forecastWeeks';
import { renderWeatherIcon } from '@/utils/renderIcon';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View className="flex-1 items-center justify-center pt-20">
          <View className="items-center mb-8">
            <Fontisto name="cloudy" size={200} color="black" />
            <View className='-mt-[20px] pb-5 items-center'>
              <Text className='font-bold text-[40px]'>25°C</Text>
              <Text className='font-bold text-[20px]'>Ha Dong, Ha Noi</Text>
            </View>
            <View className="flex-row items-center gap-x-[70px]">
              <View className="flex-row gap-2">
                <Feather name="wind" size={24} color="black" />
                <Text className="text-[18px]">19 km/h</Text>
              </View>
              <View className="flex-row gap-2">
                <Entypo name="water" size={24} color="black" />
                <Text className="text-[18px]">6%</Text>
              </View>
            </View>
          </View>

          <View className="w-full">
            <Text className="text-xl font-bold mb-3 text-center">Hourly Forecast</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              className="w-full"
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {hourlyForecast.map((item, index) => (
                <View 
                  key={index}
                  className="bg-white rounded-2xl p-4 mx-1 items-center shadow-sm border border-gray-100"
                  style={{ minWidth: 80 }}
                >
                  <Text className="text-sm font-medium mb-2 text-gray-600">
                    {item.time}
                  </Text>
                  <View className="mb-2">
                    {renderWeatherIcon(item.icon)}
                  </View>
                  <Text className="text-lg font-bold text-gray-800">
                    {item.temp}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          
          <View className="w-full pt-10">
            <Text className="text-xl font-bold mb-3 text-center">Weekly Forecast</Text>
            <ScrollView
              className="w-full rounded-2xl"
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {weeklyForecast.map((item, index) => (
                <View
                  key={index}
                  className="flex-row items-center bg-white p-4 mb-2 rounded-2xl shadow-sm border justify-between border-gray-200"
                >
                  <View className="w-24">
                    <Text className="text-sm font-medium text-gray-800">{item.day}</Text>
                  </View>
                  <View className="w-16 items-center">
                    <Ionicons name="rainy-outline" size={20} color="blue" />
                    <Text className="text-sm text-blue-600">{item.rain}%</Text>
                  </View>
                  <View className="w-16 items-center">
                    <Text className="text-sm text-gray-700">{item.low}°C</Text>
                  </View>
                  <View className="w-16 items-center">
                    <Text className="text-sm text-gray-700">{item.high}°C</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}