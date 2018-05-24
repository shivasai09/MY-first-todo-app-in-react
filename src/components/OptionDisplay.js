import React from 'react';

export default class OptionDisplay extends React.Component{
   
    renderValue=(item, index)=>{
        return   <li key={index}  className="padd">{item }<button className="remove" onClick={() => {this.props.deleteone(index)}}>remove</button></li>;
        
    }
    render()
    {
        
        return(
           <div className=".list-container">
                <ul className="msg">
              {this.props.elements.map(this.renderValue)}
            </ul>
           </div>
        );
    }
}