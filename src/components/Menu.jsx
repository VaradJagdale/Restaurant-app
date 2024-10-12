import React from 'react'
import {data} from "../restApi.json";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Try our most popular dishes, loved by everyone for their unbeatable flavor and quality.</p>
        </div>
        <div className="dishes_container">
           {
            data[0].dishes.map(element=>{
                return(
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h1>{element.title}</h1>
                        <button>{element.category}</button>
                    </div>
                )
            })
           }
        </div>
        </div>
    </section>
  )
}

export default Menu