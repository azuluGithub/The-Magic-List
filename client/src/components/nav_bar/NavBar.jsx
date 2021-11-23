//npm packages
import faker from 'faker';

//local import
import "./NavBar.css";

/**
 * DISPLAY LINKS AT THE TOP OF THE PAGE
 */
const NavBar = () => {

    return (
        <div className='nav'>
            <div className='nav-wrapper'>
                <h1 className='nav-logo'>&#271;&#279; Magic List</h1>
                <div className='nav-profile'>
                    <div className='small-img-box'>
                        <img className='small-img' src={faker.image.image()} alt='avatar img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
