import React from 'react';
import { connect } from 'react-redux';

import PageLoaderImg from '../../../assets/img/loader.gif';
import './index.less';

const Loader = ({ isLoading, children }) => {
  const className = 'loading-wrapper ' + (isLoading ? 'loading' : '');
  return (
    <>
      <div className={className}>
        <img
          className="page-loading-image"
          src={PageLoaderImg}
          alt="Loading..."
        />
      </div>
      <>{children}</>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading
  };
};

export default connect(mapStateToProps)(Loader);
