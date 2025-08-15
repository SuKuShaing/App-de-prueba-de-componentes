import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
	const animatedOpacity = useRef(new Animated.Value(0)).current;
	const animatedTop = useRef(new Animated.Value(-100)).current;

	const fadeIn = () => {
		Animated.timing(animatedOpacity, {
			toValue: 1, // valor al que quiero llegar
			duration: 300, // tiempo en milisegundos
			useNativeDriver: true, // Para que use aceleración de hardware
		}).start();

		Animated.timing(animatedTop, {
			toValue: 0,
			duration: 700,
			useNativeDriver: true,
			// easing: Easing.elastic(3),
			easing: Easing.bounce,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(animatedOpacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => animatedTop.resetAnimation());	// Resetea la animación de animatedTop, vuelve a los valores iniciales
		// }).start(() => animatedTop.setValue(-100));	// al terminar de hacer la animación, restaura el valor de animatedTop a -100
		// }).start(() => fadeIn());	// puedo encadenar animaciones
	};

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

			<ThemeButton onPress={fadeIn} className="m-5">
				FadeIn
			</ThemeButton>
			<ThemeButton onPress={fadeOut} className="m-5">
				FadeOut
			</ThemeButton>
		</ThemedView>
	);
};
export default Animation101Screen;
