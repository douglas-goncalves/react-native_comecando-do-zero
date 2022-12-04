import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Topo />
        <View styles={styles.cesta}>
            <Detalhes />
        </View>
    </>
}

const styles = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});