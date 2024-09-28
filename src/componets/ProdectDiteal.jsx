import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdectDiteal = () => {
const {id} = useParams();
const[prodect, setprodect] = useState(null)

useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res)=> res.json())
    .then((res)=>{
      setprodect(res)
    })
      },[])
console.log(prodect)
  return (
    <div>
      <h1>prdect details</h1>
      {prodect? (
    <div style={{display: "flex"}}>

        <img style={{height: 300}} 
        src={prodect.thumbnail} 
        alt={prodect.title}/>

        <h3>${prodect.price}</h3>
        <p>{prodect.description}</p>
    </div>
      ) : <p>Loading..</p> }
    </div>
  )
}

export default ProdectDiteal
