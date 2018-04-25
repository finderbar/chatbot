import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../components/App';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  render() {
    const { loading } = this.state;
    const btnText = loading ? (<img width="20" src="static/loading.gif"/>) : '';
    return (
      <App>
        <div className="main-body">
          <div className="getbot">
            <iframe
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/339d784c-9ea6-405d-9395-bfad211d81de"
            />
          </div>
          <style>{`
            .main-body {
              min-height: 100vh;
              display: flex;
            }
            .getbot {
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </div>
      </App>
    );
  }
}

export default Home
