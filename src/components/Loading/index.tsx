import { ActivityIndicator, View } from 'react-native';
import { LoadingIndicator, styles } from './styles';
import { StatusBar } from 'expo-status-bar';

export function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <ActivityIndicator
        animating
        color={LoadingIndicator.color}
        size="large"
      />
    </View>
  );
}
