import { useState } from "react";
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Button,Image } from "react-native";
import { Avatar, Icon } from 'react-native-elements';
import { RadioButton } from "react-native-paper";
import AllPU from "./AllPU";
import Footer from "./Footer";


const gradientImage = require("../../assets/loggedin-bg.png")

export default function ScanPU() {
    const [checked, setChecked] = useState('allPu');

    return (
        <View>
            <ImageBackground source={gradientImage} resizeMode="cover" style={styles.image}>
                {/* header part.... */}
                <View style={styles.container}>
                    <Text style={styles.profile}>SCAN PU</Text>
                    <Avatar avatarStyle={styles.logo} rounded icon={{ name: 'person' }} size={'medium'} />
                </View>

                {/*  search bar section...*/}
                <View style={styles.serachbar}>
                    <View style={styles.icon}>
                    <Icon name='search' color='#ffffff' ></Icon>
                    </View>
                    <TextInput placeholder="  Search" placeholderTextColor='#f2f2f2' onChangeText={() => searchData(text)}
                        style={styles.input}></TextInput>
                        <View style={styles.scanner}>
                        <Icon name='qr-code-scanner' color='#ffffff' size={40} ></Icon>
                        </View>
                        
                        {/* <Image style={styles.scanner} source={require('../../assets/scanner.png')}/> */}
                    {/* <Icon name='compare' size={40} style={styles.scannerIcon}></Icon> */}
                </View>

                {/* body part... */}
                <View style={styles.body} >
                    <View style={styles.secondView} >
                        <RadioButton
                            value="openPu"
                            status={checked === 'openPu' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('openPu')}
                            uncheckedColor="#33adff"
                            
                        /><Text style={{ paddingTop: '1%', paddingRight: '4%', fontSize: 18,color:'#33adff' }}>Open PU Only</Text>
                        <RadioButton
                            value="allPu"
                            status={checked === 'allPu' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('allPu')}
                            uncheckedColor="#33adff"
                        /><Text style={{ paddingTop: '1%', fontSize: 18,color:'#33adff' }}>All PU(16)</Text>
                    </View>
                    <View style={{height:'87%'}}>
                        <AllPU view={checked}/>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '8%', backgroundColor: 'rgb(255, 255, 255)', borderStyle: 'solid', borderColor: '#f2f2f2', borderWidth: 2, zIndex: 2 }}>
                        <Footer></Footer>
                    </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25
    },
    profile: {
        margin: '5%',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    logo: {
        marginRight: 20
    },
    image: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
    },
    serachbar: {
        flext: 1,
        flexDirection: 'row',
        paddingTop: 8,
        marginLeft: 20,
        width: '100%',
        justifyContent: 'space-between'

    },
    input: {
        height: 50,
        width: 295,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor: '#008fb3'
    },
    icon:{
        height: 50,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        backgroundColor: '#008fb3',
        paddingTop:13,
        paddingLeft:5
    },
    scannerIcon: {
        marginRight: '18%',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
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
        position:'relative'

    },
    secondView: {
        padding: '5%',
        flext: 1,
        flexDirection: 'row',

    },
    listview: {
        margin: '6%',
        borderWidth: 1,
        backgroundColor: '#ddd',
        width: '85%',
        borderRadius: 7
    },
    btnView: {
        flext: 1,
        flexDirection: 'row',
    },
    scanner:{
        width:40,
        height:40,
        marginRight:70,
        marginTop:6,
        marginLeft:8
    }

})