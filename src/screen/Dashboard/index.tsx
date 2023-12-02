import React, { useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export const Dashboard = () => {
  const { setOptions, addListener } = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setOptions({ gestureEnabled: false });
    } else if (Platform.OS === 'android') {
      // android does not respect gestureEnabled flag
      addListener('beforeRemove', (nav) => {
        // Prevent going back on swipe
        if (nav.data.action.type === 'GO_BACK' && !nav.data.action.source) {
          nav.preventDefault();
        }
      });
    }
  }, [addListener, setOptions]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
};
