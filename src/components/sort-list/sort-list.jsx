import React from 'react';
import { useSelector } from 'react-redux';
import {sortList} from '../../const.js';
import SortItem from '../sort-item/sort-item.jsx';
import { getFormList} from '../store/data/selector.js';

function SortList() {

  const newList = useSelector(getFormList);
  console.log(newList)
  if (newList.length > 0) {
    console.log(newList)
    //const sortedList = newList.sort((a, b) => a.price - b.price);
    //console.log(sortedList);
  }

  return (
    <ul className="tickets__filter-list">
      {sortList.map((sort, i) => 
        <SortItem sort={sort} key={i}/>
      )}
    </ul>
  )
}

export default SortList;