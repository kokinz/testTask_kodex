import { ActionType } from "../actions";

const initialState = {
  symbolsData: [],
};

const symbolsAdd = (string, symbolsData) => {
  const index = symbolsData.findIndex((element) => element.value === string);

  if (index > -1) {
    symbolsData[index].count = symbolsData[index].count + 1;
    symbolsData[index].date = Date.now();

    return [...symbolsData];
  }

  return [...symbolsData, {value: string, count: 1, date: Date.now()}];
};

const symbolsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SYMBOLS_ADD:
      return {
        symbolsData: symbolsAdd(action.payload, state.symbolsData),
      };
    default:
      return state;
  }
};

export {symbolsData};
