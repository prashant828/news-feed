import React from 'react';
import classes from './newsTile.module.css';
const newsTile = (props) => {
    return(
        <div className={classes.newsTile}>
            <img src={props.imgLink} alt=""/>
            <p>
                {props.desc}
            </p>
        </div>
    )

};

export default newsTile;
