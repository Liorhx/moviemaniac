import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import Fire from "../assets/icons8-fire-48.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async (rating) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=91148ead1b793af27a3e91e4835197e4`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  //handle filter by stars
  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rating);

      const filteredMovies = movies.filter(
        (filterMovie) => filterMovie.vote_average >= rating
      );
      setFilterMovies(filteredMovies);
    }
    console.log(minRating);
  };
  return (
    <section className="movie_section" id={type}>
      <div className="movielist align-center">
        <h2 className="movielist_heading">
          {title} <img src={emoji} alt="" />
        </h2>
        <div className="movielist_fs align-center">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            className="movielist_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movielist_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
