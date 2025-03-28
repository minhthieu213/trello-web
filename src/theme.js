import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const HEADER_COLUMN_HEIGHT = '50px'
const FOOTER_COLUMN_HEIGHT = '56px'

const theme = extendTheme({
  cssVariables: true,
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    headerColumnHeight: HEADER_COLUMN_HEIGHT,
    footerColumnHeight: FOOTER_COLUMN_HEIGHT
  },
  colorSechemes:{
    // light:{
    //   palette:{
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark:{
    //   palette:{
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem'}
        }
      }
    },
    MuiInputLabel:{
      styleOverrides: {
        root:{ fontSize: '0.875rem' }
      }
    },
    MuiMenuItem:{
      styleOverrides: {
        root: { fontSize: '0.875rem' }
      }
    },
    MuiSelect:{
      styleOverrides: {
        root: { fontSize: '0.875rem' }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    }
  }
})

export default theme
