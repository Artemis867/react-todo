import React from 'react';
import logo from './logo.svg';
import './bootstrap.scss';
import './App.scss';
import NavigationComponent from './react-todo/component/nav/Navigation';
import MainContentComponent from './react-todo/component/main-content/Main-content';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './react-todo/reducers';
import { Provider } from 'react-redux';
import { MockTicketData } from './react-todo/mock/ticket.mock';

const preload: any = MockTicketData;

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preload,
});
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavigationComponent/>
        <MainContentComponent/>
      </Provider>
    </div>
  );
}

export default App;