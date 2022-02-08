import {NameSpace} from '../root-reducer.js'

const getSymbolsState = (state) => state[NameSpace.SYMBOLS_DATA].symbolsData;

export {getSymbolsState};
