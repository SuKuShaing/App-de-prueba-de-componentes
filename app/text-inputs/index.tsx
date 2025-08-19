import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeTextInput from "@/presentation/shared/ThemeTextInput";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIos = Platform.OS === "ios";

const TextInputsScreen = () => {
	const [form, setForm] = useState({
		Name: "",
		Email: "",
		Phone: "",
	});

	return (
		<KeyboardAvoidingView
			// Esto es para que cuando el teclado se abra, el scroll se mueva para que el input no tape lo que está en pantalla
			// se mueve un poquito
			// se necesita en Ios y en los androids antiguos
			behavior="height"
			// behavior={isIos ? "height" : undefined}
		>
			<ScrollView>
				<ThemedView margin>
					<ThemeCard className="mb-4">
						<ThemeTextInput
							placeholder="Nombre Completo"
							autoCapitalize="words"
							// autoCapitalize coloca la primera en mayúscula, tiene varias opciones: "none" | "sentences" | "words" | "characters"
							autoComplete="name"
							autoCorrect={false}
							// autoCorrect es para corregir el texto, tiene varias opciones: true | false
							autoFocus={true}
							// autoFocus es para que el teclado se abra automáticamente, tiene varias opciones: true | false
							keyboardType="default"
							// keyboardType es para el tipo de teclado, tiene varias opciones: "default" | "email-address" | "numeric" | "phone-pad" | "url" | "number-pad" | "decimal-pad" | "twitter" | "web-search" | "visible-password"
							secureTextEntry={false}
							// secureTextEntry es para ocultar el texto, tiene varias opciones: true | false
							onChangeText={(text) => setForm({ ...form, Name: text })}
						/>
						<ThemeTextInput
							placeholder="Correo Electrónico"
							keyboardType="email-address"
							onChangeText={(mail) => setForm({ ...form, Email: mail })}
						/>
						<ThemeTextInput
							placeholder="Teléfono"
							keyboardType="phone-pad"
							onChangeText={(phone) => setForm({ ...form, Phone: phone })}
						/>
					</ThemeCard>
					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2">
						<ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
					</ThemeCard>

					<ThemeCard className="my-2" 
						style={{
							// marginBottom: isIos ? 100 : 10
							marginBottom: 100,
						}}
					>
						<ThemeTextInput
							placeholder="Teléfono"
							keyboardType="phone-pad"
							onChangeText={(phone) => setForm({ ...form, Phone: phone })}
						/>
					</ThemeCard>
				</ThemedView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
export default TextInputsScreen;
