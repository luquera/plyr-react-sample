import React, { Component } from 'react';
import { render } from 'react-dom';
import { Plyr } from 'plyr-react';
import 'plyr-react/dist/plyr.css'
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sources: {
        type: 'video',
        sources: [
          {
            src: 'ZPt9dJw1Dbw',
            provider: 'youtube',
          },
        ],
      }
    };
  }

  render() {
    return (
      <div>
        <Plyr sources={this.state.sources} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
