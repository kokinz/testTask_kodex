import { combineReducers } from 'redux';
import { numbersData } from './numbers-data/numbers-data.js';
import { otherData } from './other-data/other-data.js';
import { sortData } from './sort-data/sort-data.js';
import { symbolsData } from './symbols-data/symbols-data.js';

const NameSpace = {
  SYMBOLS_DATA: 'SYMBOLS_DATA',
  NUMBERS_DATA: 'NUMBERS_DATA',
  OTHER_DATA: 'OTHER_DATA',
  SORT_DATA: 'SORT_DATA',
};

const combine = combineReducers({
  [NameSpace.SYMBOLS_DATA]: symbolsData,
  [NameSpace.NUMBERS_DATA]: numbersData,
  [NameSpace.OTHER_DATA]: otherData,
  [NameSpace.SORT_DATA]: sortData,
});

export {NameSpace, combine as default};
