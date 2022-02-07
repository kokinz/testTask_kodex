import React from 'react';

function SortSection() {
  return (
    <section className="sort">
      <h2 className='sort__title'>Сортировка:</h2>
      <ol className="sort__list">
        <li className="sort__item">
          <button className="sort__button">
            по времени добавления
          </button>
        </li>
        <li className="sort__item">
          <button className="sort__button">
            по алфавиту
          </button>
        </li>
      </ol>
    </section>
  );
}

export default SortSection;
