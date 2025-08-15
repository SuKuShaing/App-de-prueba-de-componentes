import useAnimation from "@/hooks/useAnimation";
import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
	const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingFromTop } =
		useAnimation();

	return (
		<ThemedView margin className="flex-1 justify-center items-center">
			<Animated.View
				className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
				style={{
					width: 150,
					height: 150,
					opacity: animatedOpacity,
					transform: [{ translateY: animatedTop }],
				}}
			></Animated.View>

			<ThemeButton
				onPress={() => {
					fadeIn({});
					startMovingFromTop({
						easing: Easing.elastic(3),
						duration: 1000,
					});
				}}
				className="m-5"
			>
				FadeIn
			</ThemeButton>
			<ThemeButton
				onPress={() => {
					fadeOut({});
				}}
				className="m-5"
			>
				FadeOut
			</ThemeButton>
		</ThemedView>
	);
};
export default Animation101Screen;
