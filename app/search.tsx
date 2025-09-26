import { ScrollView, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const About = () => {
    return(
      <SafeAreaProvider>
        <ScrollView>
          <View className="flex-1 items-center justify-center pt-20 mx-5">
            <TextInput
              placeholder="Search for city ..."
              className="w-full h-12 px-5 bg-white rounded-full shadow-md"
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
}

export default About;