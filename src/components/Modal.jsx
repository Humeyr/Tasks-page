import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../app/crudSlice';

const AddModal = (prop) => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.crudReducer);
 
  const [formState, setFormState] = useState({});

  useEffect(() => { const stateValue = prop.editTask ? prop.editTask : {
    title: '',
    author: '',
    assigned_to: '',
    end_date: ''
  };
  setFormState(stateValue);}, [prop.show])

  const handleSave = () => {
    dispatch(addTask(formState));
    prop.handleClose();
  };

  if(!setFormState) return 'Loading...'

  return (
    <Modal show={prop.show} 
        onHide={() => prop.handleClose()}>
    <Modal.Header closeButton>
      <Modal.Title>
        {prop.editTask ? 'Edit' : 'Add' }
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" 
         placeholder="Enter a task"
         value={formState.title} 
         onChange = {(e) => setFormState({...formState, title:e.target.value})}
         />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sender</Form.Label>
        <Form.Control type="text" 
         placeholder="Enter a person that sends the task"
         value={formState.author} 
         onChange = {(e) => setFormState({...formState, author:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" 
         placeholder="Enter a person that will fulfill the task" 
         value={formState.assigned_to} 
         onChange = {(e) => setFormState({...formState, assigned_to:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Deliver Date</Form.Label>
        <Form.Control type="date"
        value={formState.end_date} 
         onChange={(e) => setFormState({...formState, end_date:e.target.value})} />
        <Form.Text>Enter a deadline</Form.Text>
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={() => prop.handleClose()}>
        Close
      </Button>
      <Button variant="success" onClick={handleSave}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default AddModal
