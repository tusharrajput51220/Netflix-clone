import React, { useEffect, useState} from 'react'
import axios from 'axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseUrl='https://image.tmdb.org/t/p/original/'
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(''); 

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results)
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },[fetchUrl])
    // console.log(movies)
    const opts={
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    const handleClick=(movie)=>{
      if (trailerUrl) {
        // If trailerUrl is truthy, reset it to an empty string
        setTrailerUrl('');
      } else {
        // If trailerUrl is falsy, fetch the movie trailer
        movieTrailer(movie?.name || "")
          .then(url => {
            // Extract the video ID from the trailer URL
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get('v');
      
            // Set the trailerUrl state with the extracted video ID
            setTrailerUrl(videoId);
          })
          .catch(err => {
            // Handle errors more gracefully (e.g., display an error message to the user)
            console.error('Error fetching trailer:', err);
          });
      }
      
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
          {
            movies.map(movie => (
              <img 
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className= {`row-poster ${isLargeRow && 'row_posterLarge'}`}
                  src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                  alt={movie.name} />
            ))
          }

        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row

