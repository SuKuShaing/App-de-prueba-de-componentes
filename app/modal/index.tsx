import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { Link } from "expo-router";

const ModalScreen = () => {
	return (
		<ThemedView margin>
			<Link asChild href="/modal/modal-window" className="mx-4">
				<ThemeText className="text-light-text dark:text-dark-text my-2 text-xl">Abrir modal</ThemeText>
			</Link>
		</ThemedView>
	);
};
export default ModalScreen;
