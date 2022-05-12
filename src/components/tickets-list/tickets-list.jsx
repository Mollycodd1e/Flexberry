import React from "react";
import Ticket from "../ticket/ticket.jsx";

function TicketsList(props) {
  
  const {isFilter, isCheap, isFast, list} = props;

  const sortPrice = (arr) => {
    return arr.slice().sort((a,b) => a.price - b.price)
  }

  const sortDuration = (arr) => {
    return arr.slice().sort((a,b) => a.segments[0].duration - b.segments[0].duration)
  }

  let filteredTickets = [];
  
  if (list.length > 0 && Object.values(isFilter).filter(value => value === true).length === 0) {
    list.map((ticket) => filteredTickets.push(ticket));
  } else {
    filteredTickets = [];
   
    for (let i = 0; i < Object.values(isFilter).length ; i++) {
      if (Object.values(isFilter)[Object.values(isFilter).length - 1]) {
        list.map((ticket) => filteredTickets.push(ticket));
        break;
      }

      if (Object.values(isFilter)[i]) {
        list.map((ticket) => ticket.segments[0].stops.length === i ? filteredTickets.push(ticket) : '')
      }
    }
  }  

  return (
    <ul className="tickets__tickets-list">
      {isCheap ? sortPrice(filteredTickets).map((ticket, i) => 
        <Ticket ticket={ticket} key={i}/>) :
        isFast ? sortDuration(filteredTickets).map((ticket, i) => 
        <Ticket ticket={ticket} key={i}/>) :
        filteredTickets.map((ticket, i) => 
        <Ticket ticket={ticket} key={i}/>
      )}      
    </ul>
  )
}

export default TicketsList