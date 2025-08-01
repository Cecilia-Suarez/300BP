const navbarLinks = [
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Eventos', href: '#eventos' },
];

const NavbarItems = () => (
  <>
    {navbarLinks.map(link => (
      <li key={link.label} className="w-full lg:w-auto">
        <a
          href={link.href}
          className="block w-full lg:w-auto text-right lg:text-left"
        >
          {link.label}
        </a>
      </li>
    ))}
  </>
);


const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarItems/>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">ES</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M12 12h8M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow right-0">
            <NavbarItems />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header