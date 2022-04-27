import React from "react";

function Ticket() {
  return (
    <li>
      <p>13 400 р</p>
      <div className="tickets__logo-wrapper">
        <img src="http://pics.avs.io/110/36/S7.png" />
      </div>
      <div className="tickets__forward-wrapper">
        <div className="tickets__destination">
          <span>MOW – HKT</span>
          <p>10:45 – 08:00</p>
        </div>
        <div className="tickets__time">
          <span>В&nbsp;пути</span>
          <p>21ч 15м</p>
        </div>
        <div className="tickets__stops">
          <span>2&nbsp;пересадки</span>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className="tickets__backward-wrapper">
        <div className="tickets__destination">
          <span>MOW – HKT</span>
          <p>11:20 – 00:50</p>
        </div>
        <div className="tickets__time">
          <span>В&nbsp;пути</span>
          <p>13ч 30м</p>
        </div>
        <div className="tickets__stops">
          <span>2&nbsp;пересадки</span>
          <p>HKG</p>
        </div>
      </div>
    </li>
  )
}

export default Ticket;