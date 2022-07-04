import React from 'react';

function Header(props) {

    return (
        <header className=''>
            {props.children}
        </header>
    );
};

export default Header;