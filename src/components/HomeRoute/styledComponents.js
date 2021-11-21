import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.bg ? '#231f20' : ' #f9f9f9')};
  height: 90vh;
  border: none;
  outline: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const HomeCardModalContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100vw;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
`
export const HomeCardModalCloseBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 30px;
  color: '#909090';
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 0;
  align-self: flex-end;
`

export const HomeCardModalContentContainer = styled.div`
  width: 70%;
  margin-left: 32px;
`

export const HomeCardModalWebsiteLogo = styled.img`
  width: 60%;
`
export const HomeCardModalContent = styled.p`
  color: #606060;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 12px;
`
export const HomeCardModalGetItNowBtn = styled.button`
  color: #606060;
  border: 1px solid #606060;
  background: transparent;
  padding: 8px;
  margin-top: 22px;
`
export const HomeSearchContainer = styled.div`
  align-self: center;
  width: 90%;
  border: 2px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`
export const HomeSearchInput = styled.input`
  background-color: #ffffff;
  height: 30px;
  width: 80%;
  border: none;
  outline: none;
  padding-left: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const HomeSearchIconBtn = styled.button`
  height: 30px;
  width: 20%;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 6px;
`
