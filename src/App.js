import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';
import { useState } from 'react';
import youtubeData from './data/youtubeData.json';
import "./App.css"

function App() {
  return (
    <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Explore" component={Explore} />
          <Route path="/subscription" component={Subscription} />
    </div>
  );
}

export default App;
