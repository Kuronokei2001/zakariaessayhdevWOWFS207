import React from 'react'
import {  Route, Routes,Link, Outlet } from 'react-router-dom'
import Add from './add'
import Interface from './main'
import Delete from './delete'
import Search from './search'
import "bootstrap/dist/css/bootstrap.min.css";
import json from './json.json'
import { useState } from 'react'
export default function Nav() {
    
  const [list,setList]=useState(json)
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Interface list={list} setList={setList}/>} />
            <Route path='/add' element={<Add list={list} setList={setList}/>}/>
            <Route path='/search' element={<Search list={list} setList={setList}/>}/>
            <Route path='/delete' element={<Delete list={list} setList={setList}/>} />
        </Route>
    </Routes>
    </>
  )
}
function Layout(){
    return(
        <>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
               <Link className='nav-link active' to='/'>Main</Link>
            </li>
            <li className="nav-item" role="presentation">
            <Link className='nav-link active' to='/Add'>Add</Link>
            </li>
            <li className="nav-item" role="presentation">
            <Link className='nav-link active' to='/Search'>Search</Link>
            </li>
            <li className="nav-item" role="presentation">
            <Link className='nav-link active' to='/Delete'>Delete</Link>
            </li>
        </ul>
       <Outlet/>
        </> 
    )
    
}

