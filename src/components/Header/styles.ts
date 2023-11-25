import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';
import { TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  labelRetiro: TextStyle;
  labelPibjc: TextStyle;
  viewLabel: ViewStyle;
  viewLogoWrapper: ViewStyle;
}

export default function useDashboardScreenStyles(): Styles {
  const insets = useSafeAreaInsets();

  const styles: Styles = {
    container: {
      paddingTop: Math.max(insets.top, 48),
      paddingHorizontal: 24,
      width: '100%',
      height: 240,
      backgroundColor: theme.COLORS.primary,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },

    labelRetiro: {
      color: theme.COLORS.logo,
      fontSize: 18,
      fontFamily: theme.FONTS.medium,

      paddingTop: 4,

      // backgroundColor: '#E83F',
    },
    labelPibjc: {
      color: theme.COLORS.logo,
      fontSize: 18,
      fontFamily: theme.FONTS.bold,
      maxWidth: 260,

      // backgroundColor: '#E83F5B',
      paddingRight: 4,
    },
    viewLabel: {
      paddingTop: 6,
      paddingBottom: 8,
      // backgroundColor: '#12A454',
      alignItems: 'flex-end',
    },
    viewLogoWrapper: {
      flexDirection: 'row',
    },
  };

  return styles;
}
