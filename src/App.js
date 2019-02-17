import React, { Component } from 'react';
import './App.css';
import NewsChannelsList from './containers/newsChannelsList';
import {Route, Switch, Link} from 'react-router-dom';
import NewsList from './containers/newsList';
import SearchBar from './components/searchBar';
import SearchResult from './containers/searchResult'

class App extends Component {
    state = {
      searchInput: '',
        suggestions: []
    };

    // handleSearchChange = (e) => {
    //     this.setState({
    //         searchInput: e.target.value
    //     });
    // };
    // handleClick = () => {
    //     if(this.state.searchInput.length < 5){
    //         alert('enter atleast 5 characters')
    //     }else {
    //         this.props.history.push({pathname: '/search'+'/'+this.state.searchInput})
    //     }
    // };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={NewsChannelsList}/>
                    <Route exact path='/channel/:id' component={NewsList}/>
                    <Route exact path='/search/:value' component={SearchResult}/>
                </Switch>
            </div>
        );
    }
}

export default App;
