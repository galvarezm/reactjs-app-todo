import React from 'react';

// material ui
import { TextareaAutosize, Divider, Grid, Button, AppBar, Toolbar, Fab, Modal, FormControl, InputLabel, Input, FormHelperText, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Page = props => {

    const [ShowModal, setShowModal] = React.useState(false);

    // focus de los inputs
    const inputRefTaskTitle       = React.useRef(null);
    const inputRefTaskDescription = React.useRef(null);
    const [Field1Empty, setField1Empty] = React.useState(false);
    const [Field2Empty, setField2Empty] = React.useState(false);
    React.useEffect(() => {
        if (Field1Empty)
            inputRefTaskTitle.current.focus();
    }, [Field1Empty]);
    React.useEffect(() => {
        if (Field2Empty)
            inputRefTaskDescription.current.focus();
    }, [Field2Empty]);

    const [state, setState] = React.useState({
        taskTitle:       '',
        taskDescription: '',
        taskDone:        false,
    });

    const onToogleModal = () => {
        setShowModal(!ShowModal);
    }

    const onSubmit = () => {

        if ( state.taskTitle.length<=0 ){
            setField1Empty(true);
            return;
        }
        
        if ( state.taskDescription.length<=0 ){
            setField2Empty(true);
            return;
        }

        props.addTask({
            title:       state.taskTitle,
            description: state.taskDescription,
            done:        state.taskDone
        });

        onToogleModal();

    }

    return(
        <>
            <React.Fragment>
                <AppBar position='fixed' elevation={10} style={{top:'auto',bottom:0,borderRadius:5,borderWidth:1,borderStyle:'solid'}}>
                    <Toolbar variant="dense" style={{flexDirection:'column',textAlign:'center'}}>
                        <div style={{display:'flex',margin: 'auto 0px'}}>
                            <Fab color='secondary' aria-label="add" style={{top:-10}} elevation={10} onClick={onToogleModal}>
                                <AddIcon />
                            </Fab>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
    
            <React.Fragment>
                <Modal
                    open={ShowModal}
                    onClose={onToogleModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div 
                        style={{
                            position:'absolute',
                            top:'20%',
                            left:'22%',
                            width:'50%',
                            height:'auto',
                            backgroundColor:'#FFFFFF',
                            border:'2px solid #808080',
                            padding:30,
                        }}
                    >
                        <h1>New Task</h1>

                        <FormControl margin="dense" fullWidth={true} style={{marginBottom:20}}>
                            <InputLabel htmlFor="txt-task-title">Title</InputLabel>
                            <Input 
                                ref={inputRefTaskTitle}
                                autoFocus
                                id="txt-task-title" 
                                aria-describedby="hlp-task-title" 
                                onChange={(event) => {
                                    setState({ ...state, taskTitle: event.target.value });
                                }}
                                value={state.taskTitle}
                            />
                            <FormHelperText id="hlp-task-title">enter a title for new task</FormHelperText>
                        </FormControl>

                        <FormControl margin="dense" fullWidth={true} style={{marginBottom:20}}>
                            <TextareaAutosize 
                                ref={inputRefTaskDescription}
                                id="txt-task-description" 
                                aria-label="minimum height" 
                                rowsMin={5} 
                                rowsMax={10} 
                                maxLength={150} 
                                placeholder="Description (maximum 3 rows)" 
                                aria-describedby="hlp-task-description" 
                                onChange={(event) => {
                                    setState({ ...state, taskDescription: event.target.value });
                                }}
                                value={state.taskDescription}
                            />
                            <FormHelperText id="hlp-task-description">enter a description for todo</FormHelperText>
                        </FormControl>

                        <FormGroup row style={{marginBottom:20}}>
                            <FormControlLabel
                                label="Done"
                                control={
                                    <Switch
                                        name="task-done"
                                        color="primary"
                                        onChange={(event) => {
                                            setState({ ...state, taskDone: event.target.checked });
                                        }}
                                        checked={state.taskDone}
                                    />
                                }
                            />
                        </FormGroup>

                        <Divider light />

                        <Grid container  style={{marginTop:20}}>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={onSubmit}>Ok</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="secondary" onClick={onToogleModal}>Cancel</Button>
                            </Grid>
                        </Grid>

                    </div>
                </Modal>
            </React.Fragment>
        </>
    )

}

export default Page;