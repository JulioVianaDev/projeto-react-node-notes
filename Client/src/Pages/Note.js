import React from 'react'
import { Button, Card } from 'react-bootstrap'


function Note(props) {
  return (
    <> 
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.date}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="danger" onClick={() => { props.deleteNote(props.id) }}>Excluir</Button>
            </Card.Body>
        </Card>
        <br/>
    </>
  )
}

export default Note