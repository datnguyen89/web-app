import styled from 'styled-components'
import IMAGES from '../../images'

export const AuthLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    height: 100vh;
    overflow: auto;
    background: ${props => props.theme.solidLightColor};
    background-image: url(${IMAGES.AUTH_BACKGROUND});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;   
`
export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
`
export const LogoImage = styled.div`
  overflow: hidden;
  img {
    object-position: center;
    object-fit: cover;
    max-height: 70px;
  }
`
export const LogoText = styled.div`
  margin-left: 15px;
  color: rgba(0,0,0,.85);
  font-weight: 600;
  font-size: 33px;
`
export const Description = styled.h1`
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0,0,0,.45);
  font-size: 14px;
`