import {ISimpsons} from '../../utils/types';

export enum SimpsonActionTypes {
  GET_SIMPSON = 'GET_SIMPSON',
  GET_SIMPSON_SUCCESS = 'GET_SIMPSON_SUCCESS',
  DELETE_SIMPSON = 'DELETE_SIMPSON',
  ADD_SIMPSON = 'ADD_SIMPSON',
}

export interface ISimpsonsState {
  simpsonList: ISimpsons[];
}
