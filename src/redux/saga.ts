import {all} from 'redux-saga/effects';

import {getSimpsonsWatcher} from './simpsons/sagas';

function* watchAll() {
  yield all([getSimpsonsWatcher()]);
}

export default watchAll;
