//npm packages
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useState } from 'react';

//local import
import "./NavBar.css";
import AddTaskModal from './add_task_modal/AddTaskModal';
import AddTaskForm from '../forms/add_task_form/AddTaskForm';

/**
 * DISPLAY LINKS AT THE TOP OF THE PAGE
 */
const NavBar = ({ tasks, setTasks }) => {
    const [ openModal, setOpenModal ] = useState(false);

    const closeModal = () => setOpenModal(false);

    return (
        <div className='nav'>
            <div className='nav-wrapper'>
                <h1 className='nav-logo'>&#271;&#279; Magic List</h1>
                <div className='nav-center-wrapper'>
                    <div className="nav-center-element">
                        <FaSearch />
                    </div>
                    <div className="nav-center-element">
                        <FaPlus onClick={() => setOpenModal(true)}/>
                    </div>
                </div>
                <div className='nav-profile'>
                    <div className='small-img-box'>
                        <img className='small-img' src={'/assets/images/avatar.png'} alt='avatar img' />
                    </div>
                </div>
            </div>
            {
                openModal ? 
                    <AddTaskModal closeModal={closeModal}>
                        <AddTaskForm tasks={tasks} setTasks={setTasks} closeModal={closeModal}/>
                    </AddTaskModal>
                        : ''
            }
        </div>
    )
}

export default NavBar
