import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay';
import Spinner from './Components/Spinner';
import './index.css';

class App extends React.Component {
    // Just a JS method, not specific to React.
    // It's going to be automatically called with the props object.
    constructor(props) {
        // REQUIRED when using constructor
        super(props);
        // This is our state object
        /* This will eventually contain some different 
            properties that are relevant to our app. 
        */
        this.state = { latitude: null, error: null, isLoading: true };
    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position)  => {
                // to update our state object, we call setState
                this.setState({ latitude: position.coords.latitude });
            },
            (err)       => {
                this.setState({ error:err.message })
            }
        );

        setTimeout(() => {
            this.setState({ isLoading:false});
        },3000);
    }

    // A required React method when using class-based component.
    render() {
        return (
            <div className="container">
                { this.state.isLoading ? <Spinner message="Please accept location request" /> : <SeasonDisplay latitude={ this.state.latitude } error={ this.state.error } />}
            </div>
        );
    };
};
ReactDOM.render(<App />, document.querySelector('#root'));
