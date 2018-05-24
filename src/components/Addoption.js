import React from 'react';

export default class Addoption extends React.Component{
    state={
        msg:undefined
    };
    addone=(e)=> {
        e.preventDefault();
        const val=e.target.task.value.trim();
        e.target.task.value='';
       const msg= this.props.addone(val);
       this.setState({ msg });
      
    }
    render()
    {
        return (
            <div>
                {this.state.msg&&<p className="msg">{this.state.msg}</p>}
            
                <form onSubmit={this.addone}>
                    <div >
                    <input className="textbox" type="text" name="task" autoComplete="off"/>
                    <input className="submit-button" type="submit" />
                        </div>
               
                </form>
            </div>
        );
    }
}