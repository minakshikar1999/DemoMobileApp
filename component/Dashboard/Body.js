import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, FlatList, useWindowDimensions } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Avatar ,Icon,Badge} from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { Tab, TabView } from 'react-native-elements';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import SvgUri from 'react-native-svg-uri';

const arr =[1,2,3,4,7,8,9,9,9,9,9,9]
const FirstRoute = () => (
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
    <View style={{flexDirection:'row'}}>
        <View style={styles.circlefortab}>
            <View style={{marginTop:13}}>
            <SvgUri width="35" height="35" source={require('../../assets/shippingfast.svg')}/>
            </View>
        </View>
        <View style={{marginLeft:15,marginTop:5}}>
        {/* <FontAwesomeIcon icon="far fa-shipping-fast" size="sm" style={{color: "#74C0FC",}} /> */}
            <Text style={{fontWeight:'bold',fontSize:18}}>PU/DPMR/2402/000004</Text>
            <Text style={{color:'grey',marginTop:8,fontWeight:'bold'}}>In-Progress</Text>
        </View>
    </View>
    <View style={{marginTop:25}}>
    <Icon name="chevron-right" size={20} color="grey" type="material" />
    </View>
</View>
);

const SecondRoute = () => (
    // <FlatList
    //     data={arr}
    //     renderItem={({item}) => 
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.circlefortab}>
                <View style={{marginTop:13}}>
                <SvgUri width="35" height="35" source={require('../../assets/shippingfast.svg')}/>
                </View>
            </View>
            <View style={{marginLeft:15,marginTop:5}}>
            {/* <FontAwesomeIcon icon="far fa-shipping-fast" size="sm" style={{color: "#74C0FC",}} /> */}
                <Text style={{fontWeight:'bold',fontSize:18}}>PU/DPMR/2402/000004</Text>
                <Text style={{color:'grey',marginTop:8,fontWeight:'bold'}}>In-Progress</Text>
            </View>
        </View>
        <View style={{marginTop:25}}>
        <Icon name="chevron-right" size={20} color="grey" type="material" />
        </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.circlefortab}>
                <View style={{marginTop:13}}>
                <SvgUri width="35" height="35" source={require('../../assets/shippingfast.svg')}/>
                </View>
            </View>
            <View style={{marginLeft:15,marginTop:5}}>
            {/* <FontAwesomeIcon icon="far fa-shipping-fast" size="sm" style={{color: "#74C0FC",}} /> */}
                <Text style={{fontWeight:'bold',fontSize:18}}>PU/DPMR/2402/000089</Text>
                <Text style={{color:'grey',marginTop:8,fontWeight:'bold'}}>In-Progress</Text>
            </View>
        </View>
        <View style={{marginTop:25}}>
        <Icon name="chevron-right" size={20} color="grey" type="material" />
        </View>
    </View>
    </>
        
    
    // } listKey="1.1"/>
    
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
export default function Body() {
    const arr = [1];
    // const [index, setIndex] = useState(0);
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
        { key: 'first', title: 'Open Delivery' },
        { key: 'second', title: 'Open Pickup' },
    ]);
    return (
        <>
            {/* <FlatList
        data={arr}
        renderItem={({item}) =>  */}
            
            <View style={styles.container}>
            {/* <ScrollView style={{height:'90%',borderWidth:3,borderColor:'red'}}> */}
                <View style={styles.container_one}>
                    <View style={styles.profileheader}>
                        <View style={{ width: 80, height: 80, borderRadius: 50, marginTop: 30, marginLeft: 20 }}>
                            <Avatar size={80} rounded source={require('../../assets/dumyimage.png')} />
                            {/* <Image style={styles.tinyLogo} source={require('../../assets/profileimage1.png')}/> */}
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text>Shaikh Rehan Ahmed </Text>
                            <Text>priya</Text>
                            <Text>DBTW</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ marginLeft: 25,fontWeight:'bold' }}>
                                Delivery
                            </Text>
                            <Text style={{ fontSize: 10,fontWeight:'bold' }}>
                                Pending Delivery (pcs)
                            </Text>
                        </View>
                        <View style={{ marginLeft: 80 }}>
                            <Text style={{ marginLeft: 32,fontWeight:'bold' }}>
                                Pick Up
                            </Text>
                            <Text style={{ fontSize: 10,fontWeight:'bold' }}>
                                Pending Pick Up (location)
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                        <Text style={{ marginTop: 40, marginLeft: 18,fontWeight:'bold' }}>
                            0/0
                        </Text>
                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.outercircle}>
                                <View style={styles.innercircle}>
                                    <Text style={{ color: '#33adff', marginTop: 13, fontWeight: 'bold', fontSize: 18 }}>0</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ marginTop: 40, marginLeft: 94,fontWeight:'bold' }}>
                            0/0
                        </Text>
                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.outercircle}>
                                <View style={styles.innercircle}>
                                    <Text style={{ color: '#33adff', marginTop: 13, fontWeight: 'bold', fontSize: 18 }}>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ fontSize: 10,fontWeight:'bold' }}>Pending Audit Count</Text>
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <View style={styles.circle}>
                                    <Text style={{ color: 'white', marginTop: 17, fontWeight: 'bold', fontSize: 18 }}>0</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 100 }}>
                            <Text style={{ fontSize: 10, marginLeft: 10,fontWeight:'bold' }}>Pending Handover</Text>
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <View style={styles.circle}>
                                    <Text style={{ color: 'white', marginTop: 17, fontWeight: 'bold', fontSize: 18 }}>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                {/* second div */}
                <View style={styles.container_two}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ marginLeft: 32 ,fontWeight:'bold'}}>Pending COD</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                            <Text style={{ marginTop: 40,fontWeight:'bold',marginLeft:8 }}>
                                0/0
                            </Text>
                            <View style={{ marginLeft: 20 }}>
                                <View style={styles.circle}>
                                    <Text style={{ color: 'white', marginTop: 17, fontWeight: 'bold', fontSize: 18 }}>0</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: 15,marginRight:20 }}>
                        <View>
                            <Text style={{fontWeight:'bold'}}>Pending Collect</Text>
                            <Text style={{ color: '#3385ff', marginLeft: 25 ,fontWeight:'bold'}}>RM 0.00</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{fontWeight:'bold'}}>Amount Collected</Text>
                            <Text style={{ color: '#3385ff', marginLeft: 25 ,fontWeight:'bold'}}>RM 0.00</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', marginLeft: 60,marginTop:15}}>
                    <View >
                        <Text style={{ fontWeight: 'bold' }}>DRS Update</Text>
                    </View>
                    <View >
                        <Text style={{ fontWeight: 'bold' }}>Pickup Update</Text>
                    </View>
                </View>
                
                {/* tips section */}
                <View style={styles.tripscontainer}>
                    <View style={{ marginLeft: 110, flexDirection: 'row' }}>
                        <Text style={{ color: 'grey' ,fontSize:15,fontWeight:'bold'}}>No Trips Available</Text>
                        <Image style={styles.refresicon} source={require('../../assets/refresh.png')}></Image>
                    </View>
                </View>
                
                {/*open delivery and pickup section */}
                <View style={styles.deliverycontainer}>
                <TabView
                                navigationState={{ index, routes }}
                                renderTabBar={props => (
                                    <TabBar
                                        {...props}
                                        indicatorStyle={{ backgroundColor: '#0099ff' }}
                                        style={{ backgroundColor: 'white' }}
                                        activeColor="#0099ff"
                                        inactiveColor="#3e2465"
                                        renderLabel={({ route, color }) => (
                                            <View style={{flexDirection:'row'}}>
                                                {
                                                    route.title == 'Open Delivery' ?<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}> {route.title}</Text>
                                                    :<Text style={{ color: '#0099ff', fontSize: 17, fontWeight: 'bold' }}> {route.title}</Text>
                                                }
                                                
                                                <View style={{marginTop:5,marginLeft:5}}>
                                                    {
                                                        route.title == 'Open Delivery' ?<Badge value={0} badgeStyle={{backgroundColor:'grey'}}/>
                                                        :<Badge value={1} badgeStyle={{backgroundColor:'#0099ff'}}/>
                                                    }
                                                
                                                </View>
                                            </View>
                                            // <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>
                                            //     {route.title}
                                            //     <View style={{marginTop:20,marginLeft:10}}>
                                            //     <Badge value={1} badgeStyle={{backgroundColor:'grey'}}/>
                            
                                            //     </View>
 
                                            // </Text>
                                        )}
                                    />
                                )}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                // initialLayout={initialLayout}
                            />
                    {/* <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        style={styles.tabheader}
                        // indicatorStyle={{ backgroundColor: 'blue' }}
                        //                 style={{ backgroundColor: 'white' }}
                        //                 activeColor="#f0edf6"
                        //                 inactiveColor="#3e2465"
                    /> */}
                </View>
                {/* </ScrollView> */}
            </View>
            
        {/* //  }
        //  />  */}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        // marginTop:5,
        
    },
    container_one: {
        height: '26%',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        flex: 1,
    },
    profileheader: {
        margin: 5,
        height: 80,
        backgroundColor: '#d9e6f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    container_two: {
        height: '12%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    hline: {
        height: '0%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopColor: '#f2f2f2',
        borderTopWidth: 3
    },
    tripscontainer: {
        height: '10%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems:'center'
    },
    refresicon: {
        marginTop: 3,
        marginLeft: 8,
        width: 15,
        height: 15
    },
    deliverycontainer: {
        height: '40%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    circle: {
        height: 60,
        width: 60,
        backgroundColor: '#33adff',
        borderRadius: 50,
        alignItems: 'center'
        // display:''
        // backgroundcolor: #bbb;
        // border-radius: 50%;
        // display: inline-block;
    },
    circlefortabheader: {
        height: 20,
        width: 20,
        backgroundColor: '#e6f5ff',
        borderRadius: 50,
        // marginTop:10
        // alignItems: 'center'
        // display:''
        // backgroundcolor: #bbb;
        // border-radius: 50%;
        // display: inline-block;
    },
    circlefortab: {
        height: 60,
        width: 60,
        backgroundColor: '#e6f5ff',
        borderRadius: 50,
        alignItems: 'center'
        // display:''
        // backgroundcolor: #bbb;
        // border-radius: 50%;
        // display: inline-block;
    },
    outercircle: {
        height: 60,
        width: 60,
        backgroundColor: '#ffeecc',
        borderRadius: 50,
        alignItems: 'center'
        // display:''
        // backgroundcolor: #bbb;
        // border-radius: 50%;
        // display: inline-block;
    },
    innercircle: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        alignItems: 'center'
    },
    tabheader:{
        backgroundColor:'white'
    }
});