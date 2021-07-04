import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, isObject, isArray, has } from 'lodash';
import { Button, Row, Col, Card, CardDeck } from 'react-bootstrap';

import actions from '../actions';

class single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionHash: get(props, 'match.params.transaction_hash', '')
    };
  }

  componentDidMount() {
    if (this.state.transactionHash) {
      this.props.getTransaction(this.state.transactionHash);
    }
    if (this.props.error && !this.props.details) {
      alert(`Error: ${this.props.error}`);
    }
  }

  render() {
    const { details, error, blockDetails } = this.props;

    if (error) {
      alert(`Error: ${error}`);
    }

    return (
      <div className="transaction-single-wrapper">
        {details && (
          <>
            <Row>
              <Col>
                <h4>Transaction hash: {this.state.transactionHash}</h4>
                <br />
                <br />
                <Card>
                  <Card.Header>Index: {details.tx_index}</Card.Header>
                  <Card.Body>
                    <Card.Title>Time: {details.time}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <br />
              <br />
              <br />
              {blockDetails && (
                <Button
                  variant="link"
                  onClick={(e) => {
                    window.history.back();
                  }}>
                  Back to Block Transactions
                </Button>
              )}
            </Row>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.transaction.details,
    error: state.transaction.error,
    blockDetails: state.block.details
  };
};

const mapDispatchToProps = {
  getTransaction: actions.getTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(single);
