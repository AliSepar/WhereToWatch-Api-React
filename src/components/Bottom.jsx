import React, { useEffect, useState } from "react";
// import useMovieData from "./api/Getdata";

function Bottom({ movie, isLoading }) {
  // console.log(movie);
  // const {result} = movie;
  // if (movie.length === 0) {
  //   return <p>No results found.</p>;
  // }
  console.log(movie);
  return (
    <div className="flex flex-col gap-3 mx-auto items-center justify-center ">
      {/* Bottom */}

      {isLoading && (
        <div className="items-center text-xl mt-4">Loading.....</div>
      )}
      {movie?.map((item, index) => {
        return (
          <div
            key={index}
            className="min-w-full p-6 flex flex-row gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              className="h-44"
            />
            <div>
              <a
                href="#"
                className="flex flex-row items-center justify-start gap-3"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item?.title || item?.name}
                </h5>
                <span className="text-xl">
                  ({item.release_date || item.first_air_date})
                </span>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.overview}
              </p>
              {/* rating */}
              <div className="flex flex-row items-start">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src="https://icon2.cleanpng.com/20180706/bbf/aaxz1nwz7.webp"
                    className="w-10"
                    alt=""
                  />
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <span className="font-semibold">7.0</span>
                </div>

                <div className="lg:ml-10">
                  <h4 className="p-1 text-xl font-semibold">Streaming</h4>
                  {item.streamingProviders && item.streamingProviders.US ? (
                    <div className="flex flex-row items-center border border-neutral-300 rounded-md">
                      {item.streamingProviders.US.flatrate ? (
                        item.streamingProviders.US.flatrate.map(
                          (provider, index) => (
                            <a
                              key={index}
                              href={`https://www.themoviedb.org/${provider.provider_id}`} // Replace with actual streaming link if available
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ marginRight: "10px" }} // Optional: Add spacing between logos
                            >
                              <img
                                src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                                alt={provider.provider_name}
                                className="w-16" // Adjust size as needed
                              />
                            </a>
                          )
                        )
                      ) : (
                        <span>No streaming providers available</span>
                      )}
                    </div>
                  ) : (
                    <p>No streaming information available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bottom;
