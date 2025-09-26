import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const renderWeatherIcon = (iconName: string) => {
    switch (iconName) {
      case 'day-sunny':
        return <Ionicons name="sunny" size={32} color="#FFD700" />;
      case 'day-cloudy':
        return <MaterialCommunityIcons name="weather-partly-cloudy" size={32} color="#87CEEB" />;
      case 'cloudy':
        return <Fontisto name="cloudy" size={32} color="#696969" />;
      case 'rain':
        return <Ionicons name="rainy" size={32} color="#4682B4" />;
      case 'night-partly-cloudy':
        return <MaterialCommunityIcons name="weather-night-partly-cloudy" size={32} color="#2F4F4F" />;
      default:
        return <Fontisto name="cloudy" size={32} color="#696969" />;
    }
  };