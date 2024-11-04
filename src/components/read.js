import Movies from "./movies"; // Import the Movies component
import { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import axios from "axios"; // Import axios

const Read = () => {   // Create a functional component called Read

  const [movies, setMovies] = useState([]); // Create a state variable called movies

  useEffect(() => { // Use the useEffect hook to make an API call
    axios.get('http://localhost:4000/api/movies') // Make a GET request to the server
      .then((response) => { // Handle the promise
        console.log(response.data); // Log the response data to the console
        setMovies(response.data.movies); // Set the movies state variable
      })  
      .catch((error) => { // Handle any errors
        console.log(error); // Log the error to the console
      });
  });

  return (  // Return some JSX
    <div>   
      <h3>Hello from read component!</h3> 
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read; // Export the Read component