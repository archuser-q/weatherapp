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
}

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

      set((state) => ({
        cities: [...state.cities, newCity],
        loading: false,
      }));
    } catch (error) {
      set({
        error: 'Failed to fetch weather data',
        loading: false,
      });
    }
  },

  removeCity: (id: number) => {
    set((state) => ({
      cities: state.cities.filter((city) => city.id !== id),
    }));
  },
}));