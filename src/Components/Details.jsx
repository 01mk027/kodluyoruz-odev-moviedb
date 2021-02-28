import React from 'react'
import { useParams } from 'react-router-dom';
import {Card, Button} from "react-bootstrap"


function Details()
{
  const [film,setFilm] = React.useState()
  const  {id}  = useParams();

React.useEffect(
    ()=>{
      fetch(`https://api.themoviedb.org/3/movie/${Number(id)}?api_key=dbf37ea7b58a822de9ec5701370f95af&language=en-US`)
        .then(response => response.json())
        .then(result => setFilm(result))
        .catch(error => console.log('error', error));

    },[]
  );

console.log(film)

function f()
{
  if(film)
  return(<h1>{film.original_title}</h1>)
}


const films = () => {
if(film){
  return (
        <Card>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} />
          <Card.Body>
            <Card.Title><h3>{film.original_title}</h3></Card.Title>
            <Card.Text>
              {film.overview}
            </Card.Text>
            <ul className="text-left">
                <li><span>Popularity:</span>{film.popularity}</li>
                <li><span>Vote: </span>{film.vote_average}</li>
                <li><span>Release Date:</span> {film.release_date} </li>
            </ul>



          </Card.Body>
        </Card>

    )
}
}

//

  return(
    <>
{films()}
    </>
  )
}
export default Details
