import {createReducer} from '@reduxjs/toolkit';
import {loadTickets} from '../action.js';

const initialState = {
  tickets: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTickets, (state, action) => {
      state.tickets = [];
      action.payload.tickets.map((ticket) => state.tickets.push(ticket));
    })
});

export {data};