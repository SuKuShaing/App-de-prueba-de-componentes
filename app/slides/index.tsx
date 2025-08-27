import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { FlatList, Image, ImageSourcePropType, useWindowDimensions } from "react-native";

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
	return (
		<ThemedView>
            <FlatList 
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
            />
            <ThemeButton className="absolute bottom-10 right-5 w-[150px]">Siguiente</ThemeButton>
            <ThemeButton className="absolute bottom-10 right-5 w-[150px]">Finalizar</ThemeButton>
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
            <ThemeText type="h1" className="text-light-primary dark:text-dark-primary text-center font-bold my-4">{title}</ThemeText>
            <ThemeText type="normal" className="text-light-primary dark:text-dark-primary text-center my-4">{desc}</ThemeText>
        </ThemedView>
    )
}
