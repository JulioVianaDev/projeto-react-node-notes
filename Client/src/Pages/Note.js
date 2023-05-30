import React from 'react'
import { Button, Card } from 'react-bootstrap'
import api from '../Api';


function Note(props) {

  async function Delete(){
    await api.request({
      url: './notes',
      method: 'delete',
      data: { id: props.id }
    });

    props.getAll();
  }  

  return (
    <> 
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.date}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="danger" onClick={() => { Delete(); }}>Excluir</Button>
            </Card.Body>
        </Card>
        <br/>
    </>
  )
}

export default Note