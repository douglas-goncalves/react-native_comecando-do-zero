import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

const width = Dimensions.get('screen').width;

export default function Cesta({topo, detalhes}) {
    return <>
        <Topo {...topo}/>
        <View styles={styles.cesta}>
            <Detalhes {...detalhes}/>
        </View>
    </>
}

const styles = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});