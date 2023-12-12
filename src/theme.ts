import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#D7E1FF',
      main: '#9FB7FE',
      dark: '#5D86FE',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a080ff',
      main: '##dc5fff',
      dark: '##ff68cc',
      contrastText: '#000',
    },
  },
});