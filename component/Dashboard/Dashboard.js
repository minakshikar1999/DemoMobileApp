import { StyleSheet, Text, View, SafeAreaView, ImageBackground ,FlatList,ScrollView} from 'react-native';
import bgImage from '../../assets/loggedin-bg.png'
import Header from './Header';
import Body from './Body';
import Footer from '../ScanPU/Footer';

export default function Dashboard(){
    const arr = [1,2]
    return(
        // <SafeAreaView>
        <View style={styles.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
                <Header/>
                <FlatList
                showsVerticalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => 
                <Body/>       
     }/>
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '8%', backgroundColor: 'rgb(255, 255, 255)', borderStyle: 'solid', borderColor: '#f2f2f2', borderWidth: 2, zIndex: 2 }}>
                        <Footer></Footer>
                    </View>
            </ImageBackground>
        </View>
    // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        flex: 1,
    },

});