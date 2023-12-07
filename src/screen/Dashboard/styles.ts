import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  container: ViewStyle;

  HighlightCards: ViewStyle;
}

export default function useDashBoardStyles(): Styles {
  const insets = useSafeAreaInsets();

  const styles: Styles = {
    container: {
      flex: 1,

      backgroundColor: theme.COLORS.background,
    },

    HighlightCards: {
      width: '100%',

      position: 'absolute',
      marginTop: Math.max(insets.top, 140),

      alignItems: 'center',
      paddingHorizontal: 24,
    },
  };

  return styles;
}
