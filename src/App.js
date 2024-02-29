// import Contacts from './store';
// import Contact from './Contact';
// import { useEffect,useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   const [contacts, setcontacts] = useState([])


//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setcontacts(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Contacts info={contacts} />} />
//         <Route path="/Contact/:id" element={<Contact info={contacts} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { useState, React } from "react";
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import Home from "./Album/Home";
// import Photos from "./Album/photos";
// import Saved from "./Album/Saved";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// export default function App() {
//   const [myFav, setMyFav] = useState([])
//   const [query, setQuery] = useState('')
//   return (
//     <Routes>
//       <Route path="/" element={<Layout searchQuery={query} setSearchQuery={setQuery} />}>
//         <Route index element={<Home searchQuery={query} />} />
//         <Route path="/saved" element={<Saved myFav={myFav} setList={setMyFav} />} />
//         <Route path="/photos/:id" element={<Photos myFav={myFav} searchQuery={query}  setList={setMyFav} />} />
//       </Route>
//     </Routes>
//   );
// }

// function Layout(props) {
//   const [query, setQuery] = useState('')

//   const searchHandler = (e) => {
//     setQuery(e.target.value);
//     props.setSearchQuery(query);
//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" to='/'>Categories</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to={`/saved`}> My photos</Link>
//               </li>
//             </ul>
//             <div className="d-flex" >
//               <input
//                 className="form-control me-2"
//                 type="text"
//                 placeholder="Search"
//                 aria-label="Search" value={query}
//                 onChange={(e) => searchHandler(e)}

//               />

//             </div>
//           </div>
//         </div>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// import React from 'react'
// import { Route,Outlet,Routes,Link} from 'react-router-dom'
// import Home from './insta/home'
// import Profile from './insta/Profile'
// import OtherUsers from './insta/OtherUsers'
// import "bootstrap/dist/css/bootstrap.min.css";
// export default function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Layout/>} >
//         <Route index element={<Home/>}/>
//         <Route path='/Profile' element={<Profile/>}/>
//         <Route path='/OtherUsers/' element={<OtherUsers/>}/>
//       </Route>
//     </Routes>
    
//   )
// }
// function Layout(){
//   return(
//     <>
//     <ul className="nav nav-tabs" id="navId" role="tablist">
//     <li className="nav-item">
//     <Link className="nav-link active" to={`/`}>Home </Link>

//     </li>
//     <li className="nav-item dropdown">
//     <Link className="nav-link active" to={`/Profile`}>Profile</Link>

//     </li>
//     <li>
//     <Link className="nav-link active" to={`/OtherUsers`}>Other Users </Link>
//     </li>
//   </ul>
//   <div className="tab-content" id="myTabContent">
//     <div
//       className="tab-pane fade show active"
//       id="tab1Id"
//       role="tabpanel"
//     ></div>

//   </div>
//   <Outlet/>
// </>
//   )
// }


import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ListStagiaire from './younessDiscord/listStagiaire';
import AddForm from './younessDiscord/addForm';
import RechercherListStagiaire from './younessDiscord/rechercherListStagiaire';
import Supprimer from './younessDiscord/supprimer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  const listStagaires = [
    { id: 0, nom: 'BOUTKIDA', prenom: 'younes', ville: 'Témara', fil: 'web et full', photo: "https://th.bing.com/th/id/OIP.lLKQgaKeNENJQ6zDmm6HxQHaEK?pid=ImgDet&rs=1" },
    { id: 1, nom: 'GADIR', prenom: 'younesS', ville: 'sock larbaa', fil: 'web back-end', photo: "https://th.bing.com/th/id/R.0369cd78f92d4922180311fcaf2dd189?rik=BehDyWukVk1dLg&riu=http%3A%2F%2Fperformancedrive.com.au%2Fwp-content%2Fuploads%2F2016%2F07%2F2017-Renault-Clio-RS.jpg&ehk=BhiD%2FIVzcCVSTyBwo5%2FFfuesDNowUYxe423y9J4bCxE%3D&risl=&pid=ImgRaw&r=0" },
    { id: 2, nom: 'AZIZI', prenom: 'IMAD', ville: 'SALE', fil: 'web FRONT-END', photo: "https://th.bing.com/th/id/OIP.LQfEXssbetB7wCC5yPB_2gHaEK?pid=ImgDet&rs=1" },
  ];
  const [searchStagiare, setSearch] = useState([]);
  const [listStagiaires, setListStagiaires] = useState(listStagaires);
    return (
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<ListStagiaire listStagiaires={listStagiaires} setListStagiaires={setListStagiaires}/>}/>
          <Route path='/addForm' element={<AddForm setListStagiaires={setListStagiaires}/>}/>
          <Route path='/rechercherListStagiaire/:nom?/:prenom?' element={<RechercherListStagiaire searchStagiare={searchStagiare} setSearch={setSearch}/>}/>
          {/* <Route path='/supprimer' element={<supprimer setSupprimer={setSupprimer}/>}/> */}


        </Route>
      </Routes>
      
    )
  }
  function Layout(){
    return(
      <>
      <ul className="nav nav-tabs" id="navId" role="tablist">
      <li className="nav-item dropdown">
      <Link className="nav-link active" to={`/`}>listStagaires</Link>
  
      </li>
      <li>
      <Link className="nav-link active" to={`/addForm`}>AddForm </Link>
      </li>
      <li>
      <Link className="nav-link active" to={`/rechercherListStagiaire`}>Search </Link>
      </li>
      <li>
      <Link className="nav-link active" to={`/supprimer`}>supprimer </Link>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="tab1Id"
        role="tabpanel"
      ></div>
  
    </div>
    <Outlet/>
  </>
    )
  }


