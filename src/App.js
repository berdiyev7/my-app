import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';

function App() {
   return (
      <Router>
         <GlobalStyle />
         <Navbar />
      </Router>
   );
}

export default App;
