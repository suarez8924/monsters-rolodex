import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Bruno', id: 'asdasd' },
        { name: 'Tobby', id: '1231dasd' },
        { name: 'Sasha', id: '12334asdasd' },
        { name: 'Rocko', id: 'assdd113' },
      ],
    };
  }
  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <h1>Monsters</h1>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h2>{monster.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
