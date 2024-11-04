import { useState } from "react"; // Import the useState hook
import axios from "axios"; // Import axios

const Create = () => { // Create a functional component called Create

    const [title, setTitle] = useState(''); // Create a state variable called title
    const [year, setYear] = useState(''); // Create a state variable called year
    const [poster, setPoster] = useState(''); // Create a state variable called poster

    const handleSubmit = (e) => { // Create a function called handleSubmit
        e.preventDefault(); // Prevent the default form submission
        const movie = {title:title,year:year,poster:poster}; // Create a movie object

        axios.post('http://localhost:4000/api/movies', movie) // Make a POST request to the server
        .then() // Handle the promise
        .catch(); // Handle any errors
        console.log(movie); // Log the movie object to the console
    }

    return (
        <div>   
            <h3>Hello from create component!</h3> 
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create; // Export the Create component