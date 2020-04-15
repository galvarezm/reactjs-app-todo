import React from 'react';

import { Paper, Grid, Checkbox } from '@material-ui/core';

const Page = props => {
    return(
        <Paper elevation={5} style={{width:'100%',minHeight:100,marginBottom:10}}>
            <Grid container>
                <Grid container>
                    <Grid item xs={2}>
                        <Checkbox
                            checked={props.item.done}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            onChange={(event) => props.onChangeStatusTask(event, props.item.id)}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container style={{marginTop:10}}>
                            <Grid item xs={10}>{props.item.title}</Grid>
                            <Grid item xs={2}>#{props.item.id}</Grid>
                        </Grid>
                        <Grid container style={{marginTop:10}}>
                            <Grid item xs={12}>{props.item.description}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Page;