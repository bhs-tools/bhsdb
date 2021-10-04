import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../spin.css'
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { Paper } from '@mui/material'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment> 
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    </React.Fragment>

  )
}

export default MyApp
