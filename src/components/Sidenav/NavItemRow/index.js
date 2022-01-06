import '../style.css';

function NavItemRow(props) {
    const { name, icon } = props;
    return (
        <li className='side-nav-btn-row'>
            <img className='sidenav-row-icon' src={icon} />
            <h1 className='sidenav-row-text'>{name}</h1>
        </li>
    );
}

export default NavItemRow;
