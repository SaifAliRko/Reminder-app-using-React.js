import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { purple } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./Components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route  path="/notes">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
