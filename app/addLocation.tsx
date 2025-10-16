import { LOCATIONS_DATA } from "@/data/fixedCoordinate";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css";

const SEARCH_HISTORY_KEY = "search_history";

export default function AddLocation() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    try {
      const saved = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Error loading search history:", error);
    }
  };

  const saveSearchHistory = async (newHistory: string[]) => {
    try {
      await AsyncStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(newHistory)
      );
    } catch (error) {
      console.error("Error saving search history:", error);
    }
  };

  const handleSearch = (text: string) => {
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

  const handleSelectLocation = (locationName: string) => {
    const alreadyExists = searchHistory.includes(locationName);
    if (!alreadyExists) {
      const newHistory = [locationName, ...searchHistory];
      setSearchHistory(newHistory);
      saveSearchHistory(newHistory);
    }
    router.back();
  };

  const clearSearchHistory = async () => {
    setSearchHistory([]);
    await saveSearchHistory([]);
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
                onPress={() => handleSelectLocation(location.name)}
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
              <TouchableOpacity onPress={clearSearchHistory}>
                <Feather name="trash-2" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {searchHistory.length > 0 ? (
              <View className="flex-row flex-wrap mb-6">
                {searchHistory.map((term, index) => (
                  <TouchableOpacity
                    key={index}
                    className="bg-gray-100 rounded-2xl px-5 py-3 mr-3 mb-3"
                    onPress={() => handleSearch(term)}
                  >
                    <Text className="text-black text-base">{term}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text className="text-gray-400 text-sm mb-6 pt-5">
              </Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
}