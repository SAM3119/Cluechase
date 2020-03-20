import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';



import './App.css';
import Step_1 from './components/step_1/step_1';
import Step_2 from './components/step_2/step_2';
import Step_3 from './components/step_3/step_3';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path = "/" component = {Step_1} />
      <Route path = "/games"  component = {Step_2}/>
      <Route path = "/payment" component = {Step_3} />
    </div>
    </BrowserRouter>
  );
}

export default App;
