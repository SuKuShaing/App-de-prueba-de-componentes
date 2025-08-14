import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
	children: string;
	className?: string;
}

const ThemeButton = ({ className, children, ...rest }: Props) => {
	return (
		<Pressable
			className={`bg-light-primary dark:bg-dark-primary item-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
			{...rest}
		>
			<Text className="text-white dark:text-black text-center">{children}</Text>
		</Pressable>
	);
};

export default ThemeButton;
