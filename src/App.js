import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import RouterApp from './configs/router'

function App() {
  return (
    <div id={"AppContent"}>
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
