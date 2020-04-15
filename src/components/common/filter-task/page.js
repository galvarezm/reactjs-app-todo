import React from 'react';

import { Badge, Card, CardContent, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Page = props => {

    // inicializar el estado
    const [itemTabSelected, setValue] = React.useState(props.FilterReducer);

    const onChangeTab = (newPosition) => {
        setValue(newPosition);
        props.setFilterValue(newPosition);
    }
    
    const PendingCount   = props.TasksReducer.filter(item => item.done === false).length;
    const CompletedCount = props.TasksReducer.filter(item => item.done === true).length;
    const AllTasksCount  = props.TasksReducer.length;

    return(
        <Card style={{height:90,marginTop:100,marginBottom:0}} elevation={10}>
            <CardContent>
                <BottomNavigation value={itemTabSelected} showLabels onChange={(event, index) => onChangeTab(index)}>
                    <BottomNavigationAction label="Pending"   icon={<Badge showZero max={999} color="secondary" badgeContent={PendingCount}><RestoreIcon/></Badge>} />
                    <BottomNavigationAction label="Completed" icon={<Badge showZero max={999} color="secondary" badgeContent={CompletedCount}><FavoriteIcon/></Badge>} />
                    <BottomNavigationAction label="All"       icon={<Badge showZero max={999} color="secondary" badgeContent={AllTasksCount}><LocationOnIcon/></Badge>} />
                </BottomNavigation>
            </CardContent>
        </Card>
    )
}

export default Page;