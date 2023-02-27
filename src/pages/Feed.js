import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Feed.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { RapidAPI } from '../constants/RapidAPI'
import MovieInfo from './MovieInfo';
import { useParams } from "react-router-dom"

const Feed = () => {

  const [nowPlaying, setNowPlaying] = useState([]);
  const {type} = useParams()

  useEffect(() => {
    RapidAPI(`${type ? type : "now_playing"}`).then((data) => setNowPlaying(data.results))
  },[type])

  return (
    <>
      <div className="poster">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
          {
            nowPlaying.map(movie => (
              <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title}/>
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie.original_title}</div>
                  <div className="posterImage__runtime">
                    {movie.release_date}
                    <span className="posterImage__rating">
                      {movie.vote_average}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie.overview}</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
      </div>
      <MovieInfo nowPlaying={nowPlaying} type={type}/>
    </>
  )
}

export default Feed