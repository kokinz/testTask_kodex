import { SortType } from "./const";

const sortValues = (a, b) => {
  if (a.value < b.value) {
    return -1;
  }

  if (a.value > b.value) {
    return 1;
  }

  return 0;
};

const sortTime = (a, b) => {
  if (a.date < b.date) {
    return -1;
  }

  if (a.date > b.date) {
    return 1;
  }

  return 0;
};

const sortNumbers = (a, b) => {
  if (+a.value < +b.value) {
    return -1;
  }

  if (+a.value > +b.value) {
    return 1;
  }

  return 0;
};

const getSortSymbols = (sortType) => {
  if (sortType === SortType.ABC) {
    return sortValues;
  }

  if (sortType === SortType.TIME) {
    return sortTime;
  }
};

const getSortNumbers = (sortType) => {
  if (sortType === SortType.ABC) {
    return sortNumbers;
  }

  if (sortType === SortType.TIME) {
    return sortTime;
  }
};

export {sortValues, sortTime, sortNumbers, getSortSymbols, getSortNumbers};
