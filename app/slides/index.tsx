import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    NativeScrollEvent,
    NativeSyntheticEvent,
    useWindowDimensions,
} from "react-native";

interface Slide {
	title: string;
	desc: string;
	img: ImageSourcePropType;
}

const items: Slide[] = [
	{
		title: "Titulo 1",
		desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
		img: require("../../assets/images/slides/slide-1.png"),
	},
	{
		title: "Titulo 2",
		desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
		img: require("../../assets/images/slides/slide-2.png"),
	},
	{
		title: "Titulo 3",
		desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
		img: require("../../assets/images/slides/slide-3.png"),
	},
];

const SlidesScreen = () => {
	const flatListRef = useRef<FlatList>(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [isScrollEnabled, setIsScrollEnabled] = useState(false);

	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isScrollEnabled) return; // si ya se puede desplazar el scroll, pasó por el último slide, por ende no ejecuta calculo de la posición del slide

		const { contentOffset, layoutMeasurement } = event.nativeEvent;
		// contentOffset es el desplazamiento del scroll, lo que se sale
		// layoutMeasurement es el ancho de la pantalla

		const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width); // 900px / 300px = 3, voy en la 3er slide

		setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

		if (currentIndex === items.length - 1) {
			setIsScrollEnabled(true);
		}
	};

	const scrollToSlide = (index: number) => {
		if (!flatListRef.current) return; // si no existe el ref, no se hace nada

		flatListRef.current.scrollToIndex({ index: index, animated: true });
	};

	return (
		<ThemedView>
			<FlatList
				ref={flatListRef}
				data={items}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => <SlideItem item={item} />}
				horizontal
				// horizontal para que la lista sea horizontal
				pagingEnabled
				// PagingEnabled para que no pueda quedarse en el medio de un slide, es en una o en la otra, pero no en el medio
				scrollEnabled={isScrollEnabled}
				// scrollEnabled={false} para que no se pueda desplazar el scroll horizontal
				onScroll={onScroll}
				// onScroll es el evento que se ejecuta cuando se desplaza el scroll
			/>

			{currentSlideIndex === items.length - 1 ? ( // si es el último slide, se muestra el botón de finalizar
				<ThemeButton
					className="absolute bottom-10 right-5 w-[150px]"
					onPress={() => router.dismiss()}
					// .dismiss vuelve a la pantalla de atrás, pero sí no hay ninguna pantalla de atrás, se cierra la aplicación
					// para eso se puede usar .canDismiss o .canGoBack, verifica que haya pantalla a la que volver, para no salir de la app
				>
					Finalizar
				</ThemeButton>
			) : (
				<ThemeButton
					className="absolute bottom-10 right-5 w-[150px]"
					onPress={() => scrollToSlide(currentSlideIndex + 1)}
				>
					Siguiente
				</ThemeButton>
			)}
		</ThemedView>
	);
};
export default SlidesScreen;

// creamos un componente SlideItem que se encargará de mostrar cada uno de los slides
interface SlideItemProps {
	item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
	const { width } = useWindowDimensions();
	// obtener el ancho de la pantalla y sí se gira el dispositivo, obtenemos también el ancho de la pantalla
	const { title, desc, img } = item;

	return (
		<ThemedView
			className="flex-1 rounded p-10 justify-center bg-red-500"
			style={{
				width: width,
			}}
			// el ancho de la imagen no debe colocarse con tailwind, sino con el style porque es una construcción dinámica
			// es decir el valor se obtiene en ejecución y el css de tailwind se construye en tiempo de compilación
		>
			<Image
				source={img}
				style={{
					width: width * 0.7,
					height: width * 0.7,
					resizeMode: "contain",
					alignSelf: "center",
				}}
			/>
			<ThemeText
				type="h1"
				className="text-light-primary dark:text-dark-primary text-center font-bold my-4"
			>
				{title}
			</ThemeText>
			<ThemeText
				type="normal"
				className="text-light-primary dark:text-dark-primary text-center my-4"
			>
				{desc}
			</ThemeText>
		</ThemedView>
	);
};
