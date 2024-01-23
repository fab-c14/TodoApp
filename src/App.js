import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux API Example</h1>
        <DataDisplay />
      </div>
    </Provider>
  );
}

export default App;
