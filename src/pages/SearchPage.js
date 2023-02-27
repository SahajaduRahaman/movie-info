import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { RapidAPISearch } from '../constants/RapidAPI';
import MovieInfo from './MovieInfo';

const SearchPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const { searchTerm } = useParams();

  console.log(searchMovie)

  useEffect(() => {
    RapidAPISearch(`${searchTerm}`).then((data) => setSearchMovie(data.results))
  },[searchTerm])

  return (
    <MovieInfo nowPlaying={searchMovie} type={searchTerm}/>
  )
}

export default SearchPage