import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  list-style-type: none;
  margin-top: 24px;

  @media (min-width: 576px) {
    width: 44%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const ChannelLogoDescriptionContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const LogoContainer = styled.div`
  width: 10%;
`

export const ChannelLogo = styled.img`
  width: 90%;
`

export const DescriptionContainer = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  color: ${props => (props.bg ? '#cccccc' : '#313131')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const ChannelNameCountTimeContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
`

export const ChannelName = styled.p`
  list-style-type: none;
  width: 25%;

  @media (min-width: 576px) {
    width: 100%;
    margin-bottom: 8px;
  }
`

export const ViewsCount = styled.p`
  list-style-type: disc;
  width: 15%;

  @media (min-width: 576px) {
    width: 30%;
    list-style-type: none;
  }
`

export const DateFormat = styled.p`
  list-style-type: disc;
  width: 25%;

  @media (min-width: 576px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`
