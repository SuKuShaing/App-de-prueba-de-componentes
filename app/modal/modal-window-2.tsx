import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

/*
Este es el modal que se va a abrir.
*/

const ModalScreen = () => {
	return (
		<ThemedView
			className="justify-center items-center flex-1"
			bgColor="#A52112"
		>
			<ThemeText type="h1" className="text-white font-bold">
				Hola soy otro modal, un modal dentro de otro modal
			</ThemeText>

			<ThemeButton
				onPress={() => router.dismiss()}
				className="m-4"
			>
				Cerrar este modal
			</ThemeButton>

			<ThemeButton
				onPress={() => router.dismissAll()}
				className="m-4"
			>
				Cerrar todos los modales
			</ThemeButton>

			<StatusBar
				// para que en ios se vea bien el modal, hay que poner light
				// hay que tomarlos de expo-status-bar
				style={Platform.OS === "ios" ? "light" : "auto"}
			/>
		</ThemedView>
	);
};

export default ModalScreen;
