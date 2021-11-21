import {ActionsUnion, createAction} from '@martin_hotell/rex-tils';
import {ISimpsons} from '../../utils/types';
import {SimpsonActionTypes} from './types';

export const SimpsonActions = {
  getSimpsons: () => createAction(SimpsonActionTypes.GET_SIMPSON),
  getSimpsonsSuccess: (simpsons: ISimpsons[]) =>
    createAction(SimpsonActionTypes.GET_SIMPSON_SUCCESS, {simpsons}),
  deleteSimpson: (items: ISimpsons[]) =>
    createAction(SimpsonActionTypes.DELETE_SIMPSON, {items}),
  addSimpson: (item: ISimpsons) =>
    createAction(SimpsonActionTypes.ADD_SIMPSON, {item}),
};

export type TSimpsonsActionObjectTypes = ActionsUnion<typeof SimpsonActions>;
