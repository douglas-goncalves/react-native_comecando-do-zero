import { React } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

import TextComponent from "../../../components/TextComponent";

export default function Detalhes(detalhes) {
    return <>
        <TextComponent style={styles.nome}>{detalhes.nome}</TextComponent>
        <View style={styles.fazenda}>
            <Image source={detalhes.logoFazenda} style={styles.imageFazenda} />
            <TextComponent style={styles.nomeFazenda}> {detalhes.nomeFazenda}</TextComponent>
        </View>
        <TextComponent style={styles.descricao}>{detalhes.descricao}</TextComponent>
        <TextComponent style={styles.preco}>{detalhes.preco}</TextComponent>

        <TouchableOpacity style={styles.buttom} onPress={
            /*Para uma futura funcao*/ 
            () =>{ console.log("Comprou");} 
            }>
            <TextComponent style={styles.textButtom}>{detalhes.botao}</TextComponent>
        </TouchableOpacity>
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
    }, nomeFazenda: {
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
    },
    buttom:{
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,


    },
    textButtom:{
        textAlign:"center",
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})