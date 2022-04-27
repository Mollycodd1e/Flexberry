import {NameSpace} from '../reducer.js';

export const getAddress = (state) => state[NameSpace.DATA].address;

export const getCoords = (state) => state[NameSpace.DATA].coords;