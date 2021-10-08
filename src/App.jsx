
import styles from "./app.module.css";
import React from "react";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function App() {

  return (
    <Router>
      <header>
      <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
       
      </header>
      <main>
      <Switch>
          <Route exact path="/movies/:movieId"> <MovieDetails/> </Route>
          <Route path="/"><LandingPage/> </Route>
          
        </Switch>
      
       
      </main>
    </Router>
  );
}