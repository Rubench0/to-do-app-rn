import {extendTheme} from 'native-base';
import {colors} from './src/styles/styles';

export const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        backgroundColor: colors.greyLight,
        borderWidth: 0,
        color: colors.greyDark,
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
  },
});
