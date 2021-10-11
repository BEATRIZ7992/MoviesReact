import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 const query= useQuery();
 const search= query.get("search");
 console.log(search)
  
  //hay que usar un efecto secundario
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  if(isLoading){
    return <Spinner/>
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
       
      ))}
      
    </ul>
  );
} 