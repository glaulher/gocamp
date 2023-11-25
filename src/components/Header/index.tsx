import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import useDashboardScreenStyles from './styles';
import Icon from '@expo/vector-icons/FontAwesome';

import Logo from '../../assets/logo.svg';
import theme from '../../theme';
import { RectButton } from 'react-native-gesture-handler';

export default function DashBoardScreen() {
  const styles = useDashboardScreenStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.viewLogoWrapper}>
          <Logo width={80} height={80} />
          <View style={styles.viewLabel}>
            <Text style={styles.labelRetiro}>Retirão </Text>
            <Text style={styles.labelPibjc}> PIBJC</Text>
          </View>
        </View>

        <View />
        <RectButton style={{ borderRadius: 36, padding: 24 }}>
          <Icon name="power-off" color={theme.COLORS.attention} size={28} />
        </RectButton>
      </View>
    </TouchableWithoutFeedback>
  );
}
