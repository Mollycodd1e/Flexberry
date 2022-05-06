import {createReducer} from '@reduxjs/toolkit';
import {deleteFilters, loadTickets, setFilters, addFormList} from '../action.js';

const initialState = {
  tickets: [],
  filters: [],
  formList: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTickets, (state, action) => {
      state.tickets = [];
      action.payload.tickets.map((ticket) => state.tickets.push(ticket));
    })
    .addCase(setFilters, (state, action) => {
      action.payload.map((filter) => state.filters.push(filter));
      console.log(action.payload);
    })
    .addCase(deleteFilters, (state, action) => {
      state.filters.filter((filter) => filter === action.payload[0]);
    })
    .addCase(addFormList, (state, action) => {
      state.formList = action.payload;
    });
});

export {data};