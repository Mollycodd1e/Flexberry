import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './header.jsx';

let store;
let mockStore;
let history;


describe('Component: Header', () => {
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
          <Header />
        </Router>
      </Provider>
    )

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
  });
});