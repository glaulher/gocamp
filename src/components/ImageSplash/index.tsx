import { View, Image } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import splash from '../../../assets/splash.png';

export function ImageSplash() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <Image source={splash} style={styles.image} alt="splash" />
    </View>
  );
}
