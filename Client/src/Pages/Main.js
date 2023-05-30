import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom'
import About from './About'
import Notes from './Notes'

function Main() {

  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <Navbar.Brand>Web Lucas</Navbar.Brand>
        <nav>
          <Link to="/about">Sobre</Link>
          <Link to="/notes">Anotações</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/noticias">Notícias</Link>
        </nav>
        
      </Navbar>
    </>
  )
}

export default Main