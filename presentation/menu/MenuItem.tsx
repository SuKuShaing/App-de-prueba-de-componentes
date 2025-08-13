import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import ThemeText from "../shared/ThemeText";

interface Props {
	title: string;
	icon: keyof typeof Ionicons.glyphMap;  
    /**
     * Ionicons es una clase/objeto que se ve algo así:
        const Ionicons = {
        glyphMap: {
            "home": 12345,
            "heart": 12346,
            "star": 12347,
            "settings": 12348,
            "menu": 12349,
            ... miles de iconos más
        },
        ... otras propiedades y métodos
        };
     * 
     * typeof funciona distinto en TypeScript que en JavaScript,
     * en JavaScript devuelve un string con el tipo de la variable,
     * en TypeScript devuelve el tipo de la variable
     * 
     * Con objetos:
     *  const usuario = {
     *      nombre: "Fernando",
     *      edad: 25,
     *      activo: true
     *  };
     *  
     *  type TipoUsuario = typeof usuario;
     *  // Resultado:
     *  // {
     *  //   nombre: string; 
     *  //   edad: number;
     *  //   activo: boolean;
     *  // }
     * 
     * entonces con el typeof al objeto Ionicons.glyphMap obtenemos el tipo de la variable Ionicons.glyphMap
     * Resultado:
     * {
     *   "home": number;
     *   "heart": number;
     *   "star": number;
     *   "settings": number;
     *   "menu": number;
     *   // ... todos los iconos con sus códigos
     * }
     * 
     * keyof, es para obtener todas las claves del objeto Ionicons.glyphMap,
     * es decir, todas las propiedades del objeto Ionicons.glyphMap
     * Resultado:
     * 
     * "home" | "heart" | "star" | "settings" | "menu" | ... | "miles de iconos más"
     */

    /**
     * //////////////////////////////////////////////////////////////
     * ////////////////// FUNCIONAMIENTO DE typeof //////////////////
     * //////////////////////////////////////////////////////////////
     * 
     * typeof funciona distinto en TypeScript que en JavaScript,
     * en JavaScript devuelve un string con el tipo de la variable,
     * en TypeScript devuelve el tipo de la variable
     * 
     * /////////// Con variables simples: ///////////
     *  const nombre = "Fernando";
     *  const edad = 25;
     *  const activo = true;
     *  
     *  type TipoNombre = typeof nombre;       // string
     *  type TipoEdad = typeof edad;           // number  
     *  type TipoActivo = typeof activo;       // boolean
     * 
     * //////////////// Con objetos: ////////////////
     *  const usuario = {
     *      nombre: "Fernando",
     *      edad: 25,
     *      activo: true
     *  };
     *  
     *  type TipoUsuario = typeof usuario;
     *  // Resultado:
     *  // {
     *  //   nombre: string; 
     *  //   edad: number;
     *  //   activo: boolean;
     *  // }
     * 
     * //////////////// Con funciones: ////////////////
     * function saludar(nombre: string): string {
     *     return `Hola ${nombre}`;
     * }
     * 
     * type TipoFuncion = typeof saludar;
     * // Resultado:
     * // (nombre: string) => string
     * 
     * /////////// Extraer tipos de arrays: ///////////
     * const colores = ["rojo", "verde", "azul"] as const;
     * type Color = typeof colores[number]; // "rojo" | "verde" | "azul"
     * 
     * ///////// Extraer tipos de funciones: /////////
     * function crearUsuario(nombre: string, edad: number) {
     *     return { nombre, edad };
     * }
     * 
     * type TipoFuncionCrearUsuario = typeof crearUsuario;
     * // Resultado:
     * // (nombre: string, edad: number) => { nombre: string; edad: number }
     * 
     * type ParametrosCrearUsuario = Parameters<typeof crearUsuario>; // Parameters obtiene los tipos de los parámetros de la función
     * // [string, number]
     * 
     * type RetornoCrearUsuario = ReturnType<typeof crearUsuario>; // ReturnType obtiene el objeto interfaz de retorno de la función
     * // { nombre: string; edad: number }
     * 
     * ////////// Extraer tipos de módulos: //////////
     * import { useState } from 'react';
     * 
     * type TipoUseState = typeof useState;
     * // <T>(initialState: T | (() => T)) => [T, React.Dispatch<React.SetStateAction<T>>]
     */
	name: string;

	isFirst?: boolean;
	isLast?: boolean;
}

const MenuItem = ({
	title,
	icon,
	name,
	isFirst = false,
	isLast = false,
}: Props) => {

	const [routeName] = name.split("/");
    const primaryColor = useThemeColor({}, 'primary');

	return (
		<Pressable
			onPress={() => router.push(routeName as Href)}
			className="bg-white dark:bg-black/15 px-5 py-2"
			style={{
				...(isFirst && {
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					paddingTop: 10,
				}),
				...(isLast && {
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					paddingBottom: 10,
				}),
			}}
		>
			<View className="flex-row items-center">
                <Ionicons name={icon} size={30} color={primaryColor} className="mr-5" />
				<ThemeText type="h2">{title}</ThemeText>
			</View>
		</Pressable>
	);
};

export default MenuItem;
