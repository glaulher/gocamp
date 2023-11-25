import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.shape,

    width: '100%',
    borderRadius: 7,
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 16,
  },

  title: {
    fontFamily: theme.FONTS.bold,
    fontSize: 16,

    color: theme.COLORS.title,
  },

  address: {
    paddingTop: 4,
    fontFamily: theme.FONTS.regular,
    fontSize: 14,
    color: theme.COLORS.text,
  },
  city: {
    paddingTop: 4,
  },
  text: {
    fontFamily: theme.FONTS.regular,
    fontSize: 14,
    color: theme.COLORS.text,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },

  coordinates: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  latitude: {
    paddingLeft: 4,
    fontSize: 12,
    color: theme.COLORS.title,
  },

  longitude: {
    paddingLeft: 4,
    fontSize: 12,
    color: theme.COLORS.title,
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

// export const iconMap = theme.COLORS.GO;
