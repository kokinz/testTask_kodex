import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNumbersState } from '../../../store/numbers-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';
import { getSortState } from '../../../store/sort-data/selector.js';
import { getSortNumbers } from '../../../utils.js';

function NumbersSection({numbersStrings, sortType}) {
  return (
    <section className='section section--numbers'>
      <h2 className='visually-hidden'>Числа</h2>
      <ul className='list'>
        {[...numbersStrings].sort(getSortNumbers(sortType)).map((stringElement) => (
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
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  numbersStrings: getNumbersState(state),
  sortType: getSortState(state),
});

export {NumbersSection};
export default connect(mapStateToProps, null)(NumbersSection);
