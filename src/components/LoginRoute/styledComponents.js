import styled from 'styled-components'

export const LoginRouteMainContainer = styled.div`
  background-color: ${props => (props.bg ? '#212121' : '#ffffff')};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const LoginRouteResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.div`
  width: 90vw;
  background-color: ${props => (props.bg ? '#000000' : '#ffffff')};
  box-shadow: ${props => (props.bg ? '' : '#f4f4f4 2px 2px 4px 8px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 992px) {
    width: 30vw;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 40%;
  padding-bottom: 24px;
`

export const LoginForm = styled.form`
  width: 90%;

  @media (min-width: 768px) {
    width: 66%;
    margin-top: 16px;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px;
`

export const LoginInputLabel = styled.label`
  color: ${props => (props.bg ? '#f9f9f9' : '#909090')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const LoginInput = styled.input`
  background: transparent;
  width: 90%;
  height: 34px;
  border: 1px solid #64748b;
  border-radius: 2px;
  outline: none;
  color: #606060;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  padding-left: 8px;
`

export const LoginCheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px;
`

export const LoginCheckBoxInput = styled.input`
  width: 18px;
  height: 18px;
`

export const LoginCheckBoxLabel = styled.label`
  color: ${props => (props.bg ? '#f9f9f9' : '#909090')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 90%;
  height: 40px;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  margin: 16px;
`
export const ErrorMsg = styled.p`
  color: ${props => (props.bg ? '#ff0000' : '#ff0b37')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  margin: 16px;
  margin-top: 0px;
  padding-top: 0px;
`
