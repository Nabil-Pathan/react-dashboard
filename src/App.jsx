import { createTheme } from "@mui/material";
import SideNav from "./components/SideNav"
import { ThemeProvider } from "@emotion/react";


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    
  });
  return (
    <>
    <ThemeProvider theme={theme}>
    <SideNav/>
    </ThemeProvider>
    </>
  )
}

export default App



