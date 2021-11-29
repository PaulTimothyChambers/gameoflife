// import React, { Component } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridContainer from '../GridContainer/GridContainer';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={
        <main>
          <GridContainer />
        </main>
      }/>
    </Routes>
  )
}

export default App;
