import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.primary,
  },
  body: {
    flex: 1,
    backgroundColor: theme.COLORS.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 24,
  },
  HighlightCards: {
    width: '100%',

    position: 'absolute',
    marginTop: -80,
    marginLeft: 24,
    alignItems: 'center',
  },
});
