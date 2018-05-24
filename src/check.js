import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button, Badge,Icon,Card,CardActions,CardTitle,CardText,CardMenu,IconButton} from 'react-mdl'
const Mdl=()=>(
   <div>
    <Badge text="1" overlap>
        <Icon name="account_box" />
    </Badge>
    <Button raised colored>Button</Button>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
   </div>
);
ReactDOM.render(<Mdl />,document.getElementById('app'));