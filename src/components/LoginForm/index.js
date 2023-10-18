import {Component} from 'react'

import {
  AppContainer,
  FormContainer,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  Paragraph,

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

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
  }

  renderUsernameField = () => {
    const {username} = this.state
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
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type="email"
          id="password"
          value={email}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
      </>
    )
  }
  renderPhoneNumberField = () => {
    const {phno} = this.state
    return (
      <>
        <InputLabel htmlFor="username">PHONE NUMBER</InputLabel>
        <UserInput
          type="tel"
          id="username"
          value={phno}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Type a phone number"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <AppContainer>
        <Paragraph>Please confirm or edit your contact information, so that we can notify you when you are approved for our BETA</Paragraph>
        <hr/>
        <FormContainer onSubmit={this.submitForm}>
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderEmailField()}</InputContainer>
          <InputContainer>{this.renderPhoneNumberField()}</InputContainer>
          <hr/>
          <LoginButton type="submit">SIGN UP</LoginButton>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
