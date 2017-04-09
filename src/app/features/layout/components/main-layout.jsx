import React, {Component} from 'react';

class MainLayout extends Component {

    render() {
        return (
          <div>
            <div>
              <h1>Main Layout</h1>
              {this.props.children}
            </div>
          </div>
        );
    }
}

export default MainLayout;
