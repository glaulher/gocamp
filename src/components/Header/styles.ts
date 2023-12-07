import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';
import { TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  labelRetiro: TextStyle;
  labelPibjc: TextStyle;
  viewLabel: ViewStyle;
  viewLogoWrapper: ViewStyle;
  viewBorder: ViewStyle;
  viewColor: ViewStyle;
}

export default function useHeaderStyles(): Styles {
  const insets = useSafeAreaInsets();

  const styles: Styles = {
    container: {
      paddingTop: Math.max(insets.top, 48),
      paddingHorizontal: 24,
      width: '100%',
      height: 240,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },

    labelRetiro: {
      color: theme.COLORS.logo,
      fontSize: 18,
      fontFamily: theme.FONTS.medium,

      paddingTop: 4,
    },
    labelPibjc: {
      color: theme.COLORS.logo,
      fontSize: 18,
      fontFamily: theme.FONTS.bold,
      maxWidth: 260,

      paddingRight: 4,
    },
    viewLabel: {
      paddingTop: 6,
      paddingBottom: 8,

      alignItems: 'flex-end',
    },
    viewLogoWrapper: {
      flexDirection: 'row',
    },
    viewBorder: {
      width: '100%',
      padding: 16,
      backgroundColor: theme.COLORS.background,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
    },
    viewColor: {
      backgroundColor: theme.COLORS.primary,
    },
  };

  return styles;
}
