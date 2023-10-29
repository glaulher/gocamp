
import { useState } from 'react';
import Splash from './Splash';
import { Redirect } from 'expo-router';
import { Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function modal() {
  
  const [splashComplete, setSplashComplete] = useState(false)
 
  if (splashComplete) {
    return <Redirect href="/(tabs)" />;
  }
  
  return (  
    <View style={{flex:1, backgroundColor:"#9055EB"}} >
    <StatusBar  style="light"
              translucent
              backgroundColor="transparent" 
             
              />
    <Splash onComplete={setSplashComplete } />
    </View>
  );
}


