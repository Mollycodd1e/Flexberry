import {NameSpace} from '../reducer.js';

export const getTicketsList = (state) => state[NameSpace.DATA].tickets;
