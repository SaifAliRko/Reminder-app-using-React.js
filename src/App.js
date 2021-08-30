import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { purple } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
