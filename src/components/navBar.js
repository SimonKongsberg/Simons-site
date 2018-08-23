import React from 'react';

const name = null;

const navBar = ({name}) => {
    const sayHi = (event) => {
        alert (`Hi ${name}`);
    };

    return (
        <div className="content navBar">
            <a
            href="/"
            onClick={sayHi}>Say Hi</a>
        </div>
    )
};

if( name != null ) {
    navBar.propTypes = {
        name: React.propTypes.string.isRequired
    };
}

export default navBar;