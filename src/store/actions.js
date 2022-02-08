const ActionType = {
  SYMBOLS_ADD: 'symbols/addItem',
  NUMBERS_ADD: 'numbers/addItem',
  OTHER_ADD: 'other/addItem',
  SORT_BY_TIME: 'sort/byTime',
  SORT_BY_ABC: 'sort/byABC',
}

const symbolsAdd = (string) => ({
  type: ActionType.SYMBOLS_ADD,
  payload: string,
});

const numbersAdd = (string) => ({
  type: ActionType.NUMBERS_ADD,
  payload: string,
});

const otherAdd = (string) => ({
  type: ActionType.OTHER_ADD,
  payload: string,
});

const sortByTime = () => ({
  type: ActionType.SORT_BY_TIME,
});

const sortByABC = () => ({
  type: ActionType.SORT_BY_ABC,
});

export {
  ActionType,
  symbolsAdd,
  numbersAdd,
  otherAdd,
  sortByTime,
  sortByABC,
};
