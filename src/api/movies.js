import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWMxZmEwYTIwNzI2NzUyNGI2Yzc0ZjMzMGEzNjVmZSIsIm5iZiI6MTc0MDYwMDQxNS4zOSwic3ViIjoiNjdiZjc0NWY3NDBjOTVhMzcxYTIzNjFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Y4LEX918wCTlbRcvkbuDCa64gB8v2jUe3h_lYLvfjbg',
  },
  params: {
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', options);
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get('search/movie', {
    ...options,
    params: {query, include_adult: false, page: 1},
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};
