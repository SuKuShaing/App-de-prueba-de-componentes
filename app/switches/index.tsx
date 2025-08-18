import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useState } from "react";
import { Text } from "react-native";

const Switches = () => {
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	return (
		<ThemedView margin safe className="mt-2">
			<ThemeCard>
				{/* <Switch
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					// trackColor es el fondo del switch,
					thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
					// thumbColor es el color de la esfera,
					ios_backgroundColor="#3e3e3e"
					// ios_backgroundColor es el color del switch en iOS
					onValueChange={(value) => setState({ ...state, isActive: value })}
					// onValueChange es el evento que se ejecuta cuando el switch cambia de estado
					value={state.isActive}
					// value es el estado del switch
				/> */}
				<ThemeSwitch
					text="Active"
					onValueChange={(value) => setState({ ...state, isActive: value })}
					className="mb-2"
					value={state.isActive}
				/>
				<ThemeSwitch
					text="Hambriento"
					onValueChange={(value) => setState({ ...state, isHungry: value })}
					className="mb-2"
					value={state.isHungry}
				/>
				<ThemeSwitch
					text="Feliz"
					onValueChange={(value) => setState({ ...state, isHappy: value })}
					className="mb-2"
					value={state.isHappy}
				/>
			</ThemeCard>
			<Text className="m-3 text-center text-dark-100 dark:text-light-100 text-xl">
				IsActive: {state.isActive ? "Active" : "Inactive"}
			</Text>
			<Text className="m-3 text-center text-dark-100 dark:text-light-100 text-xl">
				IsHungry: {state.isHungry ? "Hambriento" : "No hambriento"}
			</Text>
			<Text className="m-3 text-center text-dark-100 dark:text-light-100 text-xl">
				IsHappy: {state.isHappy ? "Feliz" : "No feliz"}
			</Text>
		</ThemedView>
	);
};
export default Switches;
