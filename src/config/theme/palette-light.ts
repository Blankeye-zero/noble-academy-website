import { PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#C7CCD9', //'#fdfdfd',
    paper: common.white,
  },
  text: {
    primary: '#A68F72',
    secondary: '#732B1A', // grey[700],
    disabled: grey[500],
  },
}

export default palette
