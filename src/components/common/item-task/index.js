import React from 'react';

import { connect } from 'react-redux';

import { updateDoneTask } from '../../../redux/actions/tasks-action';

import Page from './page';

class ItemTask extends React.Component {

    constructor(){
        super();
        this.state = null;
    }

    render(){
        return(
            <Page 
                item={this.props.item}
                onChangeStatusTask={this.onChangeStatusTask}
            />
        )
    }

    onChangeStatusTask = (event, taskId) => {
        this.props.updateDoneTask({
            id:   taskId,
            done: event.target.checked
        });
    }

}

// leer desde estados desde el almacen o store
const mapStateToProps = state => ({
    TasksReducer: state.TasksReducer,
});

// enviar acciones que modifican el estado del almacen o store
const mapDispatchToProps = {
    updateDoneTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemTask);