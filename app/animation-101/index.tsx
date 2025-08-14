import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Text } from "react-native";

const Animation101Screen = () => {
	return (
		<ThemedView margin>
			<Text>Animation101Screen</Text>

			<ThemeButton onPress={() => console.log("fadeIn")} className="mb-5">
				FadeIn
			</ThemeButton>
			<ThemeButton onPress={() => console.log("fadeOut")} className="mb-5">
				FadeOut
			</ThemeButton>
		</ThemedView>
	);
};
export default Animation101Screen;
