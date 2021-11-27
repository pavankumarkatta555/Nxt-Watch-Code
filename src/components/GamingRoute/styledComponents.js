import styled from 'styled-components'

export const GamingMainContainer = styled.div`
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
export const GamingRouteBannerGamesContainer = styled.div`
  background-color: ${props => (props.bg ? '#0f0f0f' : ' #f9f9f9')};
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    max-height: 900px;
    width: 80%;
    overflow-y: auto;
  }
`
export const GamingRouteBannerContainer = styled.div`
  background-color: ${props => (props.bg ? '#181818' : '#ebebeb')};
  height: 14vh;
  display: flex;
  align-items: center;
  padding-left: 32px;

  @media (min-width: 768px) {
    height: 18vh;
    padding-bottom: 28px;
  }
`
export const GamingImage = styled.div`
  background-color: ${props => (props.bg ? '#000000' : '#d7dfe9')};
  width: 50px;
  height: 50px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 90px;
    width: 90px;
    border-radius: 48px;
    margin-top: 24px;
    margin-left: 24px;
  }
`

export const GamingHeading = styled.h1`
  margin-left: 24px;
  color: ${props => (props.bg ? '#f1f5f9' : '#1e293b')};
  font-size: 24px;
  font-family: 'Roboto';

  @media (min-width: 768px) {
    font-size: 36px;
    margin-top: 16px;
  }
`
export const GamingGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-items: center;
  margin-top: 32px;
  padding-top: 32px;

  @media (min-width: 768px) {
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
export const GamesListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const GamesListItem = styled.li``

export const GameThumbnailImage = styled.img`
  width: 100%;
`

export const GameTitle = styled.p`
  color: ${props => (props.bg ? '#cccccc' : '#231f20')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 16px;

  @media (min-width: 576px) {
    width: 100%;
  }
`

export const GameDescription = styled.p`
  color: ${props => (props.bg ? '#cccccc' : '#475569')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 4px;

  @media (min-width: 576px) {
    width: 60%;
  }
`
