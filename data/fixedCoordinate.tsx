export interface LocationData {
  id: number;
  name: string;
  region: string;
  latitude: number | null;
  longitude: number | null;
}

export const LOCATIONS_DATA: LocationData[] = [
  { id: 1, name: "Hanoi", region: "Vietnam", latitude: 21.0285, longitude: 105.8542 },
  { id: 2, name: "Ho Chi Minh City", region: "Vietnam", latitude: 10.7769, longitude: 106.7009 },
  { id: 3, name: "Da Nang", region: "Vietnam", latitude: 16.0471, longitude: 108.2068 },
  { id: 4, name: "Hue", region: "Vietnam", latitude: 16.4637, longitude: 107.5909 },
  { id: 5, name: "Can Tho", region: "Vietnam", latitude: 10.0452, longitude: 105.7469 },
  { id: 6, name: "Nha Trang", region: "Vietnam", latitude: 12.2388, longitude: 109.1967 },
  { id: 7, name: "Vung Tau", region: "Vietnam", latitude: 10.4114, longitude: 107.1362 },
  { id: 8, name: "Hai Phong", region: "Vietnam", latitude: 20.8449, longitude: 106.6881 },
  { id: 9, name: "Bien Hoa", region: "Vietnam", latitude: 10.9447, longitude: 106.8243 },
  { id: 10, name: "Buon Ma Thuot", region: "Vietnam", latitude: 12.6667, longitude: 108.0500 },
  { id: 11, name: "Tokyo", region: "Japan", latitude: 35.6895, longitude: 139.6917 },
  { id: 12, name: "Seoul", region: "South Korea", latitude: 37.5665, longitude: 126.9780 },
  { id: 13, name: "Bangkok", region: "Thailand", latitude: 13.7563, longitude: 100.5018 },
  { id: 14, name: "Singapore", region: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { id: 15, name: "Kuala Lumpur", region: "Malaysia", latitude: 3.1390, longitude: 101.6869 },
  { id: 16, name: "Jakarta", region: "Indonesia", latitude: -6.2088, longitude: 106.8456 },
  { id: 17, name: "Manila", region: "Philippines", latitude: 14.5995, longitude: 120.9842 },
  { id: 18, name: "Beijing", region: "China", latitude: 39.9042, longitude: 116.4074 },
  { id: 19, name: "Shanghai", region: "China", latitude: 31.2304, longitude: 121.4737 },
  { id: 20, name: "New York", region: "United States", latitude: 40.7128, longitude: -74.0060 },
  { id: 21, name: "Los Angeles", region: "United States", latitude: 34.0522, longitude: -118.2437 },
  { id: 22, name: "London", region: "United Kingdom", latitude: 51.5074, longitude: -0.1278 },
  { id: 23, name: "Paris", region: "France", latitude: 48.8566, longitude: 2.3522 },
  { id: 24, name: "Berlin", region: "Germany", latitude: 52.5200, longitude: 13.4050 },
  { id: 25, name: "Sydney", region: "Australia", latitude: -33.8688, longitude: 151.2093 },
  { id: 26, name: "Toronto", region: "Canada", latitude: 43.6510, longitude: -79.3470 },
  { id: 27, name: "Moscow", region: "Russia", latitude: 55.7558, longitude: 37.6173 },
  { id: 28, name: "Cape Town", region: "South Africa", latitude: -33.9249, longitude: 18.4241 },
  { id: 29, name: "Rio de Janeiro", region: "Brazil", latitude: -22.9068, longitude: -43.1729 },
  { id: 30, name: "Buenos Aires", region: "Argentina", latitude: -34.6037, longitude: -58.3816 },
  { id: 31, name: "Barcelona", region: "Spain", latitude: 41.3851, longitude: 2.1734 },
  { id: 32, name: "Rome", region: "Italy", latitude: 41.9028, longitude: 12.4964 },
  { id: 33, name: "Istanbul", region: "Turkey", latitude: 41.0082, longitude: 28.9784 },
  { id: 34, name: "Dubai", region: "United Arab Emirates", latitude: 25.276987, longitude: 55.296249 },
  { id: 35, name: "Cairo", region: "Egypt", latitude: 30.0444, longitude: 31.2357 },
  { id: 36, name: "Lagos", region: "Nigeria", latitude: 6.5244, longitude: 3.3792 },
  { id: 37, name: "Nairobi", region: "Kenya", latitude: -1.2921, longitude: 36.8219 },
  { id: 38, name: "Lima", region: "Peru", latitude: -12.0464, longitude: -77.0428 },
  { id: 39, name: "Santiago", region: "Chile", latitude: -33.4489, longitude: -70.6693 },
  { id: 40, name: "Auckland", region: "New Zealand", latitude: -36.8485, longitude: 174.7633 }
];
