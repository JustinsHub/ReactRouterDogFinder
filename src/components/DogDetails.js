import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogDetails({dogs}) {

//passing details to a variable that consists of dogs prop from Route prop -> App
//loops through the prop to access individual dog information
const dogDetails = dogs.map(dog=>( 
    <div>
    <img src={dog.src} alt={dog.name} />
    <h2>{dog.name}</h2>
    <h3>{dog.age} years old</h3>
    <ul>
    {dog.facts.map((fact, i) => (
        <li key={i}>{fact}</li>
    ))}
    </ul>
    </div>))

//pass dogDetails and a link to go back home
return (
    <div className="row DogDetails">
    <div className="col d-flex flex-column align-items-center">
        {dogDetails}
        <Link to="/dogs">Go Back</Link>
    </div>
    </div>
);
}

export default DogDetails;
