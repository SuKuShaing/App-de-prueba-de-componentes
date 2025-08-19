import { useThemeColor } from "@/hooks/useThemeColor";
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
	const primaryColor = useThemeColor({}, "primary");
	const backgroundColor = useThemeColor(
		{
			dark: "black",
			light: "white",
		},
		"background"
	);

	const [isRefreshing, setIsRefreshing] = useState(false);

	const onRefresh = async () => {
		setIsRefreshing(true);

		setTimeout(() => {
			setIsRefreshing(false);
		}, 3000);
	};

	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					// RefreshControl es el componente que se encarga de la animación de refresco ya viene en RN
					refreshing={isRefreshing} // refreshing es el estado que se encarga de la animación de refresco, si es true, se muestra la animación de refresco
					onRefresh={onRefresh} // onRefresh es la función que se ejecuta cuando se hace pull to refresh
					// onRefresh={() => setIsRefreshing(true)}
					// colors={[primaryColor, "red", "blue", "green", "yellow"]} // colores de la animación, coloca el circulo como un hexágono
					progressBackgroundColor={backgroundColor} // color del fondo del circulo de carga
					// color y progressBackgroundColor solo funcionan en Android
				/>
			}
		>
			<ThemedView margin>
				<ThemeCard>
					<ThemeText>PullToRefreshScreen</ThemeText>
				</ThemeCard>
				<ThemeCard className="mt-4">
					<ThemeText>Tire para actualizar</ThemeText>
				</ThemeCard>
			</ThemedView>
		</ScrollView>
	);
};
export default PullToRefreshScreen;
