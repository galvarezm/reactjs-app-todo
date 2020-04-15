import React from 'react';
import './style.css';

// material ui
import Container from '@material-ui/core/Container';

// components
import AppBar from '../../common/appbar';
import FilterTask from '../../common/filter-task';
import ListTask from '../../common/list-task';
import BottomBar from '../../common/bottombar';

const Page = props => {
    return(
        <Container maxWidth="sm">
            <AppBar />
            <FilterTask />
            <ListTask />
            <BottomBar />
        </Container>
    )
}

export default Page;