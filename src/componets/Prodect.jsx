import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Prodect = () => {
    const [prodect, setprodect] = useState([])
    useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then((res)=> res.json())
  .then((res)=>{
    setprodect(res.products)
  })
    },[])
  return ( 
    <div>
    <span> tranding prodect</span>
      <div className='prodect-grid'>
        {prodect?.map((prodect)=>{
            return <div className='prodect-card' key={prodect.id}>
                <Link to={`/prodects/${prodect.id}`}>
                <img src={prodect.thumbnail} alt={prodect.title}/>
                <h3>{prodect.title}</h3>
                <h3>${prodect.price}</h3>
                </Link>
            </div>
        })}
        </div>
  </div>
)
}

export default Prodect
