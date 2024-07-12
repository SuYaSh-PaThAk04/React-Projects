import React from 'react';
import ReactDOM from 'react-dom/client';
import Dataj from 'data.js'
import Nav from './nav.jsx'
import Cards from './templete.js'
import Foot from './footer.jsx'
export default function Okay(){
    
    const Hero = Dataj.map(item=>{
        return(
            <Cards
            key={item.id}
            img={item.imageUrl}
            Title={item.title}
            location={item.location}
            startd={item.startDate}
            endd={item.endDate}
            description={item.description}
            />
        )
    })
    
    
    return(
        
        <>
        <Nav />
        {Hero}
        <Foot />
        </>
        
    )
    
}