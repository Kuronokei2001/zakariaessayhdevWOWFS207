import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Delete(props) {
  const [nome,setNome]=useState('')

  const navigate=useNavigate()

  
  const Delete=(nome)=>{
    let name=props.list.filter((e) =>e.nom!==nome)
    props.setList(name)
    navigate('/');
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();
    Delete(nome);
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Name:  </label><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
    <input type="Submit" value="Delete" />
    </form>
    </>
  )
}
