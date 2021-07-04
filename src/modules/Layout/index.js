import React, { Component } from 'react';

import Loader from './Loader';

export default function withLayout(Element) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="main-body">
          <Loader>
            <Element {...this.props} />
          </Loader>
        </div>
      );
    }
  };
}
