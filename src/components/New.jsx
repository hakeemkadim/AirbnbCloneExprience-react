import React from "react"

export default function New(props) {
   
    
    return (
        <>
        <div className="news">
        <img 
                src={`../images/${props.coverImg}`} 
                className="news--image" 
            />
        <p className="news--title">{props.title}</p>
        <h1 className="news--description">{props.description}</h1>
        <div className="news--badge">{props.button}</div>


            
        </div>
        </>
        
    )
}