import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSymbolsState } from '../../../store/symbols-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';
import { getSortState } from '../../../store/sort-data/selector.js';
import { getSortSymbols } from '../../../utils.js';

function SymbolsSection({symbolsStrings, sortType}) {
  return (
    <section className='section section--symbols'>
      <h2 className='visually-hidden'>Символы</h2>
      <ul className='list'>
        {[...symbolsStrings].sort(getSortSymbols(sortType)).map((stringElement) => (
          <li key={stringElement.date} className='item'>
            {stringElement.value}
            {stringElement.count > 1 ? (<span className='count'>{`x${stringElement.count}`}</span>) : ''}
          </li>
        ))}
      </ul>
    </section>
  );
}

SymbolsSection.propTypes = {
  symbolsStrings: PropTypes.arrayOf(stringPropType).isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  symbolsStrings: getSymbolsState(state),
  sortType: getSortState(state),
});

export {SymbolsSection};
export default connect(mapStateToProps, null)(SymbolsSection);
