import React from 'react'
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import SideBar from "./components/side-bar/side-bar.component";
import HomePage from "./pages/home-page/home-page.component";
import SearchPage from './pages/search-page/search-page.component';
import WatchPage from './pages/watch-page/watch-page.component';
import HistoryPage from './pages/history-page/history-page.component'

function App() {

  return (
    <div className="App">
      <NavBar />
      <main className='main-content'>
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/search/:searchKey' component={SearchPage} />
          <Route path='/watch/:videoId' component={WatchPage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
