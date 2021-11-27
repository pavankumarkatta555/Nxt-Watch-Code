import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: ${props => (props.bg ? '#181818' : ' #f9f9f9')};
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

export const HomeSearchCardModalContainer = styled.div`
  background-color: ${props => (props.bg ? '#181818' : ' #f9f9f9')};
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

export const HomeCardModalContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
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
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-left: 32px;
    width: 500px;
    align-self: flex-start;
  }
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
export const HomeVideosContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LoaderContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-self: center;

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
export const VideosUnorderedList = styled.ul`
  @media (min-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
export const NoResultsContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const NoSearchImage = styled.img`
  width: 60%;

  @media (min-width: 768px) {
    width: 40%;
  }
`
export const NoSearchResultsHeading = styled.h1`
  color: #475569;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 20px;
`
export const NoSearchResultsDescription = styled.p`
  color: #475569;
  text-align: center;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
`
