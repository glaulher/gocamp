import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button} {...rest}>
        {/* <Icon name={icons[type]} type={type} /> */}
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </View>
  );
}
