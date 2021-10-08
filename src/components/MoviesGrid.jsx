import { MovieCard } from "./MovieCard";
import movies from "../movies.json";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  
  //hay que usar un efecto secundario
  useEffect(()=>{
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
       
      ))}
      
    </ul>
  );
} 