import {createReducer} from '@reduxjs/toolkit';
import {loadTickets} from '../action';

const initialState = {
  tickets: ['Москва','Москва','Москва','Москва','Москва'],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTickets, (state, action) => {
      state.tickets = [];
      state.tickets.push(action.payload);
    });
    //.addCase(changeCoords,(state, action) => {
    //  state.coords = [];
    //  state.coords.push(action.payload);
    //});
});

export {data};