import { useThemeColor } from "@/hooks/useThemeColor";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
	className?: string;
	margin?: boolean;
	safe?: boolean;
	bgColor?: string;
}

/**
 * Envuelve el contenido de la pantalla en un View con un fondo y un padding superior según el safeArea listo para usar
 * @param safe: Si se debe aplicar un padding superior según el safeArea
 * @param margin: Si se debe aplicar un margen horizontal de 10px
 * @param bgColor: Por sí deseas editar el color de fondo
 * @param style: Por si desea añadir estilos adicionales
 * @param className: Por si desea añadir clases adicionales
 * @param children: Contenido del componente
 * @returns Un View con un fondo y un padding superior según el safeArea listo para usar
 */
const ThemedView = ({ style, className, margin = false, safe = false, bgColor, children }: Props) => {
    const backgroundColor = bgColor ?? useThemeColor({}, "background");
    const safeArea = useSafeAreaInsets();
	return (
		<View 
            style={[
                {
                    backgroundColor: backgroundColor,
                    flex: 1,
                    paddingTop: safe ? safeArea.top : 0,
                    marginHorizontal: margin ? 10 : 0,
                },
                style,
            ]}
            className={className}
        >
            {children}
		</View>
	);
};

export default ThemedView;
