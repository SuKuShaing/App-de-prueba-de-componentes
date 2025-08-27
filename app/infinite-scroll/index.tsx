import { useThemeColor } from "@/hooks/useThemeColor";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

	const primaryColor = useThemeColor({}, "primary");

	const loadMore = () => {
		const newArray = Array.from(
			{ length: 5 },
			(_, index) => numbers.length + index + 1
		);

		setTimeout(() => {
			setNumbers([...numbers, ...newArray]);
		}, 2000);
	};

	return (
		<ThemedView>
			<FlatList
				// El FlatList renderiza los elementos bajo demanda, solo que está en pantalla se renderiza y lo demás no, solo está en memoria.
				data={numbers}
				// data es un array de items a iterar
				renderItem={({ item }) => <ListItem number={item} />}
				// renderItem es el elemento que se renderiza en pantalla
				onEndReached={loadMore}
				// onEndReached es el evento que se ejecuta cuando el usuario llega al final de la lista
				onEndReachedThreshold={0.1}
				// onEndReachedThreshold es el umbral de la lista para que se ejecute el evento onEndReached
				ListFooterComponent={() => (
					<View
						style={{
							height: 150,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ActivityIndicator size={40} color={primaryColor} />
					</View>
				)}
				// ListFooterComponent es el componente que se renderiza al final de la lista, aquí mostramos el ActivityIndicator para indicar que se está cargando más contenido
			/>
		</ThemedView>
	);
};
export default InfiniteScrollScreen;

// Componente a Renderizar
interface ListItemProps {
	number: number;
}

const ListItem = ({ number }: ListItemProps) => {
	return (
		<FadeInImage
			uri={`https://picsum.photos/id/${number}/500/400`}
			style={{
				height: 400,
				width: "100%",
			}}
		/>
		// <Image
		// 	source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
		// 	style={{
		// 		height: 400,
		// 		width: "100%",
		// 	}}
		// />
	);
};
