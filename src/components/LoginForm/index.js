import {Component} from 'react'
import {FiSearch} from 'react-icons/fi'
import { useHistory, Redirect } from "react-router-dom"

import {
  AppContainer,
  FormContainer,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  Paragraph,
  Break,
  con,

} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    email: '',
    phno:'',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm =  () => {
    const {username, email} = this.state
     const {history} = this.props
     history.replace('/thankyou')
    
  }

  renderUsernameField = () => {
    const {username} = this.state
    const inputcolor = username!==''? true:false
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
          inputcolor={inputcolor}
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state
    const inputemailcolor = email!==''?true:false
    return (
      <>
        <InputLabel htmlFor="email">EMAIL ADDRESS</InputLabel>
        <UserInput
          type="email"
          id="email"
          value={email}
          name="email"
          onChange={this.onChangeHandler}
          placeholder="Type a E-Mail"
          inputcolor={inputemailcolor}
        />
      </>
    )
  }
  renderPhoneNumberField = () => {
    const {phno} = this.state
    const inputphnocolor = phno!==''?true:false
    return (
      <>
        <InputLabel htmlFor="phno">PHONE NUMBER</InputLabel>
        <UserInput
          type="tel"
          id="phno"
          value={phno}
          name="phno"
          onChange={this.onChangeHandler}
          placeholder="Type a phone number"
          inputcolor={inputphnocolor}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <AppContainer>
        <FiSearch size={28} color='red'/>
        <Paragraph>Please confirm or edit your contact information, so that we can <br/>notify you when you are approved for our BETA</Paragraph>
        <Break />
       
        
        <FormContainer >
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderEmailField()}</InputContainer>
          <InputContainer>{this.renderPhoneNumberField()}</InputContainer>
          </FormContainer>
          <Break />
          <con>
          <LoginButton type="button" onClick={this.submitForm}>SIGN UP</LoginButton>
          </con>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
      </AppContainer>
    )
  }
}

export default LoginForm
