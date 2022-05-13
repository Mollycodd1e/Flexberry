import { ticketsValue } from '../../../const.js';
import {NameSpace} from '../reducer.js';

// Получение 5 рандомных билетов

export const getTicketsList = (state) => state[NameSpace.DATA].tickets.slice().sort(() => 0.5 - Math.random()).slice(0, ticketsValue);
