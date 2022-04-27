//import {loadTickets} from "./action";

export const fetchTicketsList = () => (dispatch, _getState, api) => (
  api.get('https://my-json-server.typicode.com/Mollycodd1e/Flexberry').then((responce) => console.log(responce))
    //.then((response) => api.get(`https://front-test.beta.aviasales.ru/tickets?${response}`)
    //.then(({data}) => {
    //  console.log(data)
    //  const tickets = data.map((ticket,i) => (i < 5) ? adaptOffersToClient(ticket) : '');
    //  return tickets;
    //})
    //.then((tickets) => 
    //console.log(tickets),
    //dispatch(loadTickets(tickets))))
);