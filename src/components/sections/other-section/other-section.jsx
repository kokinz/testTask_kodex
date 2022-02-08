import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getOtherState } from '../../../store/other-data/selector.js'
import { stringPropType } from '../../../store/string-proptype.js';

function OtherSection({otherStrings}) {
  return (
    <section className='section section--other'>
      <ul className='list'>
        {otherStrings.map((stringElement) => (
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
};

const mapStateToProps = (state) => ({
  otherStrings: getOtherState(state),
});

export {OtherSection};
export default connect(mapStateToProps, null)(OtherSection);
