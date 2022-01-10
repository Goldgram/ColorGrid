import React from 'react'
// import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemTables } from './ItemTables/ItemTables'
import { Game } from './Game/Game'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/tables'>
          <ItemTables />
        </Route>
        <Route path='/'>
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
