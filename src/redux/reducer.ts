import {ReducersMapObject, combineReducers} from 'redux';

import {IAppState} from './types';
import {simpsonsReducer} from './simpsons/reducer';
import {loadingReducer} from './loading/reducer';

const reducers: ReducersMapObject<any, any> = {
  simpsons: simpsonsReducer,
  loading: loadingReducer,
};

export const rootReducer = combineReducers<IAppState>(reducers);
