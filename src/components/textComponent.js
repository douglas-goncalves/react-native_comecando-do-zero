import React from "react";
import {StyleSheet, Text} from "react-native";

export default function TextComponent({children, style}){
    let textFontStyle = styles.textRegular;

    if(style?.fontWeight === 'bold'){
        textFontStyle = styles.textBold;
    }

    return <Text style={[style, textFontStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "MonteserratRegular",
        fontWeight: "normal",
    },

    textBold:{
        fontFamily: "MonteserratBold",
        fontWeight: "normal",
    }

})