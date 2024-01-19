import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewStyle, TextStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  container: ViewStyle;
  highlightCards: ViewStyle;
  transactions: ViewStyle;
  title: TextStyle;
}

export default function useDashBoardStyles(): Styles {
  const insets = useSafeAreaInsets();

  const styles: Styles = {
    container: {
      flex: 1,

      backgroundColor: theme.COLORS.background,
    },

    highlightCards: {
      width: '100%',

      position: 'absolute',
      marginTop: Math.max(insets.top, 140),

      alignItems: 'center',
      paddingHorizontal: 24,
    },

    transactions: {
      flex: 1,
      paddingVertical: 0,
      paddingHorizontal: 24,

      marginTop: 124,
    },

    title: {
      fontSize: 18,
      fontFamily: theme.FONTS.regular,
      marginBottom: 16,
    },
  };

  return styles;
}
