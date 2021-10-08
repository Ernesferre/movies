export const getMovies = async () => {
  console.log("desde Get Movies");
  const ApiKey = "54ffed57deb5a7a8688be4de3007e578";

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=3`;

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
};
