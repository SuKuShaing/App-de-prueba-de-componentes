import { animationMenuRoutes } from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import { Href, Link } from "expo-router";

const ComponentsApp = () => {
	return (
		<ThemedView margin>
			{/* <Text>ComponentsApp</Text>
			<Link href="/animation-101">Hola Mundo</Link> */}

			{/* route.name => animation-101/index
			route.name.split('/')[0] => animation-101
			*/}

			{
				animationMenuRoutes.map((route, index) => (
					<Link key={index} href={route.name.split('/')[0] as Href}>{route.title}</Link>
				))
			}
		</ThemedView>
	);
};

export default ComponentsApp;
