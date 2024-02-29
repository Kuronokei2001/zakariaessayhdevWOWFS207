import React, { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
export default function Add(props) {
    const [newGuy,setNewGuy]=useState({
    nom : '',
    prenom : '',
    ville : "sale",
    fil : '',
    photo: ''
    })

    const nameREF = useRef();
    const prenomREF = useRef();
    const villeREF = useRef();
    const filREF = useRef();
    const pictureREF = useRef();

    
    const addNew=(e)=>{
        e.preventDefault()
        const nameR = nameREF.current.value;
        const prenomR = prenomREF.current.value;
        const villeR = villeREF.current.value;
        const filR = filREF.current.value;
        const pictureR = pictureREF.current.value;

        const info= {nameR,prenomR,villeR,filR,pictureR}
        // const info = { name: nameR, prenom: prenomR, ville: villeR, fil: filR, picture: pictureR };
        
        setNewGuy(info)
        props.setList((prev)=>[...prev,newGuy])
        
        setNewGuy({
            nom : '',
            prenom : '',
            ville : "sale",
            fil : '',
            photo : ''
        })
    }
  return (
    <>
    <form onSubmit={addNew}>
    <div className="form mb-3">
    <label>Name : </label>
        <input
            type="text"
            className="form-control"
            ref={nameREF}
            placeholder=""
        />
    <label>Last Name : </label>
        <input
            type="text"
            className="form-control"
            ref={prenomREF}
            placeholder=""
        />
    <label>City : </label>
        <select ref={villeREF}>
            <option value="sale">sale</option>
            <option value="temara">temara</option>
            <option value="maknes">maknes</option>

        </select>
    <label>Major : </label>
        <input
            type="text"
            className="form-control"
            ref={filREF}
            placeholder=""
        /> 
    </div>
    <label>Picture : </label>
        <input
            type="file"
            className="form-control"
            ref={pictureREF}
            placeholder=""
        />
        <button
            type="Submit"
            className="btn btn-primary"
            
        >
            Submit
        </button>
        <button type="reset">reset</button>
        
    </form>  
    </>
  )
}
