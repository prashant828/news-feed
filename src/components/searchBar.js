import React, {Component} from 'react';
import classes from './searchbar.module.css';
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import axios from 'axios';

class searchBar extends Component{
    state = {
        searchInput: '',
    };

    handleSearchChange = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    };
    handleClick = () => {
        if(this.state.searchInput.length < 3){
            alert('enter atleast 3 characters')
        }else {
            axios.get('https://newsapi.org/v2/everything?q=`'+this.state.searchInput+'`')
                .then(res=>{
                    this.props.storeResult(res.data.articles);
                    this.props.history.push({pathname: '/search'+'/'+this.state.searchInput})
                });
        }
    };


    render(){
        return (
            <div className={classes.nav}>
                <div className={classes.inner}>
                    <Link to={'/'}>
                        <span className={classes.home}>Home</span>
                    </Link>
                    <input type="text" className={classes.input} onChange={this.handleSearchChange}/>
                    <div className={classes.btn} onClick={this.handleClick}>Search</div>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        storeResult: (searchList) => dispatch({type: 'STORE_SEARCH_RESULT', payload: searchList})
    }
}

export default connect(null, mapDispatchToProps)(searchBar);
