import logo from './logo.svg';
import './App.css';
import Details from "./Components/Details"
import ListMovies from "./Components/ListMovies"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListMovies />
        </Route>
        <Route path="/detail/:id">{<Details/>}</Route>
      </Switch>
    </BrowserRouter>


    </>
  );
}

export default App;
