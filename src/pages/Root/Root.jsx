import React from 'react'
import NavBar from '../../componenets/Header/NavBar'
import { Outlet } from 'react-router-dom'
const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}