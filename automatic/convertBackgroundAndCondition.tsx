export const getWeatherCondition = (temp: string) => {
    const t = parseInt(temp);
    if (t >= 35) return "Hot";
    if (t >= 30) return "Warm";
    if (t >= 25) return "Pleasant";
    if (t >= 20) return "Cool";
    if (t >= 15) return "Chilly";
    return "Cold";
  };

export const getBackgroundColor = (temp: string) => {
    const t = parseInt(temp);
    if (t >= 35) return "bg-red-500";
    if (t >= 30) return "bg-orange-500";
    if (t >= 25) return "bg-yellow-500";
    if (t >= 20) return "bg-green-500";
    if (t >= 15) return "bg-teal-500";
    return "bg-blue-500";
};