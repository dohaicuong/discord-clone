import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#7289da' },
    secondary: { main: '#43b581' },
  },
  typography: {
    fontFamily: [
      'Whitney',
      'Helvetica Neue',
      'Helvetica,Arial',
      'sans-serif'
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': { width: 4, height: 6 },
        '::-webkit-scrollbar-thumb': {
          background: '#202225',
          borderRadius: 8,
          border: '4px solid transparent',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#202225',
        },
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#18191c',
        // boxShadow: '0 8px 16px rgba(0,0,0,0.24)',
        boxShadow: 'none',
        borderRadius: 4,
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgb(0, 0, 0)',
        opacity: '0.85 !important',
      }
    }
  }
})