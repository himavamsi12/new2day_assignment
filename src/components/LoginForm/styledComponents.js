import styled from 'styled-components'


export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  
  margin-bottom:20px;
  width: 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  width: 150px;
  background-color: transparent;
  border: solid 2px red;
  border-radius: 5px;
  font-family: 'SF Compact Display', sans-serif;
  font-size: 15px;
  height: 30px;
  color: red;
  margin-top: 20px;
  margin-left: 70px;
  cursor:pointer;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`

export const InputLabel = styled.label`
  font-family: 'SF Compact Display', sans-serif;
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
font-family: 'SF Compact Display', sans-serif;
  font-size: 15px;
  color: #ffffff;
  background-color: ${(props) => (props.inputcolor?'#292a2b':'#ffffff')};
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
export const Paragraph = styled.p`
  text-align: center;
  font-size: 15px;
  color: #292a2b;
  font-family: 'SF Compact Display', sans-serif;
`
export const Break = styled.hr`

  color: #d0d1db;
  width:50%;
  background-color: #d0d1db;
  height:1px;

`
export const con = styled.div`

display: flex;
justify-content:center;

`
