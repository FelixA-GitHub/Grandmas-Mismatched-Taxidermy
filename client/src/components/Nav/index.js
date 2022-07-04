import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Avatar from '../../assets/avatar/Grandma.PNG';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap/dist/js/bootstrap.min.js";


function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    // Navbar
    <nav className="navbar navbar-expand-lg sticky-top px-3">
      {/* Container wrapper */}
      <div className='container-fluid'>
        {/* Navbar brand */}
        <a className="navbar-brand" href="/">
        <img src={Avatar} alt="Rockin Grandma" width="30" height="55" className='avatar'/>
        </a>
        <h6 className='justify-content-center mt-2'>Grandma's Mismatched Taxidermy</h6>
        {/* Toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto mt-2 mt-lg-0">
            {pages.map((Page) => (
              <div
                className={`nav-item nav-link ${currentPage.name === Page.name && 'navActive'}`} key={Page.name}
              >
                {/* <Button> */}
                  <span
                    onClick={() => setCurrentPage(Page)}
                  >
                    {capitalizeFirstLetter(Page.name)}
                  </span>
                {/* </Button> */}
              </div>
            ))}
          </div>
          {/* Right items */}
          {/* <div className="d-flex align-items-center">
            <button type="button" className="btn btn-link px-0 me-2">
              Login
            </button>
          </div> */}
        </div>
      </div>
    </nav>

  );
}

export default Nav;
