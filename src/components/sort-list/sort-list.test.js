import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import SortList from './sort-list.jsx';

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

    const Cheap = false;

    const Fast = false;

    const changeCheapSort = jest.fn();

    const changeFastSort = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <SortList isCheap={Cheap} changeCheapSort={changeCheapSort} isFast={Fast} changeFastSort={changeFastSort}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Самый дешевый/i)).toBeInTheDocument();
    expect(screen.getByText(/Самый быстрый/i)).toBeInTheDocument();
  });
});