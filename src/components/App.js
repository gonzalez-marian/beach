import React from 'react';
import '../styles/App.css';
import beach from '../services/api.json';
import BeachList from './BeachList';
import Header from './Header';
import BeachSearch from './BeachSearch';
import BeachInfo from './BeachInfo';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderBeaches = this.renderBeaches.bind(this);
    this.state = {
      beach: beach,
      value: ''
    }
  }
  handleChange(value) {
    this.setState({
      value: value
    })
  }
  renderBeaches(props) {
    const beachId = parseInt(props.match.params.id);
    const beaches = this.state.beach.find(beach => beach.attributes.OBJECTID === beachId)
    console.log(beaches)
    return <BeachInfo beaches={beaches} />
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <BeachSearch handleChange={this.handleChange} />
            <BeachList allBeaches={this.state.beach} value={this.state.value} />
          </Route>
          <Route path="/beach/:id" render={this.renderBeaches} />
        </Switch>
      </div>
    );
  }
}

export default App;
