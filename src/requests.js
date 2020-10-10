const API_KEY = "5e7d4ee5f7dda766eb28435a4b50353f";

const requests = {
  fectchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fectchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fectchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fectchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fectchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fectchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fectchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fectchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
