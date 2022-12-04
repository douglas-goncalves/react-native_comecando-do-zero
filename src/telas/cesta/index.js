import React from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Items from "./componentes/Items";

const width = Dimensions.get('screen').width;

export default function Cesta({topo, detalhes, items}) {
    return <ScrollView>
        <Topo {...topo}/>
        <View styles={styles.cesta}>
            <Detalhes {...detalhes}/>
            <Items {...items} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});