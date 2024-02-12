import { ImageBackground, FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Button ,Linking,Platform} from "react-native";
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';

// import { Button } from 'react-native-elements';
export default function AllPU(props) {
    const puData =[
        {
            'punumber':'PU/DKLG/2402/000006',
            'pieces':'1',
            'account':'Agent Priya',
            'line1':'',
            'line2':'BUKIT KAPAR, KAPAR, SELANGOR',
            'status':'completed',
            'phno':'97789898987'
        },
        {
            'punumber':'PU/DPMR/2402/000004',
            'pieces':'0',
            'account':'SHAIKH REHAN',
            'line1':'AHMED CN',
            'line2':'FIFTH, KAPAR,SELANGOR',
            'status':'inprogress',
            'phno':'97789898997'
        },
        {
            'punumber':'PU/HPEN/2402/000001',
            'pieces':'1',
            'account':'SHAIKH REHAN',
            'line1':'AHMED CN',
            'line2':'FIFTH, PENANG HILL,PULAU PINANG',
            'status':'completed',
            'phno':'7654345678'
        },
        {
            'punumber':'PU/DPMR/2402/000008',
            'pieces':'0',
            'account':'SHAIKH REHAN',
            'line1':'AHMED CN',
            'line2':'FIFTH, KAPAR,SELANGOR',
            'status':'inprogress',
            'phno':'7654345689'
        },
        {
            'punumber':'PU/HPEN/2402/000009',
            'pieces':'1',
            'account':'SHAIKH REHAN',
            'line1':'AHMED CN',
            'line2':'FIFTH, PENANG HILL,PULAU PINANG',
            'status':'completed',
            'phno':'765434890'
        }
    ]
    const openDialScreen = (phno) => {
        let number = '';
        if (Platform.OS === 'ios') {
          number = 'telprompt:${'+phno+'}';
        } else {
          number = 'tel:${'+phno+'}';
        }
        Linking.openURL(number);
      };
    return (
        <FlatList
            data={props.view == 'openPu'?puData.filter((item)=>item.status =='inprogress'):puData}
            renderItem={({ item }) => <View style={styles.body}>
                <View style={styles.card}>
                    <Text style={{fontWeight:'bold'}}>{item.punumber}</Text>
                    <View style={styles.cardBody}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight:'bold'}}>Pieces: </Text>
                            <Text style={{color:'#33adff',fontWeight:'bold'}}>{item.pieces}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{ marginLeft: 15 ,fontWeight:'bold'}}>Account: </Text>
                            <Text style={{color:'#33adff',fontWeight:'bold'}}>{item.account}</Text>
                        </View>
                    </View>
                    {
                        item.line1.length>1?<Text style={{color:'#33adff',fontWeight:'bold',marginTop:5}}>{item.line1}</Text>:null
                    }
                    <Text style={{ marginTop: 10,fontWeight:'bold' }}>{item.line2}</Text>
                    <View style={styles.cardBody}>
                        {
                            item.status =='completed'?<View style={styles.button_completed}>
                            <Text style={{color:'white',fontSize:12}}>Completed</Text>
                        </View>:item.status =='inprogress'?<View style={styles.button_inprogress}>
                            <Text style={{color:'black',fontSize:12}}>In-Progress</Text>
                        </View>:<View style={styles.button_open}>
                            <Text style={{color:'black',fontSize:12}}>Open</Text>
                        </View>

                        }
                        
                        
                        <View  style={styles.iconBody} >
                        <TouchableOpacity >
                        <View style={styles.phoneicon}>
                            <View style={{marginTop:2}} on>
                <SvgUri width="40" height="40" source={require('../../assets/whatsapp.svg')}/>
                </View>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>openDialScreen(item.phno)}>
                        <View style={styles.phoneicon}>
                            <View style={{marginTop:10}} on>
                <SvgUri width="20" height="20" source={require('../../assets/phone-solid.svg')}/>
                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.phoneicon}>
                            <View style={{marginTop:10}}>
                <SvgUri width="20" height="20" source={require('../../assets/location-dot-solid.svg')}/>
                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.arrowicon}>
                            <View style={{marginTop:2}}>
                {/* <SvgUri width="15" height="15" source={require('../../assets/location-dot-solid.svg')}/> */}
                <Icon name="chevron-right" size={35} color="white" type="material" />
                </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>}
            keyExtractor={item => item.id}
        />

    )
}

const styles = StyleSheet.create({
    body: {
        marginLeft: 15,
        borderColor: '#99d6ff',
        borderWidth: 1,
        borderRadius: 5,
        width: '92%',
        marginTop: 15
    },
    card: {
        paddingTop: 5,
        paddingLeft: 10
    },
    cardBody: {
        flexDirection: 'row',
        marginTop: 10
    },
    button_completed:{
        backgroundColor:'grey',
        width:90,
        height:20,
        paddingLeft:10,
        paddingRight:5,
        borderRadius:5,
        fontWeight:'bold',
        marginTop:20

    },
    button_inprogress:{
        backgroundColor:'#ffcc66',
        width:90,
        height:20,
        paddingLeft:10,
        paddingRight:5,
        borderRadius:5,
        fontWeight:'bold',
        marginTop:20

    },
    button_open:{
        backgroundColor:'#00cc00',
        width:80,
        height:18,
        paddingLeft:10,
        paddingRight:5,
        borderRadius:3,
        fontWeight:'bold',
        marginTop:15

    },
    iconBody:{
        flexDirection: 'row',
        marginTop:5,
        width:'73%',
        justifyContent:'flex-end',
        marginBottom:5
    },
    icon:{
        marginLeft:10,
        // marginRight:10
    },
    phoneicon:{
        height: 40,
        width: 40,
        backgroundColor: '#e6f5ff',
        borderRadius: 50,
        alignItems: 'center',
        marginRight:10
    },
    arrowicon:{
        height: 40,
        width: 40,
        backgroundColor: '#0099ff',
        borderRadius: 50,
        alignItems: 'center',
        marginRight:10
    }
})