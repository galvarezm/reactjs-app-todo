import React from 'react';

import Page from './page';

import { connect } from 'react-redux';

import { addTask } from '../../../redux/actions/tasks-action';

class BottomBar extends React.Component{

    constructor(){
        super();
        this.state = null;
    }

    render(){
        return(
            <Page
                addTask={this.props.addTask}
            />
        )
    }

}

// leer desde estados desde el almacen o store
const mapStateToProps = state => ({
});

// enviar acciones que modifican el estado del almacen o store
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);