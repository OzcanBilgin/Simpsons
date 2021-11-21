import {IAppState} from '../types';

import {LoaderName} from './types';

export const isLoadingSelector = (state: IAppState, loaderName: LoaderName) =>
  state.loading[loaderName];
