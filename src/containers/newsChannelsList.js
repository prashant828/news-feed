import React, {Component} from 'react';
import classes from './newsChannelsList.module.css'
import axios from 'axios';
import {connect} from 'react-redux';
import NewsChannelTile from '../components/newsChannelTile';
import {Link} from 'react-router-dom';
import Sort from '../components/sort';
import Aux from '../hoc/aux';
import SearchBar from '../components/searchBar.js'

class newsChannelsList extends Component {
    componentDidMount(){
        if(!this.props.newsChannelsList || this.props.newsChannelsList.length === 0) {
            axios.get('https://newsapi.org/v1/sources')
                .then(channels => {
                    this.props.storeNewsChannelsList(channels.data.sources);
                });
        }
    }
    render(){
        let channelsTiles = this.props.newsChannelsList.map((singleChannel, index) => {
            return(<Link to={'channel/'+singleChannel.id} key={singleChannel.id}>
                <NewsChannelTile
                    title = {singleChannel.name}
                    desc = {singleChannel.description}
                    link = {singleChannel.url}
                />
            </Link>);
        });
        return (
            <Aux>
                <SearchBar {...this.props}/>
                <div className={classes.newsList}>
                    <Sort click={this.props.sortByName} label='Sort by Source'/>
                    {channelsTiles}
                </div>
            </Aux>

        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.channel)
    return {
        newsChannelsList: state.channel.newsChannelsList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        storeNewsChannelsList: (newsChannelsList) => dispatch({type: 'STORE_NEWS_CHANNELS_LIST', payload: {channels: newsChannelsList}}),
        sortByName: ()=>dispatch({type: 'SORT_BY_NAME'}),
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(newsChannelsList);
