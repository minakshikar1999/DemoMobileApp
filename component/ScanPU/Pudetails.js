import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Button,Image } from "react-native";
import { Avatar, Icon } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
const gradientImage = require("../../assets/loggedin-bg.png")

export default function Pudetails(){
    return (
        <View>
        <ImageBackground source={gradientImage} resizeMode="cover" style={styles.image}>
            {/* header part.... */}
            <View style={styles.container}>
                <View style={styles.header}>
                <Image style={styles.backarrow} source={require('../../assets/backarrow.png')}/>
                    {/* <Avatar avatarStyle={styles.logo} rounded icon={{ name: 'person' }} size={'medium'} /> */}
                    <Text style={styles.puheader}>PU/DPMR/2402/000008</Text>
                    <Avatar avatarStyle={styles.logo} rounded icon={{ name: 'person' }} size={'medium'} />
                </View>

                {/* body part */}
                <View style={styles.body}>
                    <View style={styles.body_content}>
                        <View style={{ flexDirection: 'row',}}>
                            <Text style={{fontSize:15,fontWeight:'bold',marginTop:10}}>Request Details</Text>
                            <View  style={styles.iconBody} >
                        <TouchableOpacity onPress={()=>openDialScreen(item.phno)}>
                        <View style={styles.phoneicon}>
                            <View style={{marginTop:13}} on>
                <SvgUri width="20" height="20" source={require('../../assets/phone-solid.svg')}/>
                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.phoneicon}>
                            <View style={{marginTop:13}}>
                <SvgUri width="20" height="20" source={require('../../assets/location-dot-solid.svg')}/>
                </View>
                            </View>
                            </TouchableOpacity>
                            </View>
                            <View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row',marginTop:20}}>
                            <Text style={{fontWeight:'bold'}}>NO. of Pieces</Text>
                            <Text style={{marginLeft:30,fontWeight:'bold'}}>0</Text>
                        </View>
                        <View style={{ flexDirection: 'row',marginTop:10}}>
                            <Text style={{fontWeight:'bold'}}>Location</Text>
                            <Text style={{marginLeft:30,fontWeight:'bold'}}>{`88,FIFTH,DESA INTAN,KAPAR,SELAN
GOR,42200`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row',marginTop:10}}>
                            <Text style={{fontWeight:'bold'}}>Branch Code</Text>
                            <Text></Text>
                        </View>
                        <View style={{ marginTop:25}}>
                            <Text style={{fontWeight:'bold'}}>Status</Text>
                            <View style={{ flexDirection: 'row',marginTop:4}}>
                                <View style={styles.success_btn}>
                                    <Text style={{color:'white',marginTop:5}}>Successfull Pickup</Text>
                                </View>
                                <View style={styles.failure_btn}>
                                    <Text style={{marginTop:5}}>Pickup Failure</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.hline}>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        marginTop: 30,
    },
    header:{
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        marginTop: '5%',
        marginLeft: '4%',
        width: '91%',
        height: '73%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        // position:'relative'

    },
    puheader:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        marginTop:15
    },
    image: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
    } ,
    profile: {
        margin: '5%',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    body_content:{
        margin:15
    },
    success_btn:{
        backgroundColor:'green',
        height:60,
        width:160,
        padding:15,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:2
    },
    failure_btn:{
        borderWidth:1,
        borderColor:'#d9d9d9',
        height:60,
        width:160,
        padding:10,
        borderTopRightRadius:2,
        borderBottomRightRadius:2
    },
    hline: {
        height: '0%',
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        borderTopColor:'#cce6ff',
        borderTopWidth:2
    },
    backarrow:{
        width:30,
        height:30,
        marginTop:10,
        marginLeft:15
    },
    phoneicon:{
        height: 45,
        width: 45,
        backgroundColor: '#e6f5ff',
        borderRadius: 50,
        alignItems: 'center',
        marginRight:10
    },
    iconBody:{
        flexDirection:'row',marginLeft:120
    }
})