import {NameSpace} from '../root-reducer.js'

const getOtherState = (state) => state[NameSpace.OTHER_DATA].otherData;

export {getOtherState};
