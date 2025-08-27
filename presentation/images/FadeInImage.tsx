import useAnimation from "@/hooks/useAnimation";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from "react-native";

/*
Este componente es un wrapper para la imagen que se encarga de hacer un fade in cuando la imagen se carga
*/

interface Props {
	uri: string;
    style: StyleProp<ImageStyle>
}

const FadeInImage = ({ uri, style }: Props) => {
	const primaryColor = useThemeColor({}, "primary");

    const [isLoading, setIsLoading] = useState(true);

    const { animatedOpacity, fadeIn } = useAnimation();

	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{isLoading && <ActivityIndicator size={30} color={primaryColor} />}
            <Animated.Image
                source={{ uri }}
                style={[ style, { opacity: animatedOpacity } ]}
                // la imagen es de cero pixeles hasta que se defina en el style
                onLoadEnd={() => {
                    fadeIn({ duration: 1000 });
                    setIsLoading(false);
                }}
                // entonces se muestra el activity indicator cuando la imagen se carga y al cargarse se oculta
            />
		</View>
	);
};

export default FadeInImage;
