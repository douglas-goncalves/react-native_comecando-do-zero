import { React } from "react";
import {Image, Dimensions, StyleSheet} from "react-native"

import TextComponent from "../../../components/textComponent";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
        <Image source={topo} style={styles.top}/>
        <TextComponent style={styles.title}>Detalhes da cesta</TextComponent>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },

    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#ffffff",
        fontWeight: "bold",
        padding: 16
    },
})