import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

function Footer() {

  return (
    <MDBFooter className='bg-light text-center text-white'>
      {/* <div className='container p-4 pb-0'>
        <section className='mb-4'> */}
      {/* <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='https://stackoverflow.com/users/17420314/felix'
                role='button'
              >
                <MDBIcon fab icon='stack-overflow' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='https://www.linkedin.com/in/felix-acevedo-b7596520a/'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </a> */}


      {/* </section>
      </div> */}

      <div className='text-center p-4 margin-top' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#4287f5' }}
            href='https://github.com/FelixA-GitHub/Grandmas-Mismatched-Taxidermy.git'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </div>
        <div className='mt-2'>
          © 2022 Felix Acevedo, Ryan Uhl, Ryanne Bennett, Joseph Shaw
        </div>
      </div>

    </MDBFooter>
  );

};



export default Footer;
