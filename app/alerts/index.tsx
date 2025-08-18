import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert, Text } from "react-native";

const AlertsScreen = () => {
	const createOneButtonAlert = () => {
		Alert.alert("Alerta de un Botón", "Mensaje de la alerta", [
			{
				text: "Ok",
				onPress: () => console.log("Botón Ok de la Alerta, presionado"),
				style: "cancel",
				// default es el estilo por defecto, se puede usar para personalizar el estilo del botón
				// cancel es el estilo de cancelar, se puede usar para personalizar el estilo del botón
				// destructive es el estilo de eliminar, se puede usar para personalizar el estilo del botón, solo para ios y lo pone en rojo
			},
		]);
	};

	const createTwoButtonAlert = () => {
		Alert.alert("Alerta de dos Botones", "Mensaje de la alerta", [
			{
				text: "Cancelar",
				onPress: () => console.log("Cancelar Pressed"),
				style: "cancel",
			},
			{
				text: "Aceptar",
				onPress: () => console.log("Aceptar Pressed"),
				style: "default",
			},
		]);
	};

	const createThreeButtonAlert = () =>
		Alert.alert("Alerta de tres Botones", "Mensaje de la alerta", [
			{
				text: "Default",
				onPress: () => console.log("Default Pressed"),
				isPreferred: true,
				style: "default",
			},
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "Destructive",
				onPress: () => console.log("Destructive Pressed"),
				style: "destructive",
			},
		]);

	return (
		<ThemedView safe margin>
			<Text className="text-center text-2xl font-bold mb-4">AlertsScreen</Text>
			<ThemeButton className="mb-4" onPress={createOneButtonAlert} >1-Button Alert</ThemeButton>
			<ThemeButton className="mb-4" onPress={createTwoButtonAlert} >2-Button Alert</ThemeButton>
			<ThemeButton className="mb-4" onPress={createThreeButtonAlert} >3-Button Alert</ThemeButton>
		</ThemedView>
	);
};
export default AlertsScreen;