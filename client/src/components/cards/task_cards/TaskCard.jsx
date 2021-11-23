//npm packages
import faker from 'faker';

//local import
import "./TaskCard.css";

/**
 * #CARD 
 */

const TaskCard = ({ data }) => {
    
    /**
     * #DELETE
     */
    const handleDelete = () => {}

    /**
     * #EDIT
     */
     const handleEdit = () => {}

    return (
        <div className='task-card'>
            <div className='task-content-box'>
                <div className='task-title-box'>
                    <p className="task-title">Apply for jobs</p>
                </div>
                <div className='task-actions'>
                    <button className="task-edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="task-delete-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div className='task-img-box'>
                <div className='small-img-box'>
                    <img className='small-img' src={faker.image.image()} alt='avatar img' />
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
