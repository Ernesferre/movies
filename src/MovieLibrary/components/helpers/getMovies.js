export const getMovies = async (page) => {
  const ApiKey = "54ffed57deb5a7a8688be4de3007e578";

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=${page}`;

  return await fetch(url, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
