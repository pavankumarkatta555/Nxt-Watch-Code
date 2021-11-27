import styled from 'styled-components'

export const NotFoundContainer = styled.div`
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

export const NotFoundMainContainer = styled.div`
  background-color: ${props => (props.bg ? '#0f0f0f' : '#f9f9f9')};
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 880px;
  }
`

export const NotFoundImage = styled.img`
  width: 90%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.bg ? '#f4f4f4' : '#1e293b')};
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.bg ? '#94a3b8' : '#909090')};
  width: 80%;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
`
