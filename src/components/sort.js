import React from 'react';
import classes from './sort.module.css';

const sort = (props) => {
    return(
        <div className={classes.sort} onClick={props.click}>{props.label}</div>
    )
};

export default sort;
