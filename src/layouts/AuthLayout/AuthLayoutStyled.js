import styled from 'styled-components'
import IMAGES from '../../images'

export const AuthLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5;
    background-image: url(${IMAGES.AUTH_BACKGROUND});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`