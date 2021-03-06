import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous';
import NewsFeed from './components/NewsFeed';
import { BrowserRouter as Router, Route } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}


class ErrorDisplay extends Component {
  state = {
      error: false
  }
  componentDidCatch(error, errorInfo) {
      this.setState({ error });
  }
  render() {
      if (this.state.error) {
          return <p>Something went wrong.</p>
      }
      return this.props.children
  }
}

const StyledContainer = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  padding: 0,
  margin: 0,
  fontSize: 20,
});

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Techcrunch NewsFeed</h1>
          </header>
          <StyledContainer>
            <ErrorBoundary>
              <Route
                path="/"
                component={NewsFeed}
              />
            </ErrorBoundary>
          </StyledContainer>
        </div>
      </Router>
    )
  }
}

export default App;