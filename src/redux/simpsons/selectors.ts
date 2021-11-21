import {IAppState} from '../types';

export const simpsonListSelector = (state: IAppState) =>
  state?.simpsons?.simpsonList;
