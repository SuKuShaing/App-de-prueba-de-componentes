import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeTextInput from "@/presentation/shared/ThemeTextInput";
import { useState } from "react";

const TextInputsScreen = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	return (
		<ThemedView margin>
			<ThemeCard className="mb-4">
				<ThemeTextInput
					placeholder="Nombre Completo"
                    autoCapitalize="words"
                    // autoCapitalize coloca la primera en mayuscula, tiene varias opciones: "none" | "sentences" | "words" | "characters"
                    autoComplete="name"
                    autoCorrect={false} 
                    // autoCorrect es para corregir el texto, tiene varias opciones: true | false
                    autoFocus={true}
                    // autoFocus es para que el teclado se abra automáticamente, tiene varias opciones: true | false
                    keyboardType="default"
                    // keyboardType es para el tipo de teclado, tiene varias opciones: "default" | "email-address" | "numeric" | "phone-pad" | "url" | "number-pad" | "decimal-pad" | "twitter" | "web-search" | "visible-password"
                    secureTextEntry={false}
                    // secureTextEntry es para ocultar el texto, tiene varias opciones: true | false
					onChangeText={(text) => setForm({ ...form, name: text })}
				/>
			</ThemeCard>
			<ThemeCard>
				<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
			</ThemeCard>
		</ThemedView>
	);
};
export default TextInputsScreen;
