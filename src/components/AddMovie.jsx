import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "../App.css"


function AddMovieModal({ onAddMovie }) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rate: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAdd = () => {
    onAddMovie(newMovie);
    setShow(false);
    setNewMovie({ title: '', description: '', posterUrl: '', rate: 0 });
  };

  return (
    <div>
      <Button className='btn' variant="primary" onClick={handleShow} style={{ margin: '20px' }}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                placeholder="Enter movie title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                placeholder="Enter movie description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="posterUrl"
                value={newMovie.posterUrl}
                onChange={handleChange}
                placeholder="Enter movie poster URL"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                value={newMovie.rate}
                onChange={handleChange}
                placeholder="Enter movie rating (0-5)"
                min="0"
                max="5"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovieModal;
