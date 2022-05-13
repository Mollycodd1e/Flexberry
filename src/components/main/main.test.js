import "jest-fetch-mock";
import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Main from './main.jsx';

let store;
let mockStore;
let history;


describe('Component: Form', () => {
  beforeAll(() => {
    mockStore = configureStore([thunk.withExtraArgument()]);
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    store = mockStore({
      DATA: {tickets:[]},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    )
    
    expect(screen.getByText(/Самый дешевый/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество пересадок/i)).toBeInTheDocument();
    expect(screen.getByText(/Показать еще 5 билетов!/i)).toBeInTheDocument();
  });
});