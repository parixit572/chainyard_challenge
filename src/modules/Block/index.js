import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get, isObject, isArray } from 'lodash';
import { Form, Button, Row, Col } from 'react-bootstrap';

import TransactionList from '../Transaction/components/list';
import actions from './actions';
import './index.less';

function Block({ details, error, getLatestBlock, getBlock }) {
  const [blockHash, setBlockHash] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [error]);

  const handleViewTransaction = (hash, e) => {
    if (hash && !isObject(hash)) {
      const path = `transaction/${hash}`;
      history.push(path);
    }
  };

  const handleChangeHash = (e) => {
    let value = '';
    if (e && get(e, 'target.value', '')) {
      value = get(e, 'target.value', '');
    } else if (!isObject(e)) {
      value = e;
    }
    setBlockHash(value);
  };

  const handleSearch = (e) => {
    if (blockHash) {
      getBlock(blockHash);
    } else {
      alert('Please enter Block hash value');
    }
  };

  const getLatest = (e) => {
    setBlockHash('');
    getLatestBlock();
  };

  //format transactions of single block
  let transactions = [];
  if (details && details.tx && isArray(details.tx)) {
    details.tx.forEach((transaction) => {
      transactions.push({
        index: transaction.tx_index
      });
    });
  }

  return (
    <div className="block-wrapper">
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Block hash...."
              value={blockHash}
              onChange={handleChangeHash}
            />
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={handleSearch}>
              Search
            </Button>
          </Col>
          <Col>
            <Button variant="outline-success" onClick={getLatest}>
              Get Latest Block
            </Button>
          </Col>
        </Row>

        <TransactionList handleViewTransaction={handleViewTransaction} />
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    details: state.block.details,
    blockHash: state.block.blockHash,
    error: state.block.error
  };
};

const mapDispatchToProps = {
  getLatestBlock: actions.getLatestBlock,
  getBlock: actions.getBlock
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
