import {Reducer} from 'redux';
import {TSimpsonsActionObjectTypes} from './actions';
import {ISimpsonsState, SimpsonActionTypes} from './types';

const initialSimpsonsState: ISimpsonsState = {
  simpsonList: [],
};

export const simpsonsReducer: Reducer<
  ISimpsonsState,
  TSimpsonsActionObjectTypes
> = (state = initialSimpsonsState, action) => {
  switch (action.type) {
    case SimpsonActionTypes.GET_SIMPSON_SUCCESS:
      return {...state, simpsonList: action.payload.simpsons};
    case SimpsonActionTypes.DELETE_SIMPSON:
      return {...state, simpsonList: action.payload.items};
    case SimpsonActionTypes.ADD_SIMPSON:
      return {
        ...state,
        simpsonList: [...state.simpsonList, action.payload.item],
      };
    default:
      return state;
  }
};
