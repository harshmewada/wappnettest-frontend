import "./App.css";
import Store from "./redux/store";
import { Provider } from "react-redux";
import Routes from "./routes";
import theme from "./constants/theme";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
function App() {
  return (
    <div className="App">
      <Provider store={Store()}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </div>
  );
}

export default App;
