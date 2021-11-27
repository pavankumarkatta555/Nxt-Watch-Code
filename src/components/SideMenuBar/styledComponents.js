import styled from 'styled-components'

export const HomeMenuSideMenuBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 30%;
    background-color: ${props => (props.bg ? '#212121' : '#ffffff')};
    display: flex;
    flex-direction: column;
    padding-top: 32px;
  }

  @media (min-width: 1024px) {
    width: 20%;
    background-color: ${props => (props.bg ? '#212121' : '#ffffff')};
    display: flex;
    flex-direction: column;
    padding-top: 16px;
  }
`

export const HomeSideMenuListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
`

export const HomeMenuListItem = styled.li`
  background-color: ${props => (props.isActive ? '#cbd5e1' : '')};
  color: ${props => (props.isActive ? '#ff0000' : '#909090')};
  width: 100%;
  padding: 4px;
  padding-left: 16px;
  margin-bottom: 16px;
`

export const HomeSideMenuBarBottomSection = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 16px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.bg ? '#f9f9f9' : '#00306e')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const SocialMediaContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
`
export const SocialMediaImage = styled.img`
  height: 36px;
  width: 36px;
  margin: 8px;
`
export const SocialMediaDescription = styled.p`
  color: ${props => (props.bg ? '#f9f9f9' : '#00306e')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
