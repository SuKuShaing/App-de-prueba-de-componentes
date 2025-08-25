import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="modal-window"
				options={{
					presentation: "modal", // presentation, son todos los tipos de modales
				}}
			/>
		</Stack>
	);
};

export default ModalLayout;

/*
en Routes.ts hay que cambiar el nombre de la ruta para que funcione bien el modal, dado que debe pasar por el _layout
name: "modal/index",
name: "modal",
*/
