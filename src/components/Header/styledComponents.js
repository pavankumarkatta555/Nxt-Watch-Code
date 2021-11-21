import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 10vh;
  background-color: ${props => (props.bg ? '#313131' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavWebsiteLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`
export const NavWebsiteLogo = styled.img`
  margin-left: 16px;
  width: 30%;

  @media (min-width: 768px) {
    width: 40%;
  }
`

export const NavUnorderedListContainer = styled.ul`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    width: 30%;
  }
`
export const NavListItem = styled.li`
  list-style-type: none;
  color: ${props => (props.modeColor ? '#ffffff' : '#0f0f0f')};
  font-size: 24px;
  font-weight: 500;
  margin: 8px;

  @media (min-width: 768px) {
    margin: 16px;
    font-size: 28px;
  }
`
export const NavMenuIconContainer = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`
export const NavProfileIconContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
export const NavProfileLogo = styled.img`
  margin-top: 6px;
  height: 38px;
  width: 38px;
`

export const NavMenuContainer = styled.div`
  background-color: ${props => (props.bg ? '#212121' : '#ffffff')};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const NavCloseBtnMobile = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  color: ${props => (props.modeColor ? '#ffffff' : '#0f0f0f')};
  align-self: flex-end;
  margin: 32px;
`
export const NavMenuResponsiveContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavMenuListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavMenuListItem = styled.li`
  background-color: ${props => (props.isActive ? '#cbd5e1' : '')};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => (props.isActive ? '#ff0000' : '#909090')};
  font-size: 22px;
  margin: 6px;
  padding: 6px;
`

export const NavLogOutPopUpMobile = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavLogOutPopUpDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const NavLogOutBtnMobile = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  color: ${props => (props.modeColor ? '#ffffff' : '#0f0f0f')};
`
export const NavLogOutBtnDesktop = styled.button`
  background-color: transparent;
  height: 30px;
  width: 90px;
  margin-bottom: 14px;
  color: ${props => (props.modeColor ? '#f9f9f9' : '#3b82f6')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  border: ${props =>
    props.modeColor ? '1px solid #f9f9f9' : '1px solid #3b82f6'};
  border-radius: 2px;
`

export const NavPopUpModalContainer = styled.div`
  background-color: ${props => (props.bg ? '#181818' : '#f1f1f1')};
  width: 80%;
  height: 26%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavPopUpModalMsg = styled.p`
  color: ${props => (props.modeColor ? '#f1f5f9' : '#00306e')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const NavPopUpModalLogOutCancelBtnContainer = styled.div`
  width: 46%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`

export const NavPopUpModalLogOutCancelBtn = styled.button`
  background-color: ${props => (props.bg ? '#3b82f6' : 'transparent')};
  color: ${props => (props.bg ? '#f9f9f9' : '#616e7c')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
  border: ${props => (props.bg ? 'none' : '1px solid #94a3b8')};
  border-radius: 2px;
  outline: none;
`
