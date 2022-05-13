import "jest-fetch-mock";
import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './app.jsx';

let history = null;
let store = null;
let fakeApp = null;

const createFakeStore = configureStore([thunk.withExtraArgument()]);

describe('Application render', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = createFakeStore({
      DATA: {tickets: []},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
  
    render(fakeApp)

    expect(screen.getByText(/Показать еще 5 билетов!/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество пересадок/i)).toBeInTheDocument();
  });
});