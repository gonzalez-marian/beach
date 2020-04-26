import React from "react";
import "../styles/App.scss";
import beach from "../services/api.json";
import BeachList from "./BeachList";
import Header from "./Header";
import BeachSearch from "./BeachSearch";
import BeachSelected from "./BeachSelected";
import BeachInfo from "./BeachInfo";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.renderBeaches = this.renderBeaches.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      beach: beach,
      value: "",
    };
  }
  handleChange(value) {
    this.setState({
      value: value,
    });
  }
  renderBeaches(props) {
    const beachId = parseInt(props.match.params.id);
    const beaches = this.state.beach.find((beach) => beach.attributes.OBJECTID === beachId);
    console.log(beaches);
    return <BeachInfo beaches={beaches} />;
  }

  handleSelected(event) {
    this.setState({ value: event.target.value });
  }
  // handleSubmit(event) {
  //   alert("Beach: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="App">
        <div class="sky"></div>
        <div class="sand"></div>
        <div class="wet-sand"></div>
        <div class="sea">
          <div class="seafoam"></div>
        </div>
        <div class="sand-front"></div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <BeachSearch handleChange={this.handleChange} />
            <BeachSelected handleSelected={this.handleSelected} allBeaches={this.state.beach} />
            <BeachList allBeaches={this.state.beach} value={this.state.value} />
          </Route>
          <Route path="/beach/:id" render={this.renderBeaches} />
        </Switch>
      </div>
    );
  }
}

export default App;
