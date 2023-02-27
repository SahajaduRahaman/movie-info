import "../styles/MovieInfo.css"
import MovieCards from "./MovieCards"

const MovieInfo = ({nowPlaying, type}) => {

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "Now_Playing").toUpperCase()}</h2>
      <div className="list__cards">
        {
          nowPlaying.map(movie => (
            <MovieCards movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default MovieInfo