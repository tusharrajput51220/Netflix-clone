import axios from 'axios'

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance
// https://api.themoviedb.org/3?api_key=fc785c29356e3a3299d0d29f4135ba0e
// https://api.themoviedb.org/3/trending/all/week?api_key=fc785c29356e3a3299d0d29f4135ba0e&language=en-US
// https://api.themoviedb.org/3/movie/popular?api_key=fc785c29356e3a3299d0d29f4135ba0e