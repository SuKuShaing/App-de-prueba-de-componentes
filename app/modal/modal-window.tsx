import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";

/*
Este es el modal que se va a abrir.
*/

const ModalScreen = () => {
	return (
		<ThemedView className="justify-center items-center flex-1" bgColor="#A52182">
			<ThemeText type="h1" className="text-white font-bold">Hola soy un modal</ThemeText>
		</ThemedView>
	);
};

export default ModalScreen;
