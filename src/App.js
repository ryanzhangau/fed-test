import React, { Component } from 'react';
import Card from './component/Card';
import './style/app.scss';

class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    fetch('http://prototype.carter-dev.net/fed-test/items.json')
      .then(res => res.json())
      .then(data => this.setState({ cards: data.items }));
  }

  list = () => {
    return this.state.cards.map((card, index) => <Card card={card} key={index} />);
  };

  render() {
    return <div className='FedTest-app'>{this.list()}</div>;
  }
}

export default App;
