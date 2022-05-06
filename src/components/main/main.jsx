import React from 'react';
import Header from '../header/header.jsx';
import Form from '../form/form.jsx';
import TicketsList from '../tickets-list/tickets-list.jsx';
import SortList from '../sort-list/sort-list.jsx';

function Main() {
  
  return (
    <div className="body__wrapper">
      <Header />
      <main className="main-page">
        <section className="filter">
          <Form />
        </section>
        <section className="tickets">
          <SortList />
          <TicketsList />
          <a href="#">Показать еще 5 билетов!</a>
        </section>
      </main>
      <footer className="main-footer">
      </footer>
    </div>  
  )
} 

export default Main;