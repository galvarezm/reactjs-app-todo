import React from 'react';

import Page from './page';

import { connect } from 'react-redux';

import { addTask } from '../../../redux/actions/tasks-action';

class ListTask extends React.Component{

    constructor(){
        super();
        this.state = {
            tasks: []
        };
    }

    render(){
        return(
            <Page 
                FilterReducer={this.props.FilterReducer}
                TasksReducer={this.props.TasksReducer}
            />
        )
    }
    
}

// leer desde estados desde el almacen o store
const mapStateToProps = state => ({
    FilterReducer: state.FilterReducer,
    TasksReducer: state.TasksReducer,
});

// enviar acciones que modifican el estado del almacen o store
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);