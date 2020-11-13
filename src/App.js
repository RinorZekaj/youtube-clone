import React from 'react'
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import SideBar from "./components/side-bar/side-bar.component";
import HomePage from "./pages/home-page/home-page.component";
import SearchPage from './pages/search-page/search-page.component';
import TrendingsPage from './pages/trendings-page/trendings-page.component'
import WatchPage from './pages/watch-page/watch-page.component';

function App() {

  return (
    <div className="App">
      <NavBar />
      <main className='main-content'>
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/search/:searchKey' component={SearchPage} />
          <Route path="/trending" component={TrendingsPage} />
          <Route path='/watch/:videoId' component={WatchPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
