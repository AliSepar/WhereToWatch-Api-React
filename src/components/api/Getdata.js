import { useEffect, useState } from "react";

function useMovieData(movieName) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieName) return;

    const getData = async () => {
      setIsLoading(true);
      try {
        // Fetch main movie/TV data
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${movieName}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const movieData = await response.json();
        const resultsWithProviders = await Promise.all(
          movieData.results.map(async (item) => {
            // Fetch streaming providers for movies
            let providerResponse;
            if (item.media_type === "movie") {
              providerResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${item.id}/watch/providers?api_key=${API_KEY}`
              );
            } else if (item.media_type === "tv") {
              providerResponse = await fetch(
                `https://api.themoviedb.org/3/tv/${item.id}/watch/providers?api_key=${API_KEY}`
              );
            }

            const providers = providerResponse
              ? await providerResponse.json()
              : null;
            return {
              ...item,
              streamingProviders: providers ? providers.results : null,
            };
          })
        );

        setMovie(resultsWithProviders);
      } catch (error) {
        console.error(error);
        setMovie([]);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieName]);

  return { movie, isLoading };
}

export default useMovieData;
