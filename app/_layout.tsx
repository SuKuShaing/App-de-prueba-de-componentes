import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	if (!loaded) {
		// Async font loading only occurs in development.
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<View className="bg-light-background dark:bg-dark-background">
				<Text className="mt-10 text-3xl font-bold text-center text-light-primary dark:text-dark-primary">
					Hola Mundo
				</Text>
			</View>
			{/* <Stack>
      </Stack> */}
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
