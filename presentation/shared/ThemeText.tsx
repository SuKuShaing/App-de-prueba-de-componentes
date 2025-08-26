import { Text, TextProps } from "react-native";

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

interface Props extends TextProps { // extendemos las propiedades de TextProps para también tenerlas en nuestro componente
	className?: string;
    type?: TextType;
}

/**
 * Texto con estilos por defecto
 * @param type: Por si desea añadir un tipo de texto del tipo normal, h1, h2, semi-bold o link
 * @param className: Por si desea añadir clases adicionales
 * @returns Un Texto con estilos por defecto
 */
const ThemeText = ({className, type = 'normal', ...rest}: Props) => {
    // className="text-3xl font-bold text-center text-light-primary dark:text-dark-primary"
	
    return <Text 
    className={[
        'text-light-primary dark:text-dark-primary',
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-semibold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className
    ].join(' ')}
    {...rest} />;
    // dentro del ...rest está children
};

export default ThemeText;
