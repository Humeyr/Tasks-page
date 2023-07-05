import { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import AddModal from '../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../app/crudSlice';


const CrudPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.crudReducer);
  const [editTask, setEditTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setEditTask(null);
    setShowModal(false);
  };
  return (
    <div className='m-2'>
      <AddModal show={showModal} 
       handleClose={handleClose}
       editTask={editTask} />
      <Button  className='my-3' variant='primary'
        onClick={() => setShowModal(true)}>Add a New Task
      </Button>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Task</th>
          <th>Sender</th>
          <th>To</th>
          <th>Date</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {state.tasks.map((task) => (
          <tr>
            <td>{task.id} </td>
            <td>{task.title} </td>
            <td>{task.author} </td>
            <td>{task.assigned_to} </td>
            <td>{task.end_date} </td>
            <td>
              <ButtonGroup>
                <Button 
                 onClick={() => dispatch(removeTask(task.id))} 
                 variant='danger'>Delete</Button>
                <Button 
                 onClick={() => {
                  setEditTask(task);
                  setShowModal(true);
                  dispatch(editTask(task.id))}} 
                 variant='success'>Edit</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    </div>
  )
}

export default CrudPage
