import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { Link, router } from "expo-router";

/*
Esta es la pantalla que se ocupa para abrir el modal.
*/

const ModalScreen = () => {
	return (
		<ThemedView margin>
			<Link asChild href="/modal/modal-window" className="mx-4">
				<ThemeText className="text-light-text dark:text-dark-text my-2 text-xl">Abrir modal</ThemeText>
			</Link>

			<ThemeButton
				onPress={() => router.push('/modal/modal-window')}
				className="mx-4"
			>
				Abrir otro modal
			</ThemeButton>
		</ThemedView>
	);
};
export default ModalScreen;
