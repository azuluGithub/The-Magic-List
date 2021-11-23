//npm package
import { useState } from 'react';

//local import
import './AddTaskForm.css';

const AddTaskForm = ({ tasks, setTasks, closeModal }) => {

    const [ title, setTitle ] = useState('');

    const handleButtonClick = () => {
        if (title === '') {
            return alert("Please provide a valid task name");
        }
        
        /*
        * #ADDING TASK TO THE TASK LIST
        * #PUSH TASK ONLY IF NAMES ARE UNIQUE
        */
        const taskInList = tasks.filter((task) => task.name.toLowerCase() === title.toLowerCase());
  
        if (taskInList[0]) {
          return alert("Task already added");
        }
  
        setTasks([ ...tasks, { name: title.toLowerCase(), status: 'current'} ]);
        setTitle('');
        closeModal();
    }

    return (
            <div className='task-form-form'>
                <h3 className="task-form-header">
                    ADD TASK
                </h3>
                <div className='task-form-label-input-box'>
                    <label className='task-form-label'>Write what you want to do</label>
                    <br/>
                    <input
                        className='task-form-input'
                        type="text" 
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button
                    className='task-form-button'
                    type="submit"
                    onClick={() => handleButtonClick()}
                > SUBMIT </button>
            </div>
    )
}

export default AddTaskForm;
