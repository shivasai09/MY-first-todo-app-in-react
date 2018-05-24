class Counter extends React.Component{
    constructor(props)
    {
        super(props);
         this.state={
                val:0
            }
            this.addone=this.addone.bind(this);
            this.minusone=this.minusone.bind(this);
            this.toZero=this.toZero.bind(this); 
        
    }
    addone()
    {
        this.setState((n)=>{
            return {
              val:n.val+1
            };
        });
    }
    minusone()
    {
        this.setState((n)=>{
            return {
                val:n.val-1
            };
        })
    }
    toZero()
    {
        this.setState({val:0})
    }
     render()
     {
        return( 
        <div>
         <h1>count:{this.state.val}</h1>
         <button onClick={this.addone}>+1</button>
         <button onClick={this.minusone}>-1</button>
         <button onClick={this.toZero}>=0</button>
     </div>
     );
     }
 }
 ReactDOM.render( <Counter/ >,document.getElementById('app'))
 
 /* let val=0;
 const addone=()=>{
     val++;
     render();
 }
 const minusone=()=>{
     val--;
     render();
 }
 const toZero=()=>{
     val=0;
     render();
 }
 function render()
 {
     const Count=(
         <div>
             <h1>count:{val}</h1>
             <button onClick={addone}>+1</button>
             <button onClick={minusone}>-1</button>
             <button onClick={toZero}>=0</button>
         </div>
         );
         ReactDOM.render(Count,document.getElementById('app'));
 }
 
 render(); */