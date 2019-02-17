import React from 'react';
import classes from './newsChannelTile.module.css'

const newsChannelTile = (props) => {
    return (
            <div className={classes.newsTile} onClick={props.click}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
    )
};

export default newsChannelTile
