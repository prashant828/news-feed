import React, {Component} from 'react';
import NewsTile from '../components/newsTile';
import {connect} from 'react-redux';
import axios from 'axios';
import classes from './newsList.module.css';
import Sort from '../components/sort';
import Aux from '../hoc/aux';
import SearchBar from '../components/searchBar'

class newsList extends Component{
    componentDidMount(){
        let channelIndex = this.props.newsList.findIndex(singleNews => singleNews.source === this.props.match.params.id);
        if(channelIndex < 0) {
            axios.get('https://newsapi.org/v1/articles?source=' + this.props.match.params.id)
                .then(result => {
                    this.props.storeNews(result.data);
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        let channelIndex = this.props.newsList.findIndex(singleNews => singleNews.source === this.props.match.params.id);
        let newsTiles;
        if (channelIndex < 0) {
            newsTiles = null
        } else {
            newsTiles = this.props.newsList[channelIndex].articles.map(singleNews => <a
                href={singleNews.url}
                target='_blank'
                key={singleNews.url}>
                <NewsTile
                    imgLink={singleNews.urlToImage}
                    desc={singleNews.title}
                />
            </a>);
        }
        return(
            <Aux>
                <SearchBar {...this.props}/>
                <div className={classes.newsList}>
                    <Sort/>
                    {newsTiles}
                </div>
            </Aux>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        storeNews: (newsList)=>dispatch({type: 'STORE_NEWS', payload: newsList})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(newsList);
