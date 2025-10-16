import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { create } from 'zustand';

export interface CityWeather {
  id: number;
  name: string;
  region: string;
  temp: string;
  high: string;
  low: string;
  latitude: number;
  longitude: number;
}

interface WeatherStore {
  cities: CityWeather[];
  loading: boolean;
  error: string | null;
  addCity: (location: {
    id: number;
    name: string;
    region: string;
    latitude: number;
    longitude: number;
  }) => Promise<void>;
  removeCity: (id: number) => void;
  fetchWeather: (latitude: number, longitude: number) => Promise<{
    temp: string;
    high: string;
    low: string;
  }>;
  loadCities: () => Promise<void>;
  saveCities: (cities: CityWeather[]) => Promise<void>;
}

const STORAGE_KEY = 'weather_cities';

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  cities: [],
  loading: false,
  error: null,

  fetchWeather: async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      );

      const current = response.data.current;
      const daily = response.data.daily;

      return {
        temp: Math.round(current.temperature_2m).toString(),
        high: Math.round(daily.temperature_2m_max[0]).toString(),
        low: Math.round(daily.temperature_2m_min[0]).toString(),
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  },

  saveCities: async (cities: CityWeather[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
    } catch (error) {
      console.error('Error saving cities:', error);
    }
  },

  loadCities: async () => {
    try {
      set({ loading: true });
      const savedCities = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedCities) {
        set({ cities: JSON.parse(savedCities), loading: false });
      } else {
        set({ loading: false });
      }
    } catch (error) {
      console.error('Error loading cities:', error);
      set({ error: 'Failed to load saved cities', loading: false });
    }
  },

  addCity: async (location) => {
    set({ loading: true, error: null });
    try {
      const weatherData = await get().fetchWeather(
        location.latitude,
        location.longitude
      );

      const newCity: CityWeather = {
        ...location,
        ...weatherData,
      };

      const updatedCities = [...get().cities, newCity];
      set({
        cities: updatedCities,
        loading: false,
      });
      await get().saveCities(updatedCities);
    } catch (error) {
      set({
        error: 'Failed to fetch weather data',
        loading: false,
      });
    }
  },

  removeCity: async (id: number) => {
    const updatedCities = get().cities.filter((city) => city.id !== id);
    set({
      cities: updatedCities,
    });
    await get().saveCities(updatedCities);
  },
}));