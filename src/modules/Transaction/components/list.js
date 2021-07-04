import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get, isObject, isArray } from 'lodash';
import { Button, Row, Col, Card } from 'react-bootstrap';

import actions from '../actions';

function list({ details, error, handleViewTransaction }) {
  /* const [blockHash, setBlockHash] = useState(propBlockHash);

  useEffect(() => {
    if (propBlockHash && blockHash !== propBlockHash) {
      handleChangeHash(propBlockHash);
    }
  }, [propBlockHash]);

  const handleChangeHash = (e) => {
    let value = '';
    if (e && get(e, 'target.value', '')) {
      value = get(e, 'target.value', '');
    } else if (!isObject(e)) {
      value = e;
    }
    setBlockHash(value);
  }; */

  /* const handleSearch = (e) => {
    if (blockHash) {
      console.log('==========handleSearch', blockHash);
      getTransaction(blockHash);
    } else {
      alert('Please enter Block hash value');
    }
  }; */

  //format transactions of single block
  let transactions = [];
  if (details && details.tx && isArray(details.tx)) {
    details.tx.forEach((transaction) => {
      transactions.push(
        <Card key={transaction.hash}>
          <Card.Header as="h5">Index: {transaction.tx_index}</Card.Header>
          <Card.Body>
            <Card.Title>Hash: {transaction.hash}</Card.Title>
            <Button
              variant="primary"
              onClick={(e) => handleViewTransaction(transaction.hash, e)}>
              View Transaction
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }

  return (
    <div className="transaction-list-wrapper">
      {details && (
        <>
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <h4>
                Transactions of Block hash: <strong>{details.hash}</strong>
              </h4>
              <br />
              <br />
              <br />
            </Col>
          </Row>

          <Row>{transactions}</Row>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    details: state.block.details
  };
};

const mapDispatchToProps = {
  getTransaction: actions.getTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(list);
