import React from 'react';
import './style.css';

import { Box } from '@material-ui/core';

import ItemTask from '../item-task';

const Page = props => {

    const { FilterReducer, TasksReducer } = props;

    let taskList = [];
    if ( FilterReducer === 2 ){
        taskList = TasksReducer;
    }else{
        taskList = TasksReducer.filter(item => item.done === (FilterReducer === 0 ? false: true));
    }

    return(
        <Box style={{marginTop:20}}>
            {taskList.map( (item, index) => {
                return(
                    <ItemTask 
                        key={index}
                        item={item}
                    />
                )
            })}
        </Box>
    )
}

export default Page;