import {NameSpace} from '../root-reducer.js'

const getNumbersState = (state) => state[NameSpace.NUMBERS_DATA].numbersData;

export {getNumbersState};
