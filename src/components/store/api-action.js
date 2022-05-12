import {loadTickets} from "./action";

export const fetchTicketsList = () => (dispatch, _getState) => (
  fetch('https://my-json-server.typicode.com/Mollycodd1e/Flexberry/db')
    .then((data) => data.json())
      .then((tickets) => {
        dispatch(loadTickets(tickets))
    })
);
