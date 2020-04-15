import React from 'react';
import Page from './page';

import { connect } from 'react-redux';

import { setFilterValue } from '../../../redux/actions/filter-action';

class FilterTask extends React.Component{

    constructor(){
        super();
        this.state = null;
    }

    render(){
        return(
            <Page 
                FilterReducer={this.props.FilterReducer}
                TasksReducer={this.props.TasksReducer}
                setFilterValue={this.props.setFilterValue}
            />
        )
    }
    
}

// leer desde estados desde el almacen o store
const mapStateToProps = state => ({
    FilterReducer: state.FilterReducer,
    TasksReducer: state.TasksReducer
});

// enviar acciones que modifican el estado del almacen o store
const mapDispatchToProps = {
    setFilterValue
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTask);