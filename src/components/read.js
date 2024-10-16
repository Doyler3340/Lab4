// Import the Movies component, useEffect, and useState hooks from React, and axios for making HTTP requests
import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Read component
function Read() {
  // Define the state variable 'movies' to store the list of movies, initialized as an empty array
  const [movies, setMovies] = useState([]);

  // useEffect hook to perform side effects (like fetching data) after the component mounts
  useEffect(() => {
    // Fetch movie data from the specified API endpoint using axios
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        // If the request is successful, update the 'movies' state with the fetched movie data
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // Log any errors that occur during the data fetch
        console.log(error);
      });
    // Empty dependency array ensures this effect runs only once when the component mounts
  }, []);

  // Return JSX to render the component
  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Render the Movies component and pass the 'movies' data as props to it */}
      <Movies myMovies={movies} />
    </div>
  );
}

// Export the Read component as the default export
export default Read;
