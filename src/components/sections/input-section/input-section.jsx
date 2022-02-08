import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { numbersAdd, otherAdd, symbolsAdd } from '../../../store/actions.js';

function InputSection({onSymbolsAdd, onNumbersAdd, onOtherAdd}) {
  const [value, setValue] = useState('');

  const checkValue = (value) => {
    if (!(/[0-9]/.test(value))) {
      return onSymbolsAdd(value);
    }

    if (/^\d+$/.test(value)) {
      return onNumbersAdd(value);
    }

    onOtherAdd(value);
  }

  const handleInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    checkValue(value);
  };

  return (
    <section className='input-section section'>
      <h2 className='visually-hidden'>Ввод</h2>
      <form className='form' action='https://echo.htmlacademy.ru/' onSubmit={handleSubmit}>
        <input className='input' type='text' value={value} onChange={handleInputChange} required />
        <button className='button'>Ввод</button>
      </form>
    </section>
  );
}

InputSection.propTypes = {
  onSymbolsAdd: PropTypes.func.isRequired,
  onNumbersAdd: PropTypes.func.isRequired,
  onOtherAdd: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSymbolsAdd(string) {
    dispatch(symbolsAdd(string))
  },
  onNumbersAdd(string) {
    dispatch(numbersAdd(string))
  },
  onOtherAdd(string) {
    dispatch(otherAdd(string))
  },
});

export {InputSection};
export default connect(null, mapDispatchToProps)(InputSection);
