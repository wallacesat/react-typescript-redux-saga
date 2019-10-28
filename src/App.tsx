import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import RepositoryList from './components/RepositoryList';

const App: React.FC = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
