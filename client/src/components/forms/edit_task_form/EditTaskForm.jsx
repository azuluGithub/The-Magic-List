//npm package
import { useState } from 'react';

//local import
import './EditTaskForm.css';

const EditTaskForm = ({ task, tasks, setTasks, closeModal }) => {

    const [ title, setTitle ] = useState(task.name);

    const handleButtonClick = () => {
        /**
         * #TASK FIELD CANNOT BE EMPTY
         */
        if (title === '') {
            return alert("Please provide a valid task name");
        }

        /**
         * #FIND TASK AND UPDATE IT
         * #SEND UPDATED TASK BACK TO STATE
         */
        const updated = tasks.map((t) => {

            
            if (t.name === task.name) {
                t.name = title.toLowerCase();
            }
            return t;
        });
          
        setTasks(updated);
        closeModal();
    }

    return (
            <div className='task-form-form'>
                <h3 className="task-form-header">
                    EDIT TASK
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

export default EditTaskForm;
