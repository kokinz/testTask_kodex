import {NameSpace} from '../root-reducer.js'

const getSortState = (state) => state[NameSpace.SORT_DATA].sortState;

export {getSortState};
