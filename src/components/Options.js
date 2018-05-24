import React from 'react';


const Options = (props) => {
    return(
        <div>
            <button className="what-should-i-do-button" disabled={props.tasks===0} onClick={props.pickone}>what should i do?</button>
            <button className="remove-all-button" disabled={props.tasks===0}onClick={props.removeall}>remove all options</button>
        </div>
    );
}
 export default Options;