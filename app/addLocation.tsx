import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css";

const LOCATIONS_DATA = [
  { id: 1, name: "Hanbin", region: "Ankang, Shanxi, China" },
  { id: 2, name: "Hancheng", region: "Weinan, Shanxi, China" },
  { id: 3, name: "Hanchuan", region: "Xiaogan, Hubei, China" },
  { id: 4, name: "Handan", region: "Handan, Hebei, China" },
  { id: 5, name: "Hanggin Houqi", region: "Linhe, Neimenggu, China" },
  { id: 6, name: "Hangjinqi", region: "Eerduosi, Neimenggu, China" },
  { id: 7, name: "Hangzhou", region: "Hangzhou, Zhejiang, China" },
  { id: 8, name: "Hanjiang", region: "Yangzhou, Jiangsu, China" },
  { id: 9, name: "Hanjiang", region: "Putian, Fujian, China" },
  { id: 10, name: "Hannan", region: "Wuhan, Hubei, China" },
  { id: 11, name: "Hanoi", region: "Hanoi, Vietnam" },
  { id: 12, name: "Bangkok", region: "Bangkok, Thailand" },
  { id: 13, name: "Haiphong", region: "Haiphong, Vietnam" },
];

export default function AddLocation() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (text:string) => {
    setSearchText(text);

    if (text.trim() === "") {
      setFilteredResults([]);
      setIsSearching(false);
    } else {
      setIsSearching(true);
      const results = LOCATIONS_DATA.filter((location) =>
        location.name.toLowerCase().includes(text.toLowerCase()) ||
        location.region.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

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
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-blue-500 text-base font-semibold">Cancel</Text>
          </TouchableOpacity>
        </View>

        {isSearching && filteredResults.length > 0 ? (
          <View>
            {filteredResults.map((location) => (
              <TouchableOpacity
                key={location.id}
                className="bg-white rounded-2xl p-4 mb-3 border-b border-gray-100"
                onPress={() => {
                  // Xử lý khi chọn location
                  console.log("Selected:", location.name);
                  router.back();
                }}
              >
                <Text className="text-black text-base font-semibold">
                  {location.name}
                </Text>
                <Text className="text-gray-400 text-sm mt-1">
                  {location.region}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : isSearching && filteredResults.length === 0 ? (
          <View className="items-center justify-center py-8">
            <Feather name="search" size={40} color="#D1D5DB" />
            <Text className="text-gray-400 text-base mt-3">
              No locations found
            </Text>
          </View>
        ) : (
          <>
            <Text className="text-gray-400 text-base mb-3">Current location</Text>
            <TouchableOpacity className="bg-white rounded-2xl p-4 mb-6 flex-row">
              <Feather name="map-pin" size={22} color="#3B82F6" />
              <Text className="text-blue-500 text-base ml-3">
                Get current location
              </Text>
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

            <Text className="text-gray-400 text-base mb-3">
              Popular locations
            </Text>
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
          </>
        )}
      </View>
    </ScrollView>
  );
}