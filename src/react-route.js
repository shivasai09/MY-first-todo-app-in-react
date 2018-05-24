import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route,Switch,Link,NavLink} from 'react-router-dom';

const Mainpage=()=>(
    <div>
        this is the main page
        
    </div>
);

const Editpage=()=>{
    return (<div>
        we come here to edit the page
    </div>)
};

const Createnewpage=()=>{
         return (<div>
             we come here to edit the new page
             </div>)
};

const PageNotFound=()=>{
    return(<div>
        404!<Link to="/">go to home</Link>
    </div>)
};
const Header=()=>(
    <div><h1>Header</h1>
    
    <NavLink to="/editpage" activeClassName="is-active">go to edit page</NavLink>
   <NavLink to="/createpage" activeClassName="is-active">go to create page</NavLink>
</div>);

const routes=(
    <BrowserRouter>
    <div>
        <Header />
    <Switch>
        <Route path="/" component={Mainpage} exact={true} />
        <Route path="/editpage" component={Editpage}/>
        <Route path="/createpage" component={Createnewpage} />
        <Route component={PageNotFound} />
    </Switch>
    </div>
    </BrowserRouter>
);
ReactDOM.render(routes,document.getElementById('app')); 