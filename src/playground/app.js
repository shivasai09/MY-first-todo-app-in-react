class Indecision extends React.Component
{
    constructor(props)
    {
        super(props);
        this.pickone=this.pickone.bind(this);
        this.removeall=this.removeall.bind(this);
        this.addone=this.addone.bind(this);
        this.deleteone=this.deleteone.bind(this);
        this.state={
         tasks:[]
        };
    }
    pickone()
    {
     const index = Math.floor(Math.random()*this.state.tasks.length)
     alert("do the task"+this.state.tasks[index]);
    }
    removeall()
    {
       this.setState({tasks:[]});
    }
    addone(val)
    {
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
    deleteone(index)
    {
            this.state.tasks.splice(index,1);
            this.setState({tasks:[...this.state.tasks]})
    }
    render()
    {
        const title='Decision';
        const subtitle='this app will generate a random task from the set of tasks';
       
       return( 
           <div>
               <Header title={title} subtitle={subtitle}/>
               
               <Options pickone={this.pickone} removeall={this.removeall} tasks={this.state.tasks.length}/>
               <OptionDisplay elements={this.state.tasks} deleteone={this.deleteone}/>
               <Addoption addone={this.addone}/>
           </div>
       );
    }
}


class Header extends React.Component
{
     render()
     {
        return ( 
            <div>       
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
            </div>
        );
     }
 }

class OptionDisplay extends React.Component{
    constructor(props)
    {
        super(props)
        this.renderValue=this.renderValue.bind(this);
    }
    renderValue(item, index){
        return <li key={index}>{item }<button onClick={() => {this.props.deleteone(index)}}>remove</button></li>; 
    }
    render()
    {
        return(
           <div>
                <ul>
              {this.props.elements.map(this.renderValue)}
            </ul>
           </div>
        );
    }
}

const Options = (props) => {
    return(
        <div>
            <button disabled={props.tasks===0} onClick={props.pickone}>what should i do?</button>
            <button onClick={props.removeall}>remove all options</button>
        </div>
    );
}

class Addoption extends React.Component{
    constructor(props)
    {
        super(props);
        this.addone=this.addone.bind(this);
        this.state={
            msg:undefined
        };
  }
    addone(e)
    {
        e.preventDefault();
        const val=e.target.task.value.trim();
        e.target.task.value='';
       const msg= this.props.addone(val);
       this.setState({msg:msg});
      
    }
    render()
    {
        return (
            <div>
                {this.state.msg&&<p>{this.state.msg}</p>}
                
                <form onSubmit={this.addone}>
                <input type="text" name="task" autoComplete="off"/>
                <input type="submit" />
                </form>
            </div>
        );
    }
}
 
ReactDOM.render(<Indecision />,document.getElementById('app'));