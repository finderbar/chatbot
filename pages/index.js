import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

import App from '../components/App';


const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];


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
            dfdasfdsafdsaf
              <ChatBot
                steps={steps}
                />
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
