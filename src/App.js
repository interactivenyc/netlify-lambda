import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Default Message'
        };
    }

    fetchMessage = async () => {
        console.log('fetchMessage');

        let message = await axios.get('/.netlify/functions/hello');
        console.log('message', message.data);
        this.setState({ message: message.data });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Message: {this.state.message}</p>
                    <button onClick={this.fetchMessage}>Click for Message</button>
                </header>
            </div>
        );
    }
}

export default App;
