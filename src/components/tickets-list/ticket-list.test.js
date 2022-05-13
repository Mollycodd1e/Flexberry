import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import TicketsList from './tickets-list.jsx';

let store;
let mockStore;
let history;

const MOCK_TICKETS = [
  {
    "price": 84499,
    "carrier": "TG",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-21T21:29:00.000Z",
        "stops": [
          "SHA",
          "AUH"
        ],
        "duration": 1534
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T14:11:00.000Z",
        "stops": [
          "HKG"
        ],
        "duration": 1225
      }
    ]
  },
  {
    "price": 30918,
    "carrier": "SU",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-21T22:38:00.000Z",
        "stops": [
          "HKG",
          "SIN"
        ],
        "duration": 669
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T13:23:00.000Z",
        "stops": [
          "BKK"
        ],
        "duration": 1567
      }
    ]
  },
  {
    "price": 74509,
    "carrier": "EK",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T04:00:00.000Z",
        "stops": [],
        "duration": 1487
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T05:24:00.000Z",
        "stops": [
          "BKK",
          "DXB"
        ],
        "duration": 1946
      }
    ]
  },
  {
    "price": 72593,
    "carrier": "SU",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T10:05:00.000Z",
        "stops": [
          "HKG",
          "AUH",
          "IST"
        ],
        "duration": 672
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T13:19:00.000Z",
        "stops": [
          "DXB",
          "HKG"
        ],
        "duration": 1338
      }
    ]
  },
  {
    "price": 31351,
    "carrier": "S7",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T15:58:00.000Z",
        "stops": [
          "HKG",
          "DXB"
        ],
        "duration": 1076
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T12:56:00.000Z",
        "stops": [
          "DXB"
        ],
        "duration": 1814
      }
    ]
  },
  {
    "price": 40941,
    "carrier": "FV",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T07:52:00.000Z",
        "stops": [
          "SHA",
          "DXB"
        ],
        "duration": 843
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T08:30:00.000Z",
        "stops": [],
        "duration": 1907
      }
    ]
  },
  {
    "price": 56721,
    "carrier": "EK",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T03:47:00.000Z",
        "stops": [
          "KUL",
          "DXB"
        ],
        "duration": 746
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T02:21:00.000Z",
        "stops": [],
        "duration": 1427
      }
    ]
  }
]

describe('Component: Form', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    const ticketsValue = 5;

    store = mockStore({
      DATA: {tickets: MOCK_TICKETS.slice().sort(() => 0.5 - Math.random()).slice(0, ticketsValue)},
    });

    const Cheap = false;

    const Fast = false;
  
    const Filter= {
      zero: false,
      one: false,
      two: false,
      three: false,
      all: false,
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <TicketsList isFilter={Filter} isCheap={Cheap} isFast={Fast} list ={MOCK_TICKETS.slice().sort(() => 0.5 - Math.random()).slice(0, ticketsValue)} />
        </Router>
      </Provider>
    )
  
    expect(screen.getAllByText(/В пути/i));
  });

  it('should render `ticketValue` tickets', () => {
    const ticketsValue = 5;

    const Cheap = false;

    const Fast = false;
  
    const Filter= {
      zero: false,
      one: false,
      two: false,
      three: false,
      all: false,
    };
    
    render(
      <Provider store={store}>
        <Router history={history}>
          <TicketsList isFilter={Filter} isCheap={Cheap} isFast={Fast} list ={MOCK_TICKETS.slice().sort(() => 0.5 - Math.random()).slice(0, ticketsValue)} />
        </Router>
      </Provider>
    )
  
    expect(MOCK_TICKETS.slice().sort(() => 0.5 - Math.random()).slice(0, ticketsValue)).toHaveLength(ticketsValue);
  });
});