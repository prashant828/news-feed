import React, {Component} from 'react';
import classes from './newsChannelsList.module.css'
import axios from 'axios';
import {connect} from 'react-redux';
import NewsChannelTile from '../components/newsChannelTile';
import {Link} from 'react-router-dom';
import Sort from '../components/sort';
import Aux from '../hoc/aux';
import SearchBar from '../components/searchBar.js'

let labels = {
    SORT_BY_SOURCE: 'Sort by source',
    A_TO_Z: 'A To Z',
    Z_TO_A: 'Z To A'
};

class newsChannelsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortBySource: labels.SORT_BY_SOURCE,
        };
    }
    componentDidMount(){
        if(!this.props.newsChannelsList || this.props.newsChannelsList.length === 0) {
            axios.get('https://newsapi.org/v1/sources')
                .then(channels => {
                    this.props.storeNewsChannelsList(channels.data.sources);
                });
        }
    }
    sortOnClick = () => {
        if(this.state.sortBySource === labels.SORT_BY_SOURCE){
            this.setState({
                sortBySource: labels.A_TO_Z
            }, () => {
                this.props.sortBySource(this.props.newsChannelsList, labels.A_TO_Z);
            });
        } else if (this.state.sortBySource === labels.A_TO_Z) {
            this.setState({
                sortBySource: labels.Z_TO_A
            }, () => {
                this.props.sortBySource(this.props.newsChannelsList, labels.Z_TO_A);
            });
        } else if (this.state.sortBySource === labels.Z_TO_A) {
            this.setState({
                sortBySource: labels.A_TO_Z
            }, () => {
                this.props.sortBySource(this.props.newsChannelsList, labels.A_TO_Z);
            });
        }
    };
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
                    <Sort click={this.sortOnClick} label={this.state.sortBySource}/>
                    {channelsTiles}
                </div>
            </Aux>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        newsChannelsList: state.channel.newsChannelsList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        storeNewsChannelsList: (newsChannelsList) => dispatch({type: 'STORE_NEWS_CHANNELS_LIST', payload: {channels: newsChannelsList}}),
        sortBySource: (list, sorting) => {
            if(sorting === labels.A_TO_Z){
                list = list.sort((a,b) => {
                    if(a.name < b.name){
                        return 1;
                    } else if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                });
            } else if (sorting === labels.Z_TO_A) {
                list = list.sort((a,b) => {
                    if(a.name < b.name){
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            }
            return dispatch({type: 'SORT_BY_SOURCE', list: list});
        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(newsChannelsList);
