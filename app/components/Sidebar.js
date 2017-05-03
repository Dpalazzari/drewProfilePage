var React   = require('react');
var NavLink = require('react-router-dom').NavLink;

function Sidebar () {

  return (
    <ul>
      <li>
        <NavLink exact  activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/projects'>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/futurePlans'>
          Future Plans
        </NavLink>
      </li>
      <li>
        <iframe  className='youtube'  src="https://www.youtube.com/embed/sCxv2daOwjQ?autoplay=1" ></iframe>
      </li>
    </ul>
  )
}

module.exports = Sidebar;
