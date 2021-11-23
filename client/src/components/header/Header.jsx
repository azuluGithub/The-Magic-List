import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-wrapper">
                <span className="header-title selected">Tasks</span>
                <span className="header-title">Notes</span>
                <span className="header-title">Projects</span>
                <span className="header-title">Interviews</span>
                <span className="header-title">Applications</span>
            </div>
        </div>
    )
}

export default Header;