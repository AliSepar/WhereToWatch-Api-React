import React, { useState } from "react";
import Head from "./components/Head";
import Bottom from "./components/Bottom";
import useMovieData from "./components/api/Getdata";

function App() {
  const [movieName, setMovieName] = useState("");
  const { movie, isLoading } = useMovieData(movieName);

  const handleSearch = (term) => {
    setMovieName(term); // Update searchTerm based on Head input
  };

  return (
    <main className="container mx-auto bg-neutral-100 min-h-screen pb-10">
      <Head onSearch={handleSearch} />
      <Bottom movie={movie} isLoading={isLoading} />
    </main>
  );
}

export default App;
