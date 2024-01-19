import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.shape,

    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 24,

    marginBottom: 16,
  },

  title: {
    fontFamily: theme.FONTS.medium,
    fontSize: 20,
    color: theme.COLORS.title,
  },

  description: {
    fontFamily: theme.FONTS.regular,
    fontSize: 14,

    marginTop: 2,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 19,
  },

  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 20,
    color: theme.COLORS.attention,
  },

  categoryName: {
    fontSize: 14,
    color: theme.COLORS.text,

    marginLeft: 14,
  },

  date: {
    fontSize: 14,
    color: theme.COLORS.text,
  },
});
