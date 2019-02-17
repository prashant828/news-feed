import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../components/searchBar';
import classes from './newsList.module.css';
import NewsTile from '../components/newsTile';
import axios from 'axios';
import Aux from '../hoc/aux'

class searchResult extends Component{

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=`'+this.props.match.params.value+'`')
            .then(res=>this.props.storeResult(res.data.articles))
    }

    render(){
        let newsTiles;
        if(this.props.searchedList.length > 0){
            newsTiles = this.props.searchedList.map(singleNews => <a
                href={singleNews.url}
                target='_blank'
                key={singleNews.url}>
                <NewsTile
                    imgLink={singleNews.urlToImage}
                    desc={singleNews.title}
                />
            </a>);
        }

        return (
            <Aux>
                <SearchBar {...this.props}/>
                <div className={classes.newsList}>
                    {newsTiles}
                </div>
            </Aux>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        searchedList: state.searchResult.searchResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeResult: (searchList) => dispatch({type: 'STORE_SEARCH_RESULT', payload: searchList})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(searchResult)
