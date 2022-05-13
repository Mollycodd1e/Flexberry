import React from 'react';
import PropTypes from 'prop-types';

function SortList(props) {

  const {isCheap, changeCheapSort, isFast, changeFastSort} = props;

  const handleCheapSort = (evt) => {
    evt.preventDefault();
    changeCheapSort(isCheap);

    if (isFast) {
      changeFastSort(false);
    }
  }

  const handleFastSort = (evt) => {
    evt.preventDefault();
    changeFastSort(isFast);
    
    if (isCheap) {
      changeCheapSort(false);
    }
  }

  return (
    <ul className="tickets__filter-list">
      <li className={`tickets__filter-item ${isCheap ? 'tickets__filter-item--active' : ''}`} onClick={(evt) => handleCheapSort(evt)}>
        <span>Самый дешевый</span>
      </li>
      <li className={`tickets__filter-item ${isFast ? 'tickets__filter-item--active' : ''}`} onClick={(evt) => handleFastSort(evt)}>
        <span>Самый быстрый</span>
      </li>
    </ul>
  )
}

SortList.propTypes = {
  isCheap: PropTypes.bool.isRequired,
  changeCheapSort: PropTypes.func.isRequired,
  isFast: PropTypes.bool.isRequired,
  changeFastSort: PropTypes.func.isRequired,
};

export default SortList;