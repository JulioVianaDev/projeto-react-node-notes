import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import Note from './Note';
import api from '../Api';
import axios from 'axios';

function Notes() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notesList, setNotesList] = useState([]);


  async function GetAll(){
    var res = await api.get('/notes');
    setNotesList(res.data);
  }

  useEffect(() => {
    GetAll();
  }, [0]);

  async function saveNotes() {
    const note = {
      date: document.getElementById('inputDate').value,
      title: document.getElementById('inputTitle').value,
      description: document.getElementById('inputDescription').value,
    }

    axios.post('http://localhost:3000/api/notes', note)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    GetAll();

    setShow(false);

  }

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class='display-4'>Minhas Anotações</h1>
        <p class="lead">Usa a janela para adicionar anotações!</p>
        <Button variant="dark" onClick={handleShow}>Criar</Button>
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item => <Note title={item.title} date={item.date} description={item.description} id={item.id} getAll={GetAll}/>)}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <InputGroup>
              <InputGroup.Text>Data</InputGroup.Text>
            <input type="date" id="inputDate"/>
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text>Titulo</InputGroup.Text>
            <FormControl id="inputTitle"/>
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text>Descrição</InputGroup.Text>
            <FormControl id="inputDescription"/>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={() => {saveNotes()}}>Adicionar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Notes