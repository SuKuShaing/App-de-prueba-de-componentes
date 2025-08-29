import { useColorScheme } from "@/hooks/useColorScheme.web";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { createContext, PropsWithChildren, useContext } from "react";

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
    const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<ThemeChangerContext.Provider
				value={{
					currentTheme: "light",
					isSystemTheme: false,
					toggleTheme: async () => {},
					setSystemTheme: async () => {},
				}}
			>
				{children}
			</ThemeChangerContext.Provider>
		</ThemeProvider>
	);
};
