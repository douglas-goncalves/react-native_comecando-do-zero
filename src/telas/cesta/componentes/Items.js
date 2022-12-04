import { React } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import TextComponent from "../../../components/TextComponent";

export default function Items({ listTitle, listItems }) {
  const renderItem = ({item: {id, nameItem, imageItem}}) => 
  <View key={id} style={styles.item}>
    <Image source={imageItem} style={styles.imageItem}/>
    <TextComponent style={styles.nameItem}>{nameItem}</TextComponent>
  </View>

  return <>
    <TextComponent style={styles.title}>{listTitle}</TextComponent>
    <FlatList 
     data={listItems} 
     renderItem={renderItem}
     keyExtractor={({nameItem}) => nameItem}
    />
    {/* {
      listItems.map(({id, nameItem, imageItem }) => {
        return <View key={id} style={styles.item}>
          <Image source={imageItem} style={styles.imageItem}/>
          <TextComponent style={styles.nameItem}>{nameItem}</TextComponent>
        </View>
      })
    } */}
  </>
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop:32,
    marginBottom:8,
    fontSize: 20,
    lineHeight: 32,
  },

  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    alignItems:"center",
    color: "#ff0000",
    fontSize:18,
    lineHeight: 32,
    fontWeight: "normal",
  },

  imageItem: {
    width: 46,
    height: 46,

  },
  nameItem: {
    fontSize:16,
    lineHeight:26,
    marginLeft: 11,
    color: "#464646"
  }

})