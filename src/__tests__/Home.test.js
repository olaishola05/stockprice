import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Routes } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../components/Home';
import Details from '../components/Details';

test('if Home renders correctly', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Home />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//
test('Details page', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Details />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
