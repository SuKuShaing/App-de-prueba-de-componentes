import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useState } from "react";
// useColorScheme hay que renombrarlo a useColorSchemeNativeWind, porque ya existe una función con ese nombre en react-native
// que se está usando en el archivo _layout.tsx

const ThemesScreen = () => {

	// const theme = useColorScheme(); // este se importa de react-native
    // const { colorScheme, setColorScheme } = useColorSchemeNativeWind(); // este se importa de nativewind
	const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangerContext(); // este se importa de la context


	const [darkModeSettings, setDarkModeSettings] = useState({
		darkMode: currentTheme === "dark",
		systemMode: isSystemTheme,
	});

    const setDarkMode = (value: boolean) => {
        // setColorScheme(value ? "dark" : "light");
		toggleTheme();

        setDarkModeSettings({
            darkMode: value,
            systemMode: false,
        });
    };

    const setSystemMode = (value: boolean) => {
		if (value) {
			setDarkModeSettings({
				darkMode: darkModeSettings.darkMode,
				systemMode: true,
			});
			setSystemTheme();
		};
	};

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
