import React from 'react';

function SortItem(props) {

  const {sort} = props;

  return (
    <li>
      <span>{sort}</span>
    </li>
  )
}

export default SortItem;