import React, { FC } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

const App: FC = () => {
  return (
    <div className="App">
      <div className="border border-blue-500 max-w-2xl mx-auto rounded-sm mt-20 ml-92">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
