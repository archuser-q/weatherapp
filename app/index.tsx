import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center">
        <View className="items-center">
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
      </View>
    </SafeAreaProvider>
  );
}