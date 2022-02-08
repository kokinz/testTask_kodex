import { ActionType } from "../actions";

const initialState = {
  otherData: [],
};

const otherAdd = (string, otherData) => {
  const index = otherData.findIndex((element) => element.value === string);

  if (index > -1) {
    otherData[index].count = otherData[index].count + 1;
    otherData[index].date = Date.now();

    return otherData;
  }

  return [...otherData, {value: string, count: 1, date: Date.now()}];
};

const otherData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OTHER_ADD:
      return {
        otherData: otherAdd(action.payload, state.otherData),
      };
    default:
      return state;
  }
};

export {otherData};
