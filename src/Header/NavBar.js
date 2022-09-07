const NavBar = () => {
    return (
      <div className="container">
        <header className="w-100 navbar navcolor py-3 mb-4 border-bottom shadow">
            <div className="container-fluid">
              <button className="navbar-toggler botonnav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              </button>
              <span className="titulonav">Dragon ball API</span>
            </div>
        </header>
    </div>
    );
  };
  
  export default NavBar;