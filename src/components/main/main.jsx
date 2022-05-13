import React, { useEffect, useState } from 'react';
import Header from '../header/header.jsx';
import Form from '../form/form.jsx';
import TicketsList from '../tickets-list/tickets-list.jsx';
import SortList from '../sort-list/sort-list.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsList } from '../store/data/selector.js';
import { fetchTicketsList } from '../store/api-action.js';

function Main() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTicketsList());
  }, [])

  const shortArray = useSelector(getTicketsList);

  const [isCheap, setIsCheap] = useState(false);

  const [isFast, setIsFast] = useState(false);

  const [isFilter, setIsFilter] = useState({
    zero: false,
    one: false,
    two: false,
    three: false,
    all: false,
  });

  const changeCheapSort = () => {
    setIsCheap((prevState) => !prevState);
  }

  const changeFastSort = () => {
    setIsFast((prevState) => !prevState);
  }

  return (
    <div className="body__wrapper">
      <Header />
      <main className="main-page">
        <section className="filter">
          <Form isFilter = {isFilter} setIsFilter = {setIsFilter}/>
        </section>
        <section className="tickets">
          <SortList isCheap = {isCheap} changeCheapSort = {changeCheapSort} isFast = {isFast}
          changeFastSort = {changeFastSort}/>
          <TicketsList isFilter={isFilter} isCheap = {isCheap} isFast = {isFast} list = {shortArray}/>
          <a href="#">Показать еще 5 билетов!</a>
        </section>
      </main>
      <footer className="main-footer">
      </footer>
    </div>  
  )
}

export default Main;