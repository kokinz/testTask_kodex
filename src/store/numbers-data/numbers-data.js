import { ActionType } from "../actions";

const initialState = {
  numbersData: [],
};

const numbersAdd = (string, numbersData) => {
  const index = numbersData.findIndex((element) => element.value === string);

  if (index > -1) {
    numbersData[index].count = numbersData[index].count + 1;
    numbersData[index].date = Date.now();

    return [...numbersData];
  }

  return [...numbersData, {value: string, count: 1, date: Date.now()}];
};

const numbersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.NUMBERS_ADD:
      return {
        numbersData: numbersAdd(action.payload, state.numbersData),
      };
    default:
      return state;
  }
};

export {numbersData};
