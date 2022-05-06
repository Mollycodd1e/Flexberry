import React, { useEffect } from "react";
import {getRandomTickets, ticketsValue} from "../../const";
import Ticket from "../ticket/ticket.jsx";
import { getFormList, getTicketsList } from "../store/data/selector.js";
import { useDispatch, useSelector } from "react-redux";
import { addFormList } from "../store/action";

function TicketsList() {

  const dispatch = useDispatch();

  const randomTicketsList = getRandomTickets(useSelector(getTicketsList), ticketsValue);

  //const sortedList = useSelector(getFormList);
  //console.log(sortedList);

  useEffect(() => {
    dispatch(addFormList(randomTicketsList));
  }, [randomTicketsList]);

  return (
    <ul className="tickets__tickets-list">
      {randomTicketsList.map((ticket, i) => 
        <Ticket ticket={ticket} key={i}/>
      )}      
    </ul>
  )
}

export default TicketsList