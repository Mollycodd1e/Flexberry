import React from "react";
import {convertMinutes, getNewHours, getNewMinutes, getTransferName} from "../../const.js";

function Ticket(props) {

  const {ticket} = props;
  
  const firstDate = new Date(ticket.segments[0].date);
  const firstHour = firstDate.getHours() < 10 ? '0' + firstDate.getHours() : firstDate.getHours();
  const firstMinute = firstDate.getMinutes() < 10 ? '0' + firstDate.getMinutes() : firstDate.getMinutes();

  const secondDate = new Date(ticket.segments[1].date);
  const secondHour = secondDate.getHours() < 10 ? '0' + secondDate.getHours() : secondDate.getHours();;
  const secondMinute = secondDate.getMinutes() < 10 ? '0' + secondDate.getMinutes() : secondDate.getMinutes();;
    
  return (
    <li>
      <p>{new Intl.NumberFormat('ru-RU').format(ticket.price)} р</p>
      <div className="tickets__logo-wrapper">
        <img src={`http://pics.avs.io/110/36/${ticket.carrier}.png`} />
      </div>
      <div className="tickets__forward-wrapper">
        <div className="tickets__destination">
          <span>{ticket.segments[0].origin} – {ticket.segments[0].destination}</span>
          <p>
            {firstHour}:{firstMinute} – {getNewHours(firstDate, ticket.segments[0].duration)}:
            {getNewMinutes(firstDate, ticket.segments[0].duration)}
          </p>
        </div>
        <div className="tickets__time">
          <span>В&nbsp;пути</span>
          <p>{convertMinutes(ticket.segments[0].duration)}</p>
        </div>
        <div className="tickets__stops">
          <span>
            {ticket.segments[0].stops.length}&nbsp;{getTransferName(ticket.segments[0].stops)}
          </span>
          <p>{ticket.segments[0].stops.map((stop) => stop).join(',')}</p>
        </div>
      </div>
      <div className="tickets__backward-wrapper">
        <div className="tickets__destination">
          <span>{ticket.segments[1].origin} – {ticket.segments[1].destination}</span>
          <p>
            {secondHour}:{secondMinute} – {getNewHours(secondDate, ticket.segments[1].duration)}:
            {getNewMinutes(secondDate, ticket.segments[1].duration)}
          </p>
        </div>
        <div className="tickets__time">
          <span>В&nbsp;пути</span>
          <p>{convertMinutes(ticket.segments[1].duration)}</p>
        </div>
        <div className="tickets__stops">
          <span>
            {ticket.segments[1].stops.length}&nbsp;{getTransferName(ticket.segments[1].stops)}
          </span>
          <p>{ticket.segments[1].stops.map((stop) => stop).join(',')}</p>
        </div>
      </div>
    </li>
  )
}

export default Ticket;