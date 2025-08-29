// import { useColorScheme } from "@/hooks/useColorScheme.web";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useState } from "react";

/*
el desarrollo de esto se explica en la clase 150 de React Native con Expo por Fernando Herrera
*/

interface ThemeChangerContextType {
	currentTheme: "light" | "dark";
	isSystemTheme: boolean;

	toggleTheme: () => void;
	setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al themeChangerContext
export const useThemeChangerContext = () => {
	const themeChanger = useContext(ThemeChangerContext);

	return themeChanger;
};

// Provider para proveer el tema
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
	const { colorScheme, setColorScheme } = useColorScheme();

	const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
	const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

	const currentTheme = isSystemThemeEnabled
		? colorScheme
		: isDarkMode
			? "dark"
			: "light";

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<ThemeChangerContext.Provider
				value={{
					currentTheme: currentTheme ?? "light",
					isSystemTheme: isSystemThemeEnabled,
					toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode);
                        setColorScheme(isDarkMode ? "light" : "dark");
                        setIsSystemThemeEnabled(false);

                        // To Do: Guardar el tema en el storage
                    },

					setSystemTheme: async () => {
                        setIsSystemThemeEnabled(true);
                        setColorScheme('system');
                    },
				}}
			>
				{children}
			</ThemeChangerContext.Provider>
		</ThemeProvider>
	);
};
