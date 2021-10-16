import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.Filter__label}>
      Filter <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
