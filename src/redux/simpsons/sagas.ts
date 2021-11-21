import {put, takeEvery, delay, call, all, select} from 'redux-saga/effects';

import {SimpsonActionTypes} from './types';
import {SimpsonActions} from './actions';
import {addLoader} from '../loading/sagas';
import {LoaderName} from '../loading/types';
import {SimpsonApi} from '../../api/simpsons';

function* getSimpsonsSaga(): any {
  try {
    const state = yield select(state => state);
    if (state.simpsons.simpsonList.length < 1) {
      const [simpsons] = yield all([call(SimpsonApi.getSimpsons), delay(2000)]);
      yield put(SimpsonActions.getSimpsonsSuccess(simpsons));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getSimpsonsWatcher() {
  yield takeEvery(
    SimpsonActionTypes.GET_SIMPSON,
    addLoader(getSimpsonsSaga, LoaderName.Simpsons),
  );
}
