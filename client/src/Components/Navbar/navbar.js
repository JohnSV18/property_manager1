import React from "react"
import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'

export default function MainNavbar() {
    return (
        <Container>
            <Navbar className="bg-light" fixed="top" expand="lg">
                <Container className="nameContainer">
                <Navbar.Brand href="/home">PM1</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#action2">Log In</Nav.Link>
                    <Nav.Link href="#action3"> Scheduled Tours</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </Container>
        
        
        
    )

};