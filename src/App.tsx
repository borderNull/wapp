import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Autosuggest from 'react-autosuggest';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';

import './App.css';

// const App: React.FC = () => {
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    console.log('newValue', newValue);
    this.setState({value: newValue});
  }

  onSuggestionFetchRequested = ({ value }) => {

    console.log('onSugFetch value', value);
    this.setState({suggestions: getSuggestions(value)});
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reloadsss.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Container fixed component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
          {/* <Box component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} > */}
          <
            <Button  variant="contained" color="primary">Push me</Button>
          {/* </Box> */}
        </Container>
      </div>
    );
  }
}

export default App;
