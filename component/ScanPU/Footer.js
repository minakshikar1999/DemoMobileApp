import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar,Icon } from 'react-native-elements'
export default function Footer() {
    return (
        <View style={{ width: '85%', marginLeft: 30,padding:10}}>
            <View style={styles.footer}>
                <View>
                    <Icon name='menu' size={30} color='#bbbbbb' />
                    <Text style={{ color: '#bbbbbb' }}>Menu</Text>
                </View>
                <View>
                    <Icon name='home' size={30}  color='#33adff'/>
                    <Text style={{ color: '#33adff' }}>Home</Text>
                </View>
                <View>
                    <Icon name='person' size={30} color='#bbbbbb' />
                    <Text style={{ color: '#bbbbbb' }}>User</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        color: 'black'
    }

});