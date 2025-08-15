import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
	const animatedOpacity = useRef(new Animated.Value(0)).current;
	const animatedTop = useRef(new Animated.Value(0)).current;

	const fadeIn = ({
		toValue = 1,
		duration = 300,
		useNativeDriver = true,
		easing = Easing.linear,
		callback = () => {},
	}) => {
		Animated.timing(animatedOpacity, {
			toValue: toValue, // valor al que quiero llegar
			duration: duration, // tiempo en milisegundos
			useNativeDriver: useNativeDriver, // Para que use aceleración de hardware
			easing: easing,
		}).start(callback);
	};

	const fadeOut = ({
		toValue = 0,
		duration = 300,
		useNativeDriver = true,
		easing = Easing.ease,
		callback = () => {},
	}) => {
		Animated.timing(animatedOpacity, {
			toValue: toValue,
			duration: duration,
			useNativeDriver: useNativeDriver,
			easing: easing,
		}).start(callback);
		// }).start(() => animatedTop.resetAnimation()); // Resetea la animación de animatedTop, vuelve a los valores iniciales
		// }).start(() => animatedTop.setValue(-100));	// al terminar de hacer la animación, restaura el valor de animatedTop a -100
		// }).start(() => fadeIn());	// puedo encadenar animaciones
	};

	const startMovingFromTop = ({
        initialPosition = -150,
		toValue = 0,
		duration = 700,
		useNativeDriver = true,
		easing = Easing.ease,
		callback = () => {},
	}) => {
		animatedTop.setValue(initialPosition);

		Animated.timing(animatedTop, {
			toValue: toValue,
			duration: duration,
			useNativeDriver: useNativeDriver,
			// easing: Easing.elastic(3),
			easing: easing,
		}).start(callback);
	};

	return {
		animatedOpacity,
		animatedTop,

		// Methods

		fadeIn,
		fadeOut,
		startMovingFromTop,
	};
};

export default useAnimation;
