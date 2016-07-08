import React, { PropTypes } from 'react';
import { changeFilter } from '../actions/todo';
import { connect } from 'react-redux';

const Filter = ({ active, onClick, children }) => {
  if (active) {
    return <li className="active"><a>{children}</a></li>;
  }

  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="text-center filter"
      >
        {children}
      </a>
    </li>
  );
};

Filter.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
