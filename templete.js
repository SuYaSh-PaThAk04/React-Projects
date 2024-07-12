import React from 'react';
import ReactDOM from 'react-dom/client';



export default function Cards(props){
    return(
        <div className='Card'>
         <div className="left-section">
       <img src={`../image/${props.img}`} className="Cover" />
        <h2 className='Title'>{props.Title}</h2>
        </div>
          <img src="/240_F_749966268_Qvo2iAAjU4YEEyS1GGPJyzjH9MoIb3yW.jpg" className="LocaLogo" />
        <div className='details'>
        <p className='location'>{props.location}</p>
        <div className="Dates">
        <p className='startD'>From:{props.startd}</p>
        <p className='endD'>To: {props.endd}</p>
        </div>
        <p className='description'>{props.description}</p>
        </div>
        </div>
    )
}