import React, { useEffect, useState } from 'react'
import '../App.css'

import { Link } from 'react-router-dom'

const Home = () => {
  const [prodect, setprodect] = useState([])
    useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then((res)=> res.json())
  .then((res)=>{
    console.log(res)
    const slice = res.products.slice(0,6)
    setprodect(slice)
  })
    },[])
  return (
    <div>
      <h1>Home page</h1>

      <span> tranding prodect</span>
      <div className='prodect-grid'>
        {prodect.map((prodect)=>{
            return <div className='prodect-card' key={prodect.id}>
                <Link to={`/prodects/${prodect.id}`}>
                <img src={prodect.thumbnail} alt={prodect.title}/>
                <h3>{prodect.title}</h3>
                </Link>
            </div>
        })}
       <Link to='/prodects'>
       <button style={{width: "100%" , padding: 10}}> View All Prodects</button>
       </Link>
      </div>
    </div>
  )
}

export default Home
