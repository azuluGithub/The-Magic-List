//local import
import "./Card.css";

/**
 * #CARD 
 */

const Card = ({ data }) => {
    
    /**
     * #DELETE
     */
    const handleDelete = () => {}

    return (
        <div className='card'>
            <button className="card-btn" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card;
