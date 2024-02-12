import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-elements";


export default function CreateDrs(){
    return(
        <View style={styles.container}>
            <View  style={styles.buttonView}>
            <Button title="UPDATE DRS" onPress={()=>console.log("UPDATE DRS button press")} buttonStyle={{   
      borderRadius: 10,
      
   }}></Button>
   <Button title="Submit" onPress={()=>console.log("submit button press")} titleStyle={{color: 'black',}} buttonStyle={{  
     backgroundColor: '#FFF', 
      borderRadius: 10,
      marginLeft:10,
     
   }} ></Button>
   
            </View>
        <View style={styles.iconView}> 
        <Icon name='person' size={40} style={{color:'red'}}  />
            </View>    
    
   
    
        </View>
       
    );
}

const styles= StyleSheet.create({
    container:{
        flext:1,
        flexDirection:'row',
        paddingTop:40,
        margin:10,

      
    },
  buttonView:{
    flexDirection:'row',
    alignItems:'center'
    
    
  },
  iconView:{
    marginHorizontal:150,
  }   
    
    
      
     
});