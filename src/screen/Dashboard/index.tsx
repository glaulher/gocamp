import React from 'react';
import { View,Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';



export const Dashboard = () => {
return (
  <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
 );
}