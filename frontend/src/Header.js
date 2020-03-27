import React from 'react';  // we must always import React

// Components can keep State - user input, info from external APIs

export default function Header({children}) {
    return (  // multi line HTML need to be in between parenthesis
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// this is necessary if the function itself does not have a export default
// export default Header;  