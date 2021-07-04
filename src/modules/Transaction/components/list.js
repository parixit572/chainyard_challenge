import React from 'react';
import { isArray } from 'lodash';
import { Button, Row, Col, Card } from 'react-bootstrap';

function list({ details, handleViewTransaction }) {
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

export default list;
