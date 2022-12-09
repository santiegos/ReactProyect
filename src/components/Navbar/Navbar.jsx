import CartWidget from "../cartwidget/CartWidget";
import Categorias from "../Categorias/Categorias";


const Navbar = () => {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img className="logo" src="/img/Diseño sin título.png" alt="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Categorias/>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>

  );
}

export default Navbar;

