import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { SectionList } from "react-native";

interface Houses {
	title: string;
	data: string[];
}

const houses: Houses[] = [
	{
		title: "DC Comics",
		data: [
			"Superman",
			"Batman",
			"Wonder Woman (Mujer Maravilla)",
			"The Flash (Flash)",
			"Aquaman",
			"Green Lantern (Linterna Verde)",
			"Cyborg",
			"Shazam",
			"Green Arrow (Flecha Verde)",
			"Batgirl (Batichica)",
			"Nightwing (Ala Nocturna)",
			"Supergirl",
			"Martian Manhunter (Detective Marciano)",
			"Harley Quinn",
			"Joker",
			"Catwoman (Gata Salvaje)",
			"Lex Luthor",
			"Poison Ivy (Hiedra Venenosa)",
			"Robin",
			"Deathstroke (Deathstroke el Terminator)",
		],
	},
	{
		title: "Marvel Comics",
		data: [
			"Spider-Man (Hombre Araña)",
			"Iron Man (Hombre de Hierro)",
			"Captain America (Capitán América)",
			"Thor",
			"Black Widow (Viuda Negra)",
			"Hulk",
			"Doctor Strange (Doctor Extraño)",
			"Black Panther (Pantera Negra)",
			"Captain Marvel (Capitana Marvel)",
			"Wolverine",
			"Deadpool",
			"Scarlet Witch (Bruja Escarlata)",
			"Ant-Man (Hombre Hormiga)",
			"Wasp (Avispa)",
			"Groot",
			"Rocket Raccoon (Mapache Cohete)",
			"Gamora",
			"Drax the Destroyer (Drax el Destructor)",
		],
	},
	{
		title: "Anime",
		data: [
			"Son Goku (Dragon Ball)",
			"Naruto Uzumaki (Naruto)",
			"Monkey D. Luffy (One Piece)",
			"Sailor Moon (Sailor Moon)",
			"Kenshin Himura (Rurouni Kenshin)",
			"Edward Elric (Fullmetal Alchemist)",
			"Inuyasha (Inuyasha)",
			"Sakura Kinomoto (Cardcaptor Sakura)",
			"Light Yagami (Death Note)",
			"Eren Yeager (Attack on Titan)",
			"Lelouch Lamperouge (Code Geass)",
			"Vegeta (Dragon Ball)",
			"Ichigo Kurosaki (Bleach)",
			"Kaneki Ken (Tokyo Ghoul)",
			"Gon Freecss (Hunter x Hunter)",
			"Asuka Langley Soryu (Neon Genesis Evangelion)",
			"Saitama (One Punch Man)",
			"Mikasa Ackerman (Attack on Titan)",
			"Natsu Dragneel (Fairy Tail)",
			"Usagi Tsukino (Sailor Moon)",
			"Sasuke Uchiha (Naruto)",
		],
	},
];

const SectionListScreen = () => {
	return (
		<ThemedView margin>
			<ThemeCard>
				<SectionList
					sections={houses}
					// sections es el array de objetos que se renderiza en la lista
					keyExtractor={(item) => item}
					// keyExtractor es la función que se usa para que react pueda identificar cada item de la lista
					renderItem={({ item }) => <ThemeText>{item}</ThemeText>}
					// renderItem es el componente que se renderiza para cada item de la lista
					ListHeaderComponent={() => (
						// ListHeaderComponent es el componente que se renderiza al principio de la lista
						<ThemeText type="h1" className="font-bold mb-3">
							Personajes
						</ThemeText>
					)}
					renderSectionHeader={({ section }) => (
						// renderSectionHeader es el componente que se renderiza para cada sección de la lista
						<ThemeText type="h1" className="bg-light-background dark:bg-dark-background p-2 rounded mt-6 mb-3">
							{section.title}
						</ThemeText>
					)}
					stickySectionHeadersEnabled
					// stickySectionHeadersEnabled={true}, es necesario añadir para que funcione el comportamiento sticky en android, ios funciona por defecto con efecto sticky
                    ListFooterComponent={() => (
						// ListFooterComponent es el componente que se renderiza al final de la lista
						<ThemeText type="h2" className="font-bold mt-3 bg-light-background dark:bg-dark-background p-2 mb-10 rounded">
							Secciones: {houses.length}
						</ThemeText>
					)}
                    showsVerticalScrollIndicator={false}
                    // showsVerticalScrollIndicator={false}, es para que no se muestre el scrollbar en la lista
				/>
			</ThemeCard>
		</ThemedView>
	);
};
export default SectionListScreen;
