import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import useHeaderStyles from './styles';
import Icon from '@expo/vector-icons/FontAwesome';

import Logo from '../../assets/logo.svg';
import theme from '../../theme';
import { RectButton } from 'react-native-gesture-handler';

export default function Header() {
  const styles = useHeaderStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.viewColor}>
        <View style={styles.container}>
          <View style={styles.viewLogoWrapper}>
            <Logo width={80} height={80} />
            <View style={styles.viewLabel}>
              <Text style={styles.labelRetiro}>Retirão </Text>
              <Text style={styles.labelPibjc}> PIBJC</Text>
            </View>
          </View>

          <View />
          <RectButton
            style={{
              borderRadius: 24,
              paddingVertical: 8,

              paddingHorizontal: 8,
              marginTop: 16,
            }}
          >
            <Icon name="power-off" color={theme.COLORS.attention} size={28} />
          </RectButton>
        </View>
        <View style={styles.viewBorder} />
      </View>
    </TouchableWithoutFeedback>
  );
}
