import React, { useEffect, useState } from 'react'

export default function Interface(props) {
  const [Lista,setLista]=useState(props.list)
  useEffect(()=>{
    setLista(props.list)
  },[props.list])
    
  return (
    <div className="d-flex justify-content-center">
    {Lista.map((S,index)=>(
    <div className="card-group container my-5" key={index}>
      
      <div className="card " >
        <img className="card-img-top" src={S.photo} alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">{S.nom}</h4>
          <p className="card-text">{S.prenom}</p>
          <h4 className="card-title">{S.ville}</h4>
          <p className="card-text">{S.fil}</p>
        </div>
         
        </div>
    </div>
    ))}
    
    </div>
  )
}
