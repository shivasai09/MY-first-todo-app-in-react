import React from 'react';
import Addoption from './Addoption';
import Options from './Options';
import OptionDisplay from './OptionDisplay';
import Header from './Header';

export default class Indecision extends React.Component
{
    state={
        tasks:[]
    };
  
    componentDidMount()
    {
        try{
            const json=localStorage.getItem('tasks');
            const tasks=JSON.parse(json)
        if(tasks)
        {
            this.setState(()=>({ tasks }))
        }
        console.log("yes dmouxssznted");

        }
        catch(e)
        {
            
        }
        
    }
    componentDidUpdate(prevPorps,prevState)
    {
        
            let json=JSON.stringify(this.state.tasks);
            localStorage.setItem("tasks",json);
            console.log("updddsasscted")
        
        
    }
    pickone=()=>{
     const index = Math.floor(Math.random()*this.state.tasks.length)
     alert("do the task   "+this.state.tasks[index]);
     
    }
    removeall=()=>{
       this.setState({tasks:[]});
    }
    addone=(val)=>{
        if(!val)
        {
            return " please entre a value";
        }
        else if(this.state.tasks.indexOf(val)>-1)
        {
            
            return "option already exitst pls input the correct option";
        }
    
            this.state.tasks.push(val);
            this.setState({tasks:[...this.state.tasks]});
            console.log("option added");
        
    }
    deleteone=(index)=>{
            this.state.tasks.splice(index,1);
            this.setState({tasks:[...this.state.tasks]})
    }
    render()
    {
        const title='Decision';
        const subtitle='This app will generate a random task from the set of tasks';
       
       return( 
           <div>
               <Header title={title} subtitle={subtitle}/>
               <div className="container" >
                   <div>
                   <Options pickone={this.pickone} removeall={this.removeall} tasks={this.state.tasks.length}/>
                      <OptionDisplay elements={this.state.tasks} deleteone={this.deleteone}/>
                      <Addoption addone={this.addone}/>

                   </div>
                     
               </div>
              
           </div>
       );
    }
}
