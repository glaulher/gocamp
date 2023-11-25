import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { ResizeMode, Video, AVPlaybackStatus } from 'expo-av';
import { useState } from 'react';
import { hideAsync } from 'expo-splash-screen';
import Splash from '../../../assets/splash.mp4';

type Props = {
  onComplete: (status: boolean) => void;
};

export default function SplashScreen({ onComplete }: Props) {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus,
  );

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    setLastStatus(status);

    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }
      if (status.didJustFinish) {
        onComplete(true);
      }
    }
  };
  return (


    <>
     
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={Splash}
     
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay
      />
    </>
  );
}

