import * as styledComponents from 'styled-components/native';
import {ThemeProps as BasicThemeProps} from 'styled-components';
import {theme} from './theme';

export interface ThemeProps extends BasicThemeProps<typeof theme> {}

const {
  default: styled,
  css,
  ThemeProvider,
  withTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof theme
>;

export {css, ThemeProvider, withTheme};
export default styled;
