import {NameSpace} from '../reducer.js';

export const getTicketsList = (state) => state[NameSpace.DATA].tickets;

export const getFilterList = (state) => state[NameSpace.DATA].filters;

export const getFormList = (state) => state[NameSpace.DATA].formList;