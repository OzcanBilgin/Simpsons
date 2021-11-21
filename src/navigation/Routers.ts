import {AddNewCharacter} from '../pages/AddNewCharacter';
import {Home} from '../pages/Home';
import {Details} from '../pages/Details';

export enum Routes {
  Home = 'Simpsons',
  Details = 'Details',
  AddNewCharacter = 'AddNewCharacter',
}

export const screenList = [
  {
    name: Routes.Home,
    component: Home,
    options: {
      headerTitleAlign: 'center',
    },
  },
  {
    name: Routes.Details,
    component: Details,
    options: {
      headerTitleAlign: 'center',
    },
  },
  {
    name: Routes.AddNewCharacter,
    component: AddNewCharacter,
    options: {
      headerTitleAlign: 'center',
    },
  },
];
