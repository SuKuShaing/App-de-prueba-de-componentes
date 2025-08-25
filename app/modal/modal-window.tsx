import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";

const ModalScreen = () => {
	return (
		<ThemedView className="justify-center items-center flex-1" bgColor="#A52182">
			<ThemeText>Hola soy un modal</ThemeText>
		</ThemedView>
	);
};

export default ModalScreen;
