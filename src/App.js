import {Component} from 'react'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import WelcomePage from './components/WelcomePage'
import ThankYouPage from './components/ThankYouPage'

import './App.css'

const App = () => (

      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/thankyou' component={ThankYouPage}/>
        </Switch>
      </BrowserRouter>
    
  
)

export default App
