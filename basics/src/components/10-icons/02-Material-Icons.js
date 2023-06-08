import React from 'react'
import {theme} from "./theme";
import { ThemeProvider } from 'react-bootstrap';

const MaterialIcons = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>MaterialIcons</div>
    </ThemeProvider>
  )
}

export default MaterialIcons