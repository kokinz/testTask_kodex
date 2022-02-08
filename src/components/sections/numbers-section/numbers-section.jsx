import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNumbersState } from '../../../store/numbers-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';

function NumbersSection({numbersStrings}) {
  return (
    <section className='section section--numbers'>
      <ul className='list'>
        {numbersStrings.map((stringElement) => (
          <li key={stringElement.date} className='item'>
            {stringElement.value}
            {stringElement.count > 1 ? (<span className='count'>{`x${stringElement.count}`}</span>) : ''}
          </li>
        ))}
      </ul>
    </section>
  );
}

NumbersSection.propTypes = {
  numbersStrings: PropTypes.arrayOf(stringPropType).isRequired,
};

const mapStateToProps = (state) => ({
  numbersStrings: getNumbersState(state),
});

export {NumbersSection};
export default connect(mapStateToProps, null)(NumbersSection);
