import React from 'react';
import './App.css';
import Output from './Output';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputText: ''
      };

  }

  render() {

    const names = ['Oakley', 'Milla', 'Angela'];


    return (
      <div className="App">
        <header className="App-header">
        <ul>
          {names.map(name => <li>{name}</li>)} {/* arrow function Implicitly Returning*/}
        </ul>
          
          {/* <input 
            onChange={ this._updateInputText }
          />
          <Output 
            text={this.state.inputText}
          /> */}
        </header>
      </div> 
    );
  }
  
  _updateInputText = (e) => {
    console.log(e.target.value);
    // this is a request for a change 
    // that will take place in the future
    this.setState({
      inputText: e.target.value
    }, () => {
      console.log(`State is now ${this.state.inputText}`)
    });
    
  } 
}

export default App;
