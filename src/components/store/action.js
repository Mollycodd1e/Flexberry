import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_TICKETS: '/loadTickets',
  LOAD_FILTERS: '/loadFilters',
  DELETE_FILTERS: '/deleteFilters',
  ADD_FORMLIST: '/addFormList',
};

export const loadTickets = createAction(ActionType.LOAD_TICKETS, (tickets) => ({
  payload: tickets,
}));

export const setFilters = createAction(ActionType.LOAD_FILTERS, (filters) => ({
  payload: filters,
}))

export const deleteFilters = createAction(ActionType.DELETE_FILTERS, (filters) => ({
  payload: filters,
}))

export const addFormList = createAction(ActionType.ADD_FORMLIST, (formList) => ({
  payload: formList,
}))