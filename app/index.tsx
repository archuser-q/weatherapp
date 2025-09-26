import { hourlyForecast } from '@/mockupdata/forecastInDay';
import { renderWeatherIcon } from '@/utils/renderIcon';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-gray-50">
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

        {/* Hourly Forecast ScrollView */}
        <View className="w-full px-4">
          <Text className="text-lg font-bold mb-3 text-center">Dự báo theo giờ</Text>
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
      </View>
    </SafeAreaProvider>
  );
}