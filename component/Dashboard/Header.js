import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar,Icon } from 'react-native-elements';
export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Text style={styles.profile}>DASHBOARD</Text>
                <View style={{ backgroundColor: 'white', borderRadius: 10, width: 70, height: 20, marginTop: 13, marginLeft: 20 }}>
                    <Text style={{ color: '#33adff', marginLeft: 10, fontWeight: 'bold' ,fontSize:12,marginTop:2}}>SYNC PU</Text>
                </View>
            </View>
            {/* <Avatar avatarStyle={styles.logo} rounded icon={{ name: 'person' }} size={'medium'} /> */}
            <Icon name='add' color='white' style={styles.logo} size={40} ></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40
    },
    profile: {
        margin: '5%',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    logo: {
        marginRight: 20,
    }

});