import React, { useEffect, useState } from "react";
// import gettingData from "./api/Getdata";

function Head({ onSearch }) {
  const [movieName, setMovieName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    //validate
    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setMovieName(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      onSearch(movieName);
    }
  };

  //   console.log(movie);
  return (
    <section className=" dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Search Where to Watch?
        </h1>
        <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Want to search a Movie, don't Know where to watch it?
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Problem solved, Find out just by one search
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          {/* Search input */}

          <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-row max-w-[400px]">
              <input
                type="text"
                id="movieName"
                name="movieName"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Movie name...."
                required
                onChange={handleInputChange}
              />
            </div>
            {error && <p>{error}</p>}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Head;
