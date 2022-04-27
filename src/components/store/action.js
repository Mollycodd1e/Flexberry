import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_TICKETS: '/loadTickets',
};

export const loadTickets = createAction(ActionType.LOAD_TICKETS, (tickets) => ({
  payload: tickets,
}));
