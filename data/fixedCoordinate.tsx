export interface LocationData {
  id: number;
  name: string;
  region: string;
  latitude: number | null;
  longitude: number | null;
}
export const LOCATIONS_DATA = [
  { id: 1, name: "Hanbin", region: "Ankang, Shanxi, China", latitude: 32.8897, longitude: 108.9044 },
  { id: 2, name: "Hancheng", region: "Weinan, Shanxi, China", latitude: 35.4768, longitude: 110.4428 },
  { id: 3, name: "Hanchuan", region: "Xiaogan, Hubei, China", latitude: 30.6500, longitude: 113.7667 },
  { id: 4, name: "Handan", region: "Handan, Hebei, China", latitude: 36.6257, longitude: 114.5390 },
  { id: 7, name: "Hangzhou", region: "Hangzhou, Zhejiang, China", latitude: 30.2937, longitude: 120.1614 },
  { id: 8, name: "Hanjiang", region: "Yangzhou, Jiangsu, China", latitude: 32.3775, longitude: 119.3980 },
  { id: 9, name: "Hanjiang", region: "Putian, Fujian, China", latitude: 25.4586, longitude: 119.1164 },
  { id: 10, name: "Hannan", region: "Wuhan, Hubei, China", latitude: 30.3053, longitude: 114.0840 },
  { id: 11, name: "Hanoi", region: "Hanoi, Vietnam", latitude: 21.0245, longitude: 105.8412 },
  { id: 12, name: "Bangkok", region: "Bangkok, Thailand", latitude: 13.7367, longitude: 100.5232 },
  { id: 13, name: "Haiphong", region: "Haiphong, Vietnam", latitude: 20.8648, longitude: 106.6835 },
  { id: 14, name: "Delhi", region: "Delhi, India", latitude: 28.6100, longitude: 77.2300 },
  { id: 15, name: "Mumbai", region: "Maharashtra, India", latitude: 19.0761, longitude: 72.8775 },
  { id: 16, name: "Kolkata", region: "West Bengal, India", latitude: 22.5726, longitude: 88.3639 },
  { id: 17, name: "New York City", region: "New York, USA", latitude: 40.6700, longitude: -73.9400 },
  { id: 18, name: "Los Angeles", region: "California, USA", latitude: 34.1100, longitude: -118.4100 },
  { id: 19, name: "Chicago", region: "Illinois, USA", latitude: 41.8400, longitude: -87.6800 },
  { id: 20, name: "Berlin", region: "Berlin, Germany", latitude: 52.5200, longitude: 13.4050 },
  { id: 21, name: "Munich", region: "Bavaria, Germany", latitude: 48.1351, longitude: 11.5820 },
  { id: 22, name: "Hamburg", region: "Hamburg, Germany", latitude: 53.5511, longitude: 9.9937 },
  { id: 23, name: "Manila", region: "Metro Manila, Philippines", latitude: 14.5958, longitude: 120.9772 },
  { id: 24, name: "Quezon City", region: "Metro Manila, Philippines", latitude: 14.6760, longitude: 121.0437 },
  { id: 25, name: "Cebu City", region: "Cebu, Philippines", latitude: 10.3157, longitude: 123.8854 },

  { id: 26, name: "Tokyo", region: "Tokyo, Japan", latitude: 35.6764, longitude: 139.6500 },
  { id: 27, name: "Osaka", region: "Osaka, Japan", latitude: 34.6937, longitude: 135.5023 },
  { id: 28, name: "Seoul", region: "Seoul, South Korea", latitude: 37.5665, longitude: 126.9780 },
  { id: 29, name: "Busan", region: "Busan, South Korea", latitude: 35.1796, longitude: 129.0756 },
  { id: 30, name: "Singapore", region: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { id: 31, name: "Kuala Lumpur", region: "Selangor, Malaysia", latitude: 3.1390, longitude: 101.6869 },
  { id: 32, name: "Jakarta", region: "Java, Indonesia", latitude: -6.2088, longitude: 106.8456 },
  { id: 33, name: "Ho Chi Minh City", region: "Southern Vietnam", latitude: 10.7769, longitude: 106.7009 },
  { id: 34, name: "Taipei", region: "Taipei, Taiwan", latitude: 25.0330, longitude: 121.5654 },
  { id: 35, name: "Hong Kong", region: "Hong Kong SAR, China", latitude: 22.3193, longitude: 114.1694 },
  { id: 36, name: "Beijing", region: "Beijing, China", latitude: 39.9042, longitude: 116.4074 },
  { id: 37, name: "Shanghai", region: "Shanghai, China", latitude: 31.2304, longitude: 121.4737 },
  { id: 38, name: "Shenzhen", region: "Guangdong, China", latitude: 22.5431, longitude: 114.0579 },
  { id: 39, name: "Guangzhou", region: "Guangdong, China", latitude: 23.1291, longitude: 113.2644 },

  { id: 40, name: "Paris", region: "Île-de-France, France", latitude: 48.8566, longitude: 2.3522 },
  { id: 41, name: "London", region: "England, United Kingdom", latitude: 51.5072, longitude: -0.1276 },
  { id: 42, name: "Rome", region: "Lazio, Italy", latitude: 41.9028, longitude: 12.4964 },
  { id: 43, name: "Madrid", region: "Community of Madrid, Spain", latitude: 40.4168, longitude: -3.7038 },
  { id: 44, name: "Amsterdam", region: "North Holland, Netherlands", latitude: 52.3676, longitude: 4.9041 },
  { id: 45, name: "Zurich", region: "Zurich, Switzerland", latitude: 47.3769, longitude: 8.5417 },
  { id: 46, name: "Vienna", region: "Vienna, Austria", latitude: 48.2082, longitude: 16.3738 },
  { id: 47, name: "Prague", region: "Czech Republic", latitude: 50.0755, longitude: 14.4378 },

  { id: 48, name: "Toronto", region: "Ontario, Canada", latitude: 43.6510, longitude: -79.3470 },
  { id: 49, name: "Vancouver", region: "British Columbia, Canada", latitude: 49.2827, longitude: -123.1207 },
  { id: 50, name: "Mexico City", region: "Mexico", latitude: 19.4326, longitude: -99.1332 },
  { id: 51, name: "São Paulo", region: "Brazil", latitude: -23.5505, longitude: -46.6333 },
  { id: 52, name: "Buenos Aires", region: "Argentina", latitude: -34.6037, longitude: -58.3816 },
  { id: 53, name: "Santiago", region: "Chile", latitude: -33.4489, longitude: -70.6693 },

  { id: 54, name: "Cairo", region: "Egypt", latitude: 30.0444, longitude: 31.2357 },
  { id: 55, name: "Nairobi", region: "Kenya", latitude: -1.2864, longitude: 36.8172 },
  { id: 56, name: "Johannesburg", region: "Gauteng, South Africa", latitude: -26.2041, longitude: 28.0473 },
  { id: 57, name: "Lagos", region: "Nigeria", latitude: 6.5244, longitude: 3.3792 },
  { id: 58, name: "Cape Town", region: "Western Cape, South Africa", latitude: -33.9249, longitude: 18.4241 },

  { id: 59, name: "Sydney", region: "New South Wales, Australia", latitude: -33.8688, longitude: 151.2093 },
  { id: 60, name: "Melbourne", region: "Victoria, Australia", latitude: -37.8136, longitude: 144.9631 },
  { id: 61, name: "Auckland", region: "Auckland, New Zealand", latitude: -36.8485, longitude: 174.7633 },
  { id: 62, name: "Wellington", region: "Wellington, New Zealand", latitude: -41.2865, longitude: 174.7762 },
];
