import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  // { to: '/herramientas', label: 'Herramientas' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <NavLink to="/" className="brand">
          <span>Juana Matuz</span>
          <small>Abogada civil</small>
        </NavLink>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
