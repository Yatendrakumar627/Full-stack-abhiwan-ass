import React from 'react';
import './App.css';
import PaginatedDataList from './components/PaginatedDataList';

const App = () => {
  return (
    <div className="App">
      <h1>Dummy Comments </h1>
      <PaginatedDataList apiUrl="https://jsonplaceholder.typicode.com/comments" />
    </div>
  );
};

export default App;
