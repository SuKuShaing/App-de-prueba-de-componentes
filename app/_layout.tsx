import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import "../global.css";

export default function RootLayout() {
	const backgroundColor = useThemeColor({}, "background"); // background color basado en el tema del dispositivo
	// const backgroundColor = useThemeColor({
	// 	light: "red", -> sobrescribe el color seleccionado (en este caso el background) por el color que le coloquemos, solo para el tema light
	// 	dark: "blue", -> puedo modificar el color también para el tema dark, puedo solo modificar uno o ambos en caso de que lo quiera así
	// }, "background"); // background color basado en el tema del dispositivo

	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	if (!loaded) {
		// Async font loading only occurs in development.
		return null;
	}

	return (
		<GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<ThemedView margin safe>
					<ThemeText className="mt-10 text-center" type="link" numberOfLines={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
					</ThemeText>
				</ThemedView>
				{/* <Stack> </Stack> */}
				<StatusBar style="auto" />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
