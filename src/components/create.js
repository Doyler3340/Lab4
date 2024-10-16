// Import the useState hook from React for managing component state
import { useState } from "react";

// Define the Create component
function Create() {
  // Define state variables for title, year, and poster with empty initial values
  const [title, setTitle] = useState(''); // Title of the movie
  const [year, setYear] = useState('');   // Year of the movie
  const [poster, setPoster] = useState(''); // URL of the movie poster

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    console.log(title); // Log the title to the console when the form is submitted
  }

  // Return the JSX that renders the form UI
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form for adding movie details */}
      <form onSubmit={handleSubmit}>
        {/* Form group for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input 
            type="text"
            className="form-control"
            value={title} // The input field value is bound to the title state
            onChange={(e) => { setTitle(e.target.value) }} // Update the title state on input change
          />
        </div>

        {/* Form group for movie year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input 
            type="text"
            className="form-control"
            value={year} // The input field value is bound to the year state
            onChange={(e) => { setYear(e.target.value) }} // Update the year state on input change
          />
        </div>

        {/* Form group for movie poster URL */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input 
            type="text"
            className="form-control"
            value={poster} // The input field value is bound to the poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update the poster state on input change
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Export the Create component as the default export
export default Create;
