import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import Note from './Note';
import axios from 'axios';

function Notes() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [note,setNote] = useState({title: '',description: '',date:''})
  const [notesList, setNotesList] = useState([]);


  function GetAll(){
    axios.get('http://localhost:3001/notes')
      .then(res=>{
        setNotesList(res.data);
      })
  }

  useEffect(() => {
    GetAll();
  },[]);

  function saveNotes() {
    let {description,title,date} = note
    console.log(description,title,date)
    axios.post('http://localhost:3001/notes', {description,title,date})
      .then(res => {
        console.log(res.data)
        setNotesList([...notesList,res.data])
        setShow(false);
      })
      .catch(err => console.log(err))
  }
  function deleteNote(id){
    axios.delete(`http://localhost:3001/notes/${id}`)
      .then(res=>{
        console.log(res.data)
        setNotesList(notesList.filter( n => n.id !== id ))
      })
      .catch(erro=>console.log(erro))
  }
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className='display-4'>Minhas Anotações</h1>
        <p className="lead">Usa a janela para adicionar anotações!</p>
        <Button variant="dark" onClick={handleShow}>Criar</Button>
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item =>  <Note 
                                  title={item.title} 
                                  date={item.date} 
                                  description={item.description} 
                                  id={item.id}
                                  key={item.id}
                                  deleteNote={deleteNote}
                                />
                      )}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <InputGroup>
              <InputGroup.Text>Data</InputGroup.Text>
            <input 
              onChange={(e)=>setNote({...note,data: e.target.value})} 
              type="date" 
              id="inputDate"
            />
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text>Titulo</InputGroup.Text>
            <FormControl 
              onChange={(e)=>setNote({...note,title: e.target.value})}  
              id="inputTitle"
            />
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text>Descrição</InputGroup.Text>
            <FormControl 
              id="inputDescription"
              onChange={(e)=>setNote({...note,description: e.target.value})} 
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancelar</Button>
          <Button variant="primary" onClick={() => saveNotes()}>Adicionar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Notes