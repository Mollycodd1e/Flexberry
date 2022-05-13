import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Ticket from "./ticket.jsx";

let store;
let mockStore;
let history;

const MOCK_TICKET = {
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

describe('Component: Form', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    store = mockStore({
      DATA: {tickets:[]},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Ticket ticket={MOCK_TICKET} />
        </Router>
      </Provider>
    )

    expect(screen.getAllByText(/В пути/i));
  });
});