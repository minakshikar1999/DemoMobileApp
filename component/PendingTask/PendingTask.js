import { StyleSheet, Text, View, SafeAreaView, ImageBackground, FlatList, ScrollView } from 'react-native';
import bgImage from '../../assets/loggedin-bg.png'
import Footer from '../ScanPU/Footer';
import { Avatar, Icon } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const FirstRoute = () => {
    const [collapsible, setCollapsible] = useState(false);
    const toggleExpand = () => {
        setCollapsible(!collapsible)
    }
    return (
        <View style={styles.deliverycontainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text>status:</Text>
                <Text>Completed</Text>
            </View>
            <View style={{ height: '32%', backgroundColor: '#33adff', borderRadius: 5, padding: 10, marginTop: 15 }}>
                <Text style={{ color: 'white' }}>Total Shipment Delivered: 30/30</Text>
                <Text style={{ color: 'white', marginTop: 5 }}>Ready To Audit Count Scan: 0</Text>
            </View>
            <TouchableOpacity onPress={() => toggleExpand()} style={{ backgroundColor: '#e6f9ff', borderWidth:2,borderRadius:5,borderColor:'#33adff',marginTop: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#33adff', marginTop: 5, fontWeight: 'bold' }}>Pending Delivery(2)</Text>
                    <Icon name='remove' color={'grey'} style={{ marginTop: 5 }} />
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsible} style={{ backgroundColor: '#ffffff', borderStyle: 'solid', borderColor: '#f2f2f2', borderWidth: 2 }}>
                <View>
                    <Text>accordian</Text>
                </View>
            </Collapsible>
        </View>
    )
}



const SecondRoute = () => (

    <Text>second route</Text>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
export default function PendingTask() {

    const [index, setIndex] = useState(1);
    const [routes] = useState([
        { key: 'first', title: 'Delivery' },
        { key: 'second', title: 'Pickup' },
    ]);
    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
                <View className='m-5 mt-7'>
                    {/* header... */}
                    <View className='flex flex-row justify-between items-center  h-8 mt-3'>
                        <Text className='text-white font-semibold'>Pending Task</Text>
                        <Avatar avatarStyle={styles.logo} rounded icon={{ name: 'person' }} size={'medium'} />
                    </View>
                    {/* body */}
                    <View className='mt-5 bg-white rounded-2xl p-2' style={{ height: '88%', elevation: 10, }}>
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
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}> {route.title}</Text>
                                        </View>
                                    )}
                                />
                            )}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                        />
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
        height: '100%',
    },
    content: {
        margin: 20,
        marginTop: 30
    },
    image: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        height: '87%',
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
        padding: 3
    },
    deliverycontainer: {
        margin: 15
    }

});