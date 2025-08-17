import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Animation102Screen = () => {
	const pan = useRef(new Animated.ValueXY()).current;	// Crea un objeto con propiedades x e y para manejar posiciones 2D

	const panResponder = PanResponder.create({			
		onStartShouldSetPanResponder: () => true,		// Cada vez que hay un gesto táctil, obedece al gesto
		onPanResponderMove: Animated.event(				// Cada vez que se mueve el objeto, se actualiza el valor de x e y a traves de gestureState que se la pasa a pan y de pan se saca el valor x e y, Animated.event conecta el dedo con la posición
			[
				null,
				{
					dx: pan.x, 							// x,y are Animated.Value
					dy: pan.y,							// dx y dy son las propiedades de la animación, se actualizan con el valor de x e y
				},
			],
			{
				useNativeDriver: false,					//  Ejecuta la animación en el hilo principal (necesario para ValueXY)
			}
		),
		onPanResponderRelease: () => {					// Se ejecuta cuando el usuario suelta el dedo
			Animated.spring(							// Crea una animación con efecto de resorte
				pan,									// pan contiene el valor de x e y de la posición en la que se soltó el dedo
				{ toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
			).start();
		},
	});

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Animated.View
					{...panResponder.panHandlers}
					// {...panResponder.panHandlers}		// con esto sabe que éste es el objeto que se va a mover
					style={[pan.getLayout(), styles.box]}	// getLayout es una función que devuelve la posición actual del objeto
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		backgroundColor: "#61dafb",
		width: 80,
		height: 80,
		borderRadius: 4,
	},
});

export default Animation102Screen;
