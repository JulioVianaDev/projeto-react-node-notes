import React from 'react'
import { Container, Image } from 'react-bootstrap'


function About() {
  return (
    <>
        <Container fluid className="banner">
            <div className='justify-content-center'>
                <h1 className='white-text'>Lucas</h1>
            </div>
            <div className="justify-content-center">
                <Image roundedCircle src="$.jpg"/>
            </div>
        </Container>
        <Container>
            <br/>
            <h5>Sobre</h5>
            <p>Olá</p>
            <br/>
        </Container>
    </>
  )
}

export default About