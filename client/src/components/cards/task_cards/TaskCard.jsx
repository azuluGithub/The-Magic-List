//npm packages
import { useState } from 'react';

//local import
import "./TaskCard.css";
import EditTaskModal from '.././../modals/edit_task_modal/EditTaskModal';
import EditTaskForm from '../../forms/edit_task_form/EditTaskForm';

/**
 * #CARD 
 */

const TaskCard = ({ task, tasks, setTasks, handleDelete }) => {
    const [ openModal, setOpenModal ] = useState(false);

    const closeModal = () => setOpenModal(false);

    /**
     * #onDragStart: WHEN THE DAGGING BEGINS SET DATA TO BE TRANSFERED
     */
    const sendData = (e, name) => e.dataTransfer.setData('name', name);

    /**
     * #draggable: ALLOWS THE CARD TO BE DRAGGED
     */
    return (
        <div className='task-card' draggable onDragStart={(e) => sendData(e, task.name)}>
            <div className='task-content-box'>
                <div className='task-title-box'>
                    <p className="task-title">{ task.name }</p>
                </div>
                <div className='task-actions'>
                    <button className="task-edit-btn"  onClick={() => setOpenModal(true)}>Edit</button>
                    <button className="task-delete-btn" onClick={() => handleDelete(task.name)}>Delete</button>
                </div>
            </div>
            <div className='task-img-box'>
                <div className='small-img-box'>
                    <img className='small-img' src={'/assets/images/avatar.png'} alt='avatar img' />
                </div>
            </div>
            {
                openModal ? 
                    <EditTaskModal closeModal={closeModal}>
                        <EditTaskForm task={task} tasks={tasks} setTasks={setTasks} closeModal={closeModal}/>
                    </EditTaskModal>
                        : ''
            }
        </div>
    )
}

export default TaskCard;
