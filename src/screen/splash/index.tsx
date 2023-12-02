import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { ResizeMode, Video, AVPlaybackStatus } from 'expo-av';
import { useEffect, useState } from 'react';
import { hideAsync } from 'expo-splash-screen';
import SplashScreen from '../../../assets/splash.mp4';
import { useSplash } from '../../hook/useSplash';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const { splashFinished, setSplashFinished } = useSplash();
  const navigation = useNavigation();

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
        setSplashFinished(true);
      }
    }
  };
  useEffect(() => {
    if (splashFinished) {
      navigation.navigate('AppRoutes');
    }
  }, [navigation, splashFinished]);

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={SplashScreen}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay
      />
    </>
  );
}
