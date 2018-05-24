import React from 'react';

const Header=(props)=>{
    return ( <div > 
        <div className="header" >
            <div className="header_container">
        <h1 className="header__title">{props.title}</h1>
        <h3 className="header__subtitle">{props.subtitle}</h3>
         </div>
        </div>
        </div>
    );
}
export default Header;