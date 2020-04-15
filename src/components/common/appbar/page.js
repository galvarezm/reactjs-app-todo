import React from 'react';
import './style.css';

// material ui
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const Page = props => {
    return(
        <AppBar position='fixed' elevation={10} style={{height:80,justifyContent:'center'}}>
            <Toolbar variant="dense" style={{flexDirection:'column',textAlign:'center'}}>
                <div style={{display:'flex'}}>
                    <AssignmentTurnedInIcon style={{fontSize:40}} />
                    <Typography variant="h4" color="inherit">:: App for Tasks ::</Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Page;