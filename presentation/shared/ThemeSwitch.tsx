import React from "react";
import { Pressable, Switch } from "react-native";
import ThemeText from "./ThemeText";

interface Props {
	text?: string;
	value: boolean;
	className?: string;

	onValueChange: (value: boolean) => void;
}

const ThemeSwitch = ({ text, value, className, onValueChange }: Props) => {
	return (
		<Pressable className={`flex-row items-center justify-between active:opacity-80 ${className}`}>
			{text && <ThemeText className="h2">{text}</ThemeText>}
			<Switch value={value} onValueChange={onValueChange} />
		</Pressable>
	);
};

export default ThemeSwitch;
