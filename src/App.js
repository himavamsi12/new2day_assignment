import {Component} from 'react'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'
import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App
