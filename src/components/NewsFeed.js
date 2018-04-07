import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Preview from './Preview';
import axios from 'axios';
import Post from './Post';

class NewsFeed extends Component {

    constructor() {
        super();
        this.state = { 
            data: {}, 
            loaded: false, 
            error: false 
        };
    }

    componentDidMount() {
        axios
            .get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
            .then(({ data }) => {
                this.setState({ 
                    data: data, 
                    loaded: true, 
                    error: false 
                });
            })
            .catch(() => {
                this.setState({ 
                    loaded: true, 
                    error: true 
                });
            });
    }

    render() {
        if (this.state.error) {
            throw new Error('Error fetching data');
        }
        return (
            <React.Fragment>
                {this.state.loaded && this.state.data.posts.map(post => (
                    <Preview key={post.id} post={post} />
                ))}
                <Route
                    path="/:postId"
                    component={Post}
                />
                {!this.state.loaded && (
                    <div>
                        <br/>
                        <p>Loading...</p>
                    </div>
                )}
            </React.Fragment>


        );
    }
}

const RoutedNewsFeed = props => (
    <Switch>
        <Route
            exact
            path="/"
            component={NewsFeed}
        />
        <Route
            exact
            path="/:postId"
            component={Post}
        />
    </Switch>
);

export default RoutedNewsFeed;
