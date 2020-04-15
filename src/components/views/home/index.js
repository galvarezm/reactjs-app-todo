import React from 'react';
import { withRouter } from 'react-router-dom';

// view
import Page from './page';

class Home extends React.Component {

    constructor(){
        super();
        this.state = null;
    }

    render(){
        return(
            <Page />
        )
    }

}

export default withRouter(Home);