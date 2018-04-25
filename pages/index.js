import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../components/App';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      redirectUrl: `${domainURI}merchant_payment_methods`,
      transitionId: "ZkkL5nCXsHk8tcHjJ"
    });

  }

  render() {
    const { loading } = this.state;
    const btnText = loading ? (<img width="20" src="static/loading.gif"/>) : '';
    return (
      <App>
        <div className="main-body">

          <div className="container">
            <div className="row">
              <iframe
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/339d784c-9ea6-405d-9395-bfad211d81de">
              </iframe>
            </div>
          </div>
          <style>{`
            .main-body {
              min-height: 80vh;
              padding: 20px;
            }
            .container {
              margin-bottom: 20px;
            }
            .rsc {
              margin: 50px auto
            }
          `}</style>
        </div>
      </App>
    );
  }
}

export default Home
