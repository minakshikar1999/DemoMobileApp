import { Image, ImageBackground, Linking, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const logo = require("../../assets/lineclear.png");
const gradientImage = require("../../assets/gradient.png");

export default function Signin() {

  return (
    <View className='items-center'>
        <ImageBackground className='h-full w-screen' source={gradientImage} resizeMode="cover">
          <View className='items-center'>
            <View className='mt-40 mb-5'>
              <Image source={logo} ></Image></View>
            <Text className='font-light text-gray-600'>Sign in to your account to strat perform the pickup  </Text>
            <Text className='font-light text-gray-600'>and delivery</Text>
            <View className='mt-40  w-full p-2'>
              <Button title="SIGN IN" onPress={() => console.log("Signin button press")} buttonStyle={{
                borderRadius: 20,
                width: '100%',
              }} />
            </View>
          </View>
          <View className='absolute bottom-8 left-0 right-0 w-full h-1auto items-center'>
            <Text className='text-white' onPress={() => Linking.openURL('https://google.com')}> Terms  &  Condition </Text >
          </View>
        </ImageBackground>
    </View>

  );
}
