import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: theme.COLORS.text,
    borderRadius: 5,

    backgroundColor: theme.COLORS.success_light,
  },

  title: {
    fontFamily: theme.FONTS.regular,
    fontSize: 14,

    color: theme.COLORS.title,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 8,
  },
});
