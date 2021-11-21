import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './reducer';
import watchAll from './saga';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);
export const persistor = persistStore(store);

sagaMiddleware.run(watchAll);
