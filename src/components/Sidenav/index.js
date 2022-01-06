import './style.css';
import NavItemRow from './NavItemRow'

const navItems = [
  {
    name: 'Homepage',
    icon: require('../../assets/sidenav-icons/homepage.png')
  }, {
    name: 'Team sales data',
    icon: require('../../assets/sidenav-icons/salesdata.png')
  }, {
    name: 'Company details',
    icon: require('../../assets/sidenav-icons/companydetails.png')
  }, {
    name: 'Team members',
    icon: require('../../assets/sidenav-icons/teammembers.png')
  }, {
    name: 'Subscription',
    icon: require('../../assets/sidenav-icons/subscription.png')
  }, {
    name: 'Personalize',
    icon: require('../../assets/sidenav-icons/personalize.png')
  }, {
    name: 'Integrations',
    icon: require('../../assets/sidenav-icons/integrations.png')
  }
]

function sidenav() {
  return (
    <div>
      <div className='side-nav'>
        <div className='d-flex logo-container'>
          <img className='logo-img' src={require('../../assets/GetBee-Logo.png')} />
        </div>
        <h1 className='sidenav-row-header-text'>ADMIN</h1>
        <ul className='side-nav-btn-list'>
          {navItems.map((item, i) => <NavItemRow key={i} name={item.name} icon={item.icon} />)}
        </ul>
        <h1 className='sidenav-row-header-text'>EXPERT</h1>
        <ul className='side-nav-btn-list'>
          <NavItemRow name={'My sales data'} icon={require('../../assets/sidenav-icons/salesdata.png')} />
        </ul>

      </div>

    </div>
  );
}

export default sidenav;
