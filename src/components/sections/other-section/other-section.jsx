import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getOtherState } from '../../../store/other-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';
import { getSortState } from '../../../store/sort-data/selector.js';
import { getSortSymbols } from '../../../utils.js';

function OtherSection({otherStrings, sortType}) {
  return (
    <section className='section section--other'>
      <h2 className='visually-hidden'>Символы и Числа</h2>
      <ul className='list'>
        {[...otherStrings].sort(getSortSymbols(sortType)).map((stringElement) => (
          <li key={stringElement.date} className='item'>
            {stringElement.value}
            {stringElement.count > 1 ? (<span className='count'>{`x${stringElement.count}`}</span>) : ''}
          </li>
        ))}
      </ul>
    </section>
  );
}

OtherSection.propTypes = {
  otherStrings: PropTypes.arrayOf(stringPropType).isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  otherStrings: getOtherState(state),
  sortType: getSortState(state),
});

export {OtherSection};
export default connect(mapStateToProps, null)(OtherSection);
