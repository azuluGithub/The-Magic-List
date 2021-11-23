//packages
import { motion } from 'framer-motion';

//local
import './AddTaskModal.css';

/**
 * MODAL USED FOR SUCCESS AND ERROR MESSAGES
 */
const AddTaskModal = ({ children, closeModal }) => {

    return (
        <motion.div className="add-task-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div 
                className="add-task-modal-content"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            >
                <span 
                    onClick={() => closeModal()} 
                    className="add-task-modal-close">&times;
                </span>
                { children }
            </motion.div>
        </motion.div>
    )
}

export default AddTaskModal;

