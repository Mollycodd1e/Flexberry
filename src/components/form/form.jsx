import React from "react";
import PropTypes from 'prop-types';

function Form(props) {

  const {isFilter, setIsFilter} = props;

  const handleStops = (filter) => {
    const gg = Object.entries(isFilter).map(([a , b]) => a === filter ? [a , !b]: [a, b]);
    setIsFilter(Object.fromEntries(gg));
  }

  return (
    <form>
      <fieldset title="Работа со временем">  
        <legend>Количество пересадок</legend>
        <ul>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-all" id="transfer-all" 
            onChange={() => handleStops('all')}/>
            <label htmlFor="transfer-all">Все</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-zero" id="transfer-zero" 
              onChange={() => handleStops('zero')}/>
            <label htmlFor="transfer-zero">Без пересадок</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-one" id="transfer-one" 
            onChange={() => handleStops('one')}/>
            <label htmlFor="transfer-one">1 пересадка</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-two" id="transfer-two" 
            onChange={() => handleStops('two')}/>
            <label htmlFor="transfer-two">2 пересадки</label>
          </li>
          <li>
            <input className="visually-hidden" type="checkbox" name="transfer-three" id="transfer-three" 
            onChange={() => handleStops('three')}/>
            <label htmlFor="transfer-three">3 пересадки</label>
          </li>
        </ul>
      </fieldset>
    </form>
  )
}

Form.propTypes = {
  isFilter: PropTypes.shape({
    zero: PropTypes.bool.isRequired,
    one: PropTypes.bool.isRequired,
    two: PropTypes.bool.isRequired,
    three: PropTypes.bool.isRequired,
    all: PropTypes.bool.isRequired,
  }),
  setIsFilter: PropTypes.func.isRequired,
};

export default Form;