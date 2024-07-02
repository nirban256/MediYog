import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
    return (
        <View className='flex-1'>
            <ImageBackground
                source={beachImage}
                resizeMode='cover'
                className='flex-1'
            >
                <LinearGradient
                    className='flex-1'
                    colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
                >
                    <SafeAreaView className='flex-1 px-1 top-4 justify-between'>
                        <View>
                            <Text className='text-center text-white font-bold text-4xl '>
                                MediYog
                            </Text>
                            <Text className='text-center text-white text-regular text-2xl mt-3'>
                                Simplifying meditation for everyone
                            </Text>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
            <StatusBar style='light' />
        </View>
    )
}

export default App