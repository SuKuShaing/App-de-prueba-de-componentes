import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Platform, Pressable, Switch } from "react-native";
import ThemeText from "./ThemeText";

interface Props {
	text?: string;
	value: boolean;
	className?: string;

	onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemeSwitch = ({ text, value, className, onValueChange }: Props) => {
	const switchActiveColor = useThemeColor({}, "primary");

	return (
		<Pressable
			className={`flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
			onPress={() => onValueChange(!value)}
			// onPress es el evento que se ejecuta cuando se presiona el switch, en android se puede usar para cambiar el estado del switch y funciona bien
			// en iOS no funciona bien, salta hacia el otro lado, no hay una transición suave
		>
			{text && <ThemeText className="h2">{text}</ThemeText>}
			<Switch
				value={value}
				onValueChange={onValueChange}
				thumbColor={isAndroid ? switchActiveColor : ""} // el thumbColor es el color de la esfera del switch, en android se pueden personalizar los colores
				trackColor={{
					// trackColor es el color del fondo del switch, para ambas plataformas
					false: "silver",
					true: switchActiveColor,
				}}
				ios_backgroundColor="#3e3e3e" // ios_backgroundColor es el color del switch en iOS
			/>
		</Pressable>
	);
};

export default ThemeSwitch;
