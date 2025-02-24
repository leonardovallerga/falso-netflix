import { Link } from "react-router-dom";
import { SECCIONES } from "../../utils/constants";

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
      <h2 className='container-fluid'>
        <Link className='navbar-brand text-danger' to='/'>
          Falso Netflix
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarDropdown'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Inicio
            </Link>
            {SECCIONES.map((seccion, i) => {
              const link = "/" + seccion.toLowerCase();
              return (
                <Link className='nav-link' to={link} key={i}>
                  {seccion}
                </Link>
              );
            })}
          </div>
        </div>
        <button className='btn btn-dark'>Logout</button>
      </h2>
    </nav>
  );
};

export default NavBar;

//<Link className="nav-link" to='/peliculas'>Peliculas</Link>
//<Link className="nav-link" to='/series'>Series</Link>
