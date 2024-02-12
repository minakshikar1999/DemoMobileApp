import { ImageBackground, StyleSheet, View } from "react-native";
import CreateDrs from "./CreateDrs";
import SearchBarComponentData from "./SearchBarComponectData";
import Drslist from "./Drslist";
import Footer from "./Footer";
const gradientImage=require("../../assets/loggedin-bg.png")
export default function MainDrsListComponent(){
    return(
        <View>
            <ImageBackground source= {gradientImage} resizeMode="cover" style={styles.image}>
            <CreateDrs/>
      <SearchBarComponentData/>
      <Drslist/>
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '8%', backgroundColor: 'rgb(255, 255, 255)', borderStyle: 'solid', borderColor: '#f2f2f2', borderWidth: 2, zIndex: 2 }}>
                        <Footer></Footer>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F8F8FF',
      alignItems: 'center',
      padding:8,
    },
    image: {
        borderRadius:10,
        // flex: 1,
        // justifyContent: 'center',
        height:'100%',
        width:'100%',
      },
})