import { ActionType } from "../actions";
import { SortType } from "../../const";

const initialState = {
  sortState: SortType.TIME,
};

const sortData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_BY_TIME:
      return {
        sortState: SortType.TIME,
      };
    case ActionType.SORT_BY_ABC:
      return {
        sortState: SortType.ABC,
      };
    default:
      return state;
  }
};

export {sortData};
