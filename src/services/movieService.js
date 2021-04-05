import { useFetch } from "./useFetch";
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "d432b933ecc6d5642d8d2befbc40c7ac"; // Real world: store on server to keep secret
const defaultQueryParams = `?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

export function useGenres() {
  const { data, loading, error } = useFetch(
    `${baseUrl}genre/movie/list${defaultQueryParams}`
  );
  return { genres: data?.genres, loading, error };
}

export function useDiscover({ genreId }) {
  const { data, loading, error } = useFetch(
    `${baseUrl}discover/movie${defaultQueryParams}&with_genres=${genreId}`
  );
  return { movies: data?.results, loading, error };
}

export function useMovie({ id }) {
  const { data, loading, error } = useFetch(
    `${baseUrl}/movie/${id}${defaultQueryParams}`
  );
  return { details: data, loading, error };
}
