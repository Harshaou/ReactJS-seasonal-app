import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import spinnerloading from './spinnerLoading';
import Spinner from './spinnerLoading';

class App extends React.Component{
 state =  {lat: null, errorMessage: '' };

     componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.messege })                
        );
     }


    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage &&  this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Please allow location" />

    } 
    }

ReactDOM.render(<App />, document.querySelector('#root'))




