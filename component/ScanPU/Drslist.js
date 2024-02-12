import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, Icon, SearchBar } from "react-native-elements";
import { RadioButton } from "react-native-paper";

export default function Drslist(){
    const[search,setSearch]=useState([])
    const searchData=(text)=>{
  console.warn(text);
    }
    const [checked, setChecked] = useState('first');
    return(
        <View >
<View style={styles.container} >
<TouchableOpacity>
    <View style={styles.secondView} >
    <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={{paddingTop:'1%',paddingRight:'4%',fontSize:18}}>Open DRS Only</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={{paddingTop:'1%',fontSize:18}}>All DRS</Text>
    </View>
</TouchableOpacity>
<View>
    <Text style={{fontWeight:'bold',paddingLeft:'5%',fontSize:18}}>DRS List</Text>
    <View style={styles.listview}>
        <View style={{marginLeft:'2%'}}>
        <Text>DRS/VHKCH/2401/000036</Text>
<Text>DRS Creation date:1/28/2024</Text>
<View style={styles.btnView}>
<Text>Waybills:1</Text>
<View style={{paddingLeft:'60%',paddingBottom:'2%'}}>
<Button title="New" onPress={()=>console.log("Signin button press")} buttonStyle={{   
      
      backgroundColor: '#FFF',
   }}
   titleStyle={{
    color: 'green',}}/>
</View>

</View>

        </View>

    </View>

</View>
</View>
        </View>
        
    )
}

const styles= StyleSheet.create({
    container:{
     marginLeft:'4%',
        width:'91%',
        height:'80%',
        backgroundColor:'#fff',
        borderRadius:30,
        shadowColor: '#000', 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.5,
    shadowRadius: 10, 
    elevation: 10, 
      
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
      secondView:{
        padding:'5%',
        flext:1,
        flexDirection:'row',
        
      },
      listview:{
       margin:'6%',
        borderWidth:1,
        backgroundColor:'#ddd',
        width:'85%',
        borderRadius:7
      },
      btnView:{
        flext:1,
        flexDirection:'row',
      }
});