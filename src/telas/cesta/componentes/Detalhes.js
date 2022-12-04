import { React } from "react";
import { StyleSheet, Image, View } from "react-native";

import TextComponent from "../../../components/textComponent";
import logo from "../../../../assets/logo.png"

export default function Detalhes() {
    return <>
        <TextComponent style={styles.nome}>Cesta de Verduras</TextComponent>
        <View style={styles.fazenda}>
            <Image source={logo} style={styles.imageFazenda} />
            <TextComponent style={styles.nomeFazenda}> Jenny Jack Farm</TextComponent>
        </View>
        <TextComponent style={styles.descricao}>Uma cesta com produtos selecionado cuidadosamente da fazenda para sua Cozinha</TextComponent>
        <TextComponent style={styles.preco}>R$ 40,00</TextComponent>
    </>
}

const styles = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12
    },

    imageFazenda: {
        width: 32,
        height: 32
    },   nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f55",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})