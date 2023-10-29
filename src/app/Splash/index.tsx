import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

import LottieView from "lottie-react-native";
import { ResizeMode, Video, AVPlaybackStatus } from 'expo-av';
import { useState } from 'react';
import { hideAsync } from 'expo-splash-screen';


type Props={
  onComplete: (status:boolean)=>void;
  
}

export default function Splash({onComplete}:Props ) {
 const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({}as AVPlaybackStatus)

  
  const onPlaybackStatusUpdate =(status:AVPlaybackStatus)=>{
    if(status.isLoaded){
      if(lastStatus.isLoaded !==status.isLoaded){
        hideAsync()
      }
      if(status.didJustFinish){
        onComplete(true)
      }
    }
  }
  return (

   // <Animation/>
    // <View style={styles.container}>
      
    //   <Text style={styles.title}>Modal</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/modal.tsx" />

    //   {/* Use a light status bar on iOS to account for the black space above the modal */}
    //   <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    // </View>

    
    <>
   
      <StatusBar style="light"
        translucent
        backgroundColor="transparent" /><Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../../../assets/images/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true} /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
