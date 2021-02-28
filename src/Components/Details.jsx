import React from 'react'
import { useParams } from 'react-router-dom';



function Details()
{
  const [film,setFilm] = React.useState()
  const  {id}  = useParams();
  const filmm = () => {
    if(id){
        fetch(`https://api.themoviedb.org/3/movie/${Number(id)}?api_key=dbf37ea7b58a822de9ec5701370f95af&language=en-US`)
          .then(response => response.json())
          .then(result => setFilm(result));
        }
}
const aa = film.map(it => (
  <h1>film.title</h1>
))



//

  return(
    <>
{aa}
    </>
  )
}
export default Details
