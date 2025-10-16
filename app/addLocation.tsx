import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function AddLocation() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-50 px-4 pt-12 pb-5">
      <View className="px-5 pt-3">
        <View className="bg-gray-100 rounded-3xl flex-row items-center px-4 mb-5">
          <Feather name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Enter location"
            placeholderTextColor="#9CA3AF"
            className="flex-1 py-4 pl-3 text-base"
            autoFocus
          />
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-blue-500 text-base font-semibold">Cancel</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-400 text-base mb-3">Current location</Text>
        <TouchableOpacity className="bg-white rounded-2xl p-4 mb-6 flex-row items-center">
          <Feather name="map-pin" size={22} color="#3B82F6" />
          <Text className="text-blue-500 text-base ml-3">Get current location</Text>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-gray-400 text-base">Search history</Text>
          <Feather name="trash-2" size={20} color="#9CA3AF" />
        </View>
        <View className="flex-row mb-6">
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mr-3">
            <Text className="text-black text-base">Hello</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3">
            <Text className="text-black text-base">Hanoi</Text>
          </View>
        </View>

        <Text className="text-gray-400 text-base mb-3">Popular locations</Text>
        <View className="flex-row flex-wrap mb-6">
          <View className="bg-blue-50 rounded-2xl px-5 py-3 mr-3 mb-3">
            <Text className="text-blue-500 text-base">Delhi</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mr-3 mb-3">
            <Text className="text-black text-base">Mumbai</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mb-3">
            <Text className="text-black text-base">Jakarta</Text>
          </View>
          <View className="bg-blue-50 rounded-2xl px-5 py-3 mr-3 mb-3">
            <Text className="text-blue-500 text-base">Kuala Lumpur</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mr-3 mb-3">
            <Text className="text-black text-base">Singapore</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mr-3 mb-3">
            <Text className="text-black text-base">Los Angeles</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl px-5 py-3 mb-3">
            <Text className="text-black text-base">New York</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}