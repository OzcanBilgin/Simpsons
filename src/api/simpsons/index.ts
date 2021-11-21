import axios from 'axios';

import {API_ENDPOINT} from '../config';

export class SimpsonApi {
  public static getSimpsons() {
    return axios.get(API_ENDPOINT).then(function (response) {
      return response.data;
    });
  }
}
