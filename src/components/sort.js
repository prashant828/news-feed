import React from 'react';
import classes from './sort.module.css';

const sort = (props) => {
    return(
        <div className={classes.sort} onClick={props.click}>Sort by source</div>
    )
};

export default sort;
