import "jest-fetch-mock";
import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Form from "./form.jsx";

let store;
let mockStore;
let history;

describe('Component: Form', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    store = mockStore({
      DATA: {tickets:[]},
    });

    const setIsFilter = jest.fn();
  
    const Filter = {
      zero: false,
      one: false,
      two: false,
      three: false,
      all: false,
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <Form isFilter={Filter} setIsFilter={setIsFilter}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Количество пересадок/i)).toBeInTheDocument();
  });
});