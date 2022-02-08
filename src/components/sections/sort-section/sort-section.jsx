import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortByABC, sortByTime } from '../../../store/actions';

function SortSection({onSortByTime, onSortByABC}) {

  const handleSortByTime = () => {
    onSortByTime();
  }

  const handleSortByABC = () => {
    onSortByABC();
  }

  return (
    <section className='sort'>
      <h2 className='sort__title'>Сортировка:</h2>
      <ol className='sort__list'>
        <li className='sort__item'>
          <button className='button' onClick={handleSortByTime}>
            по времени добавления
          </button>
        </li>
        <li className='sort__item'>
          <button className='button' onClick={handleSortByABC}>
            по алфавиту
          </button>
        </li>
      </ol>
    </section>
  );
}

SortSection.propTypes = {
  onSortByTime: PropTypes.func.isRequired,
  onSortByABC: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSortByTime() {
    dispatch(sortByTime())
  },
  onSortByABC() {
    dispatch(sortByABC())
  },
});

export {SortSection};
export default connect(null, mapDispatchToProps)(SortSection);
