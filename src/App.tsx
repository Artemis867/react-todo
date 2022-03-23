import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavigationComponent from './react-todo/component/nav/Navigation';
import FormComponent from './react-todo/component/form/Form';
import MainContentComponent from './react-todo/component/main-content/Main-content';

function App() {
  return (
    <div className="App">
      <NavigationComponent/>
      <FormComponent/>
      <MainContentComponent/>
    </div>
  );
}

export default App;