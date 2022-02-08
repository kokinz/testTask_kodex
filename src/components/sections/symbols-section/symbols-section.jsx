import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSymbolsState } from '../../../store/symbols-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';

function SymbolsSection({symbolsStrings}) {
  return (
    <section className='section section--symbols'>
      <ul className='list'>
        {symbolsStrings.map((stringElement) => (
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
};

const mapStateToProps = (state) => ({
  symbolsStrings: getSymbolsState(state),
});

export {SymbolsSection};
export default connect(mapStateToProps, null)(SymbolsSection);
