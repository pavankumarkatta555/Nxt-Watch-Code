import styled from 'styled-components'

export const VideoPlayerMainContainer = styled.div`
  width: 100vw;
  border: none;
  outline: none;
  padding: 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const VideoPlayerDescriptionContainer = styled.div`
  background-color: ${props => (props.bg ? '#0f0f0f' : ' #f9f9f9')};
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
`

export const LoaderContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding-top: 32px;

  @media (min-width: 768px) {
    height: 900px;
    justify-content: center;
    width: 80%;
    padding-top: 4px;
    margin-top: 16px;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

export const FailureViewImage = styled.img`
  width: 60%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    width: 80%;
  }
`

export const FailureHeading = styled.h1`
  text-align: center;
  color: #00306e;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`

export const FailureViewDescription = styled.p`
  text-align: center;
  margin: 16px;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`

export const RetryButton = styled.button`
  align-self: center;
  background-color: #4f46e5;
  color: #f4f4f4;
  font-family: 'Roboto';
  font-weight: 400;
  padding: 8px;
  width: 80px;
  border: none;
  outline: none;
  border-radius: 2px;
  margin-bottom: 16px;
`
export const VideoPlayerDescriptionResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 320px;

  @media (min-width: 768px) {
    width: 560px;
    margin: 16px;
    height: 50vh;
  }

  @media (min-width: 992px) {
    width: 76vw;
    height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const VideoDescriptionContainer = styled.div`
  margin: 32px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.bg ? '#cccccc' : '#313131')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewPublishedButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 36px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ViewPublishedContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0px;
  }

  @media (min-width: 992px) {
    width: 30%;
  }
`

export const ViewListItem = styled.p`
  list-style-type: none;
  width: 28%;

  @media (min-width: 768px) {
    width: 38%;
  }

  @media (min-width: 992px) {
    width: 28%;
  }
`

export const TimeListItem = styled.p``

export const LikeDisLikeSaveButtonsList = styled.ul`
  list-style-type: none;
  display: flex;

  @media (min-width: 768px) {
    width: 40%;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 992px) {
    width: 28%;
  }
`

export const ButtonListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => (props.bg ? '#2563eb' : ' #64748b')};
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-right: 28px;

  @media (min-width: 768px) {
  }
`

export const DLSButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-left: 8px;
  color: ${props => (props.bg ? '#2563eb' : ' #64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const HorizontalLine = styled.hr`
  align-self: center;
  width: 90%;
  background-color: #475569;
  border: 1px solid #475569;

  @media (min-width: 768px) {
    width: 94%;
  }
`
export const ChannelContainer = styled.div`
  margin: 24px;
  display: flex;
`

export const ChannelLogo = styled.img`
  width: 10%;

  @media (min-width: 768px) {
    width: 6%;
  }
`

export const ChannelDescriptionContainer = styled.div`
  margin-left: 16px;

  @media (min-width: 768px) {
    margin-left: 24px;
  }
`

export const ChannelName = styled.p`
  color: ${props => (props.bg ? '#cccccc' : '#313131')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelSubscribers = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  margin: 20px;
  margin-top: 0;
  color: ${props => (props.bg ? '#cccccc' : '#313131')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;

  @media (min-width: 768px) {
    margin-left: 36px;
    padding-left: 48px;
    font-size: 16px;
  }

  @media (min-width: 992px) {
    margin-left: 76px;
    padding-left: 48px;
    font-size: 16px;
  }
`
