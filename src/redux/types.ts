import {ISimpsonsState} from './simpsons/types';

export interface IAppState {
  simpsons: ISimpsonsState;
  loading: any;
}
