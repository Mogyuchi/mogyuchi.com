import { indigo, pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./appbar";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: indigo[500],
    },
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
}
