import React from "react";

function Form() {
  return (
    <form>
      <fieldset title="Работа со временем">  
        <legend>Количество пересадок</legend>
        <ul>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-all" id="transfer-all" />
            <label htmlFor="transfer-all">Все</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-zero" id="transfer-zero" />
            <label htmlFor="transfer-zero">Без пересадок</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-one" id="transfer-one" />
            <label htmlFor="transfer-one">1 пересадка</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-two" id="transfer-two" />
            <label htmlFor="transfer-two">2 пересадки</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-three" id="transfer-three" />
            <label htmlFor="transfer-three">3 пересадки</label>
          </li>
        </ul>
      </fieldset>
    </form>
  )
}

export default Form;