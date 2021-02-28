import React from 'react'
import {Card, Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import Details from "./Details"
//https://api.themoviedb.org/3/movie/popular?api_key=dbf37ea7b58a822de9ec5701370f95af&language=en-US







function ListMovies()
{
  const [list,setList] = React.useState()
  let history = useHistory();

    function redirect (id){
      history.push(`/detail/${id}`)
    }
  React.useEffect(
      ()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=dbf37ea7b58a822de9ec5701370f95af&language=en-US")
          .then(response => response.json())
          .then(result => setList(result.results))
          .catch(error => console.log('error', error));

      },[]
    );
    console.log(list)

const films = () => {
if(list){
  return (list.map( item => (
        <Card>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <Card.Body>
            <Card.Title><h3>{item.original_title}</h3></Card.Title>
            <Card.Text>
              {item.overview}
            </Card.Text>
            <ul className="text-left">
                <li><span>Popularity:</span>{item.popularity}</li>
                <li><span>Vote: </span>{item.vote_average}</li>
                <li><span>Release Date:</span> {item.release_date} </li>
            </ul>

            <Button variant="primary" onClick={() => redirect(item.id)}>DETAILS</Button>

          </Card.Body>
        </Card>
      )
    )
  )
}
}

/*
movieData.map(item =>
            (
                <Col className="col-md-3 col-sm-12 mt-5">
                <Card className="card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text >
                            {item.overview}
                        </Card.Text>
                        <hr />
                        <ul className="text-left">
                            <li><span>Popularity:</span>{item.popularity}</li>
                            <li><span>Vote: </span>{item.vote_average}</li>
                            <li><span>Release Date:</span> {item.release_date} </li>
                        </ul>
                    </Card.Body>

                </Card>
            </Col>
            )
        )
*/

  return(
    <>
    <h1>RECENTLY POPULAR FILMS</h1>
    {films()}
    </>
  )
}
export default ListMovies
