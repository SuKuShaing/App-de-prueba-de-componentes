import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useColorScheme as useColorSchemeNativeWind } from "nativewind";
import { useState } from "react";
// useColorScheme hay que renombrarlo a useColorSchemeNativeWind, porque ya existe una función con ese nombre en react-native
// que se está usando en el archivo _layout.tsx

const ThemesScreen = () => {
	// const theme = useColorScheme(); // este se importa de react-native
    const { colorScheme, setColorScheme } = useColorSchemeNativeWind(); // este se importa de nativewind


	const [darkModeSettings, setDarkModeSettings] = useState({
		darkMode: colorScheme === "dark",
		systemMode: false,
	});

    const setDarkMode = (value: boolean) => {
        setColorScheme(value ? "dark" : "light");

        setDarkModeSettings({
            darkMode: value,
            systemMode: false,
        });
    }

    const setSystemMode = (value: boolean) => {
        setDarkModeSettings({
            darkMode: darkModeSettings.darkMode,
            systemMode: value,
        });
    }

	return (
		<ThemedView margin>
			<ThemeCard className="mt-5">
				<ThemeSwitch
					text="Dark Mode"
					className="mb-5"
					value={darkModeSettings.darkMode}
					onValueChange={setDarkMode}
				/>
				<ThemeSwitch
					text="System Mode"
					className="mb-5"
					value={darkModeSettings.systemMode}
					onValueChange={setSystemMode}
				/>
			</ThemeCard>
		</ThemedView>
	);
};
export default ThemesScreen;
