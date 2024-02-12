import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon, SearchBar } from "react-native-elements";
export default function SearchBarComponentData(){
    const[search,setSearch]=useState([])
    const searchData=(text)=>{
  console.warn(text);
    }

    return(
        <View style={styles.container}>
        
      <TextInput placeholder="  Search" onChangeText={()=>searchData(text)}
         style={styles.input}></TextInput>
      <Icon name='compare' size={50} style={{paddingTop:'19%',marginRight:'2%'}}></Icon>
      
         </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flext:1,
        flexDirection:'row',
        paddingTop:15, 
        width:'100%',
        // margin:10,
        justifyContent:'space-between'

      
    },
    input: {
        height: 45,
        width:305,
        margin: 15,
        // borderWidth: 0.1,
        // padding: 10,
        borderRadius:10,
        backgroundColor:'#ddd'
      },
});